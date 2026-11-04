// import Footer from "@/components/shared/Footer";

import Navbar from "@/components/shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navbar />
        {/* Navbar */}
      </header>
      {/* Full width canvas for all page sections */}
      <main className="flex-1 w-full">{children}</main>
      {/* <Footer /> */}
      {/* Footer */}
    </div>
  );
}
