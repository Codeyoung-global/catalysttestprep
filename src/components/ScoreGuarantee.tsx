"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function ScoreGuarantee() {
  const guaranteeCards = [
    {
      icon: (
        <svg className="h-10 w-10 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Score Guarantee",
      description:
        "We guarantee you'll score 1400+ on the SAT or improve by at least 150 points from your diagnostic baseline. No fine print, no asterisks.",
    },
    {
      icon: (
        <svg className="h-10 w-10 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: "Money-Back Promise",
      description:
        "If you complete the program and don't hit your target score, we'll refund your tuition. We put our money where our mouth is.",
    },
    {
      icon: (
        <svg className="h-10 w-10 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: "Proven Results",
      description:
        "Our students improve by an average of 210 points. Over 90% of students hit their target score within the program timeline.",
    },
  ];

  return (
    <section className="bg-white" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header with Shield Icon */}
        <AnimateOnScroll animation="scale-in">
          <div className="mb-4 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-light">
              <svg className="h-10 w-10 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
            Our Score Guarantee
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            We&apos;re so confident in our program that we back every student with a
            score guarantee. Hit <strong className="text-heading">1400+ on the SAT</strong> or
            improve by <strong className="text-heading">150+ points</strong> from your
            diagnostic &mdash; or get your money back.
          </p>
        </AnimateOnScroll>

        {/* Guarantee Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {guaranteeCards.map((card, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 150}>
              <div className="hover-lift flex h-full flex-col items-center rounded-xl border border-gray-100 bg-bg-alt p-8 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-light">
                  {card.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-heading">{card.title}</h3>
                <p className="text-sm leading-relaxed text-body">{card.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* FAQ Link */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="mt-10 text-center">
            <a
              href="#faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-green-primary transition-colors hover:text-green-dark"
            >
              Read the full guarantee details in our FAQ
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
