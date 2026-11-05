export default function ContactProcessInfo() {
  const steps = [
    {
      step: "1",
      title: "We pick up and book you in",
      description: "Emergencies go to the front of the schedule. Everything else gets the next open window that suits you.",
    },
    {
      step: "2",
      title: "You get a name and a truck",
      description: "We confirm who is coming and when. Marked truck, photo ID, and a technician on our own payroll.",
    },
    {
      step: "3",
      title: "You approve the price first",
      description: "We diagnose, then quote before any work starts. Nothing gets replaced without your say-so.",
    },
  ];

  return (
    <div className="space-y-8 lg:pr-6">
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
          What Happens Next
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.15]">
          From your <br className="hidden sm:inline" />
          message to <span className="text-primary">cold air</span>
        </h2>
      </div>

      <div className="space-y-6">
        {steps.map((item) => (
          <div key={item.step} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-extrabold flex items-center justify-center shrink-0 text-lg border border-primary/20">
              {item.step}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-foreground text-base sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}