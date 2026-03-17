"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function ClassGlimpse() {
  return (
    <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-4xl px-6">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
            A Glimpse of Our Classes
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-body">
            See how our expert tutors break down complex SAT concepts into
            easy-to-understand lessons during live 1-on-1 sessions.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={200}>
          {/* Responsive 16:9 Video Container */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://codeyoung2-my.sharepoint.com/personal/team_codeyoung_com/_layouts/15/embed.aspx?UniqueId=71f09c20-8e94-11a9-4e88-39041a121dce&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Ka6jTY"
              title="A glimpse of Catalyst Test Prep classes"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <p className="mt-8 text-center text-sm leading-relaxed text-body">
            Every session is tailored to the student&apos;s skill level and target
            score. Our tutors use real College Board questions, timed drills, and
            interactive problem-solving to keep students engaged and improving
            every week.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
