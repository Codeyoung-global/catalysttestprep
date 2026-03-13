export default function GettingStarted() {
  const steps = [
    {
      number: 1,
      title: "Connect with an Advisor",
      description: "Speak with our dedicated advisor who understands your goals.",
    },
    {
      number: 2,
      title: "Take a Free Diagnostic",
      description: "Complete a diagnostic test to identify strengths and gaps.",
    },
    {
      number: 3,
      title: "Get a Custom Program",
      description: "Receive a study plan built specifically for your needs.",
    },
    {
      number: 4,
      title: "Start Learning",
      description: "Begin 1-on-1 sessions with your matched tutor.",
    },
  ];

  return (
    <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }} id="how-it-works">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
          How to Start Your SAT Prep in 4 Steps
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-body">
          Getting started is simple. From your first call to your first session, we make the process seamless.
        </p>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] top-6 h-0.5 bg-gray-200" />

            {steps.map((step) => (
              <div key={step.number} className="relative flex w-1/4 flex-col items-center px-4 text-center">
                {/* Number Circle */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-light text-xl font-bold text-green-primary">
                  {step.number}
                </div>
                <h3 className="mt-4 text-base font-bold text-heading">{step.title}</h3>
                <p className="mt-2 text-sm text-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gray-200" />

            {steps.map((step, i) => (
              <div key={step.number} className={`relative flex items-start gap-4 ${i < steps.length - 1 ? "pb-10" : ""}`}>
                {/* Number Circle */}
                <div className="absolute -left-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-light text-lg font-bold text-green-primary">
                  {step.number}
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-bold text-heading">{step.title}</h3>
                  <p className="mt-1 text-sm text-body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#hero-form"
            className="inline-block rounded-lg bg-green-primary px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-green-dark"
          >
            Start My Free SAT Prep Trial &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
