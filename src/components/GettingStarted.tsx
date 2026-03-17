"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function GettingStarted() {
  const steps = [
    {
      number: 1,
      title: "Connect with an Advisor",
      description: "Speak with our dedicated advisor who understands your goals.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Take a Free Diagnostic",
      description: "Complete a diagnostic test to identify strengths and gaps.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Get a Custom Program",
      description: "Receive a study plan built specifically for your needs.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Start Learning",
      description: "Begin 1-on-1 sessions with your matched tutor.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }} id="how-it-works">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
            How to Start Your SAT Prep in 4 Steps
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-body">
            Getting started is simple. From your first call to your first session, we make the process seamless.
          </p>
        </AnimateOnScroll>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] top-8 z-0 h-0.5 bg-gradient-to-r from-green-primary/20 via-green-primary/40 to-green-primary/20" />

            {steps.map((step) => (
              <AnimateOnScroll key={step.number} animation="fade-up" delay={step.number * 150}>
                <div className="relative z-10 flex w-full flex-col items-center px-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-light text-green-primary transition-all duration-300 hover:scale-110 hover:bg-green-primary hover:text-white hover:shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-heading">{step.title}</h3>
                  <p className="mt-2 text-sm text-body">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="md:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-green-primary/20 via-green-primary/40 to-green-primary/20" />

            {steps.map((step, i) => (
              <AnimateOnScroll key={step.number} animation="slide-right" delay={i * 100}>
                <div className={`relative flex items-start gap-4 ${i < steps.length - 1 ? "pb-10" : ""}`}>
                  <div className="absolute -left-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-light text-green-primary">
                    {step.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-bold text-heading">{step.title}</h3>
                    <p className="mt-1 text-sm text-body">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="mt-12 text-center">
            <a
              href="#hero-form"
              className="inline-block rounded-lg bg-green-primary px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-green-dark hover:shadow-lg"
            >
              Start My Free SAT Prep Trial &rarr;
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
