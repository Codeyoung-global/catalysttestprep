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
            the needle. Whether you&apos;re aiming for a top score or looking to make a significant
            leap, our proven system is built to get you there.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
