import { envVars } from "@/config/env.config";
import mongoose from "mongoose";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend NodeJS Global interface to cache Mongoose connection
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectDB = async (): Promise<typeof mongoose> => {
  // 1. If connection already exists, reuse it immediately
  if (cached.conn) {
    return cached.conn;
  }

  // 2. If no promise exists, create a new connection promise with security options
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Disable buffering to fail fast if connection drops
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    cached.promise = mongoose
      .connect(envVars.DATABASE_URL, opts)
      .then((mongooseInstance) => {
        console.log("✅ MongoDB Connected Successfully!");
        console.log("Connection State:", mongoose.connection.readyState);
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null; // Clear cached promise on failure so next attempt retries
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to Database");
  }

  return cached.conn;
};
