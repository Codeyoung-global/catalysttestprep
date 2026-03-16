"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function IntroParagraph() {
  return (
    <section className="bg-white" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-6 text-2xl font-bold text-heading md:text-3xl">
            Your Score Leap Starts Here
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={100}>
          <p className="text-base leading-relaxed text-body md:text-lg">
            Catalyst Test Prep matches every student with a dedicated, Ivy-level tutor and a
            smart AI-powered curriculum that adapts to <em>you</em>. Our structured diagnostic
            approach pinpoints your exact strengths and growth areas, so every session moves
            the needle. And yes, we put our money where our mouth is:
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="scale-in" delay={250}>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-light px-6 py-3">
            <svg className="h-6 w-6 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-base font-bold text-green-primary md:text-lg">
              1400+ SAT or 150+ point boost, guaranteed, or your money back
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
