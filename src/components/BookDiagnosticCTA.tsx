"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function BookDiagnosticCTA() {
  const diagnosticIncludes = [
    "Full-length SAT practice test under real testing conditions",
    "Detailed score breakdown by section and question type",
    "Personalized study plan based on your strengths and weaknesses",
    "1-on-1 consultation with an expert tutor to review results",
  ];

  return (
    <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Find Out Exactly Where You Stand
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
            Book a free diagnostic test and get a clear picture of your SAT
            readiness - no commitment required.
          </p>
        </AnimateOnScroll>

        {/* What the Diagnostic Includes */}
        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="mb-10 inline-block text-left">
            <ul className="space-y-4">
              {diagnosticIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* CTA Button */}
        <AnimateOnScroll animation="scale-in" delay={300}>
          <div className="mb-8">
            <a
              href="/book-diagnostic"
              className="inline-block rounded-lg bg-green-primary px-10 py-4 text-lg font-bold text-white transition-all hover:bg-green-dark hover:shadow-lg hover:shadow-green-primary/20"
            >
              Book Your Free Diagnostic Test &rarr;
            </a>
          </div>
        </AnimateOnScroll>

        {/* Trust Indicators */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Results in 24 Hours</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
