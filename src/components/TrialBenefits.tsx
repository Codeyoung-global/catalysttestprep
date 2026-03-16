"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function TrialBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="h-10 w-10 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Know Where You Stand",
      description: "Take a free diagnostic assessment to pinpoint your exact strengths and areas for improvement.",
    },
    {
      icon: (
        <svg className="h-10 w-10 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Discover Your Learning Style",
      description: "Gain insights into your learning personality so your tutor can adapt their approach to you.",
    },
    {
      icon: (
        <svg className="h-10 w-10 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Meet Your Master Tutor",
      description: "Connect instantly with a top-tier tutor matched to your goals and learning profile.",
    },
  ];

  return (
    <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
            What You&apos;ll Get in Your Free SAT Prep Trial
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            Your free trial includes everything you need to understand your current level and see how Catalyst can help.
          </p>
        </AnimateOnScroll>

        {/* Benefit Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 150}>
              <div className="hover-lift h-full rounded-xl bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-light">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-heading">{benefit.title}</h3>
                <p className="text-sm text-body">{benefit.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Guarantee Callout Bar */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-12 rounded-xl bg-green-light px-6 py-6 md:px-10">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <svg className="h-10 w-10 shrink-0 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-xl font-bold text-heading md:text-2xl">
                  Score 1400+ in SAT or Add 150 Points - Guaranteed, or Your Money Back
                </p>
                <p className="mt-1 text-sm text-caption">Based on your starting score</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
