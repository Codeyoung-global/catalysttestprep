"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const calculators = [
  {
    title: "SAT Score Calculator",
    description: "Estimate your SAT score from raw section scores. See where you stand and what colleges are within reach.",
    href: "https://www.catalysttestprep.com/calculator-tools/sat-score-calculator",
    external: true,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
    color: "from-blue-500 to-blue-700",
    tagline: "400\u20131600 scale",
  },
  {
    title: "ACT Score Calculator",
    description: "Convert your raw ACT section scores into a composite. Find out your percentile and college readiness benchmarks.",
    href: "https://www.catalysttestprep.com/calculator-tools/act-score-calculator",
    external: true,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    color: "from-purple-500 to-purple-700",
    tagline: "1\u201336 composite",
  },
  {
    title: "PSAT Score Calculator",
    description: "Calculate your PSAT/NMSQT total score and Selection Index. Find out if you're on track for National Merit!",
    href: "/calculator-tools/psat-score-calculator",
    external: false,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    color: "from-green-500 to-green-700",
    tagline: "National Merit ready?",
  },
  {
    title: "AP Score Calculator",
    description: "Predict your AP exam score (1\u20135) based on your multiple choice and free-response performance. Covers 15+ AP subjects.",
    href: "/calculator-tools/ap-score-calculator",
    external: false,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    color: "from-amber-500 to-amber-700",
    tagline: "Aim for that 5!",
  },
  {
    title: "GPA Calculator",
    description: "Calculate your weighted and unweighted GPA. Add courses, grades, and credits - see your cumulative GPA instantly.",
    href: "/calculator-tools/gpa-calculator",
    external: false,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25v-.008Zm2.25-4.5h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm0 2.25h.008v.008H10.5v-.008Zm2.25-6.75h.008v.008H12.75v-.008Zm0 2.25h.008v.008H12.75v-.008Zm0 2.25h.008v.008H12.75v-.008Zm0 2.25h.008v.008H12.75v-.008Zm2.25-6.75h.008v.008H15v-.008Zm0 2.25h.008v.008H15v-.008Zm0 2.25h.008v.008H15v-.008ZM6 18.75a2.25 2.25 0 0 1-2.25-2.25V6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v1.5m4.5 0V6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v10.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5 0h7.5" />
      </svg>
    ),
    color: "from-rose-500 to-rose-700",
    tagline: "Weighted & unweighted",
  },
];

const whyItems = [
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Instant Results",
    desc: "No sign-ups, no waiting. Enter your scores and see your results in real time.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: "Accurate Estimates",
    desc: "Based on the latest scoring tables from College Board and ACT, Inc.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Actionable Insights",
    desc: "Know exactly where to improve. Our calculators show you your strengths and weak spots.",
  },
];

export default function CalculatorToolsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-4 inline-block rounded-full bg-green-primary/20 px-4 py-1.5 text-sm font-semibold text-green-400">
              Free Tools for Students
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Score Calculator Tools
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="mx-auto mt-6 max-w-3xl text-base text-gray-300 sm:text-lg">
              Crunch numbers, not stress. Use our free calculators to estimate your test scores,
              check National Merit eligibility, predict AP results, and track your GPA, all in seconds.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc, i) => {
              const CardWrapper = calc.external ? "a" : Link;
              const extraProps = calc.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {};

              return (
                <AnimateOnScroll key={calc.title} animation="fade-up" delay={i * 100}>
                  <CardWrapper
                    href={calc.href}
                    {...extraProps}
                    className="hover-lift group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all"
                  >
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${calc.color} text-white`}>
                      {calc.icon}
                    </div>

                    <h2 className="text-xl font-bold text-heading group-hover:text-green-primary transition-colors">
                      {calc.title}
                    </h2>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-caption">
                      {calc.tagline}
                    </span>

                    <p className="mt-3 flex-1 text-body">
                      {calc.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-green-primary">
                      Open Calculator
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </CardWrapper>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Use Our Calculators */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
              Why Students Love Our Calculators
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-body">
              Built by test prep experts, these tools give you a clear picture of where you stand, so you can focus your energy on what matters most.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {whyItems.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                <div className="hover-lift flex h-full flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-light">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-heading">{item.title}</h3>
                  <p className="text-sm text-body">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-primary" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Want a Personalized Score Improvement Plan?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-green-100 sm:text-lg">
              Our calculators give you the numbers. Our expert tutors turn those numbers into results.
              Book a free diagnostic to get a custom study plan built around your goals.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <Link
              href="/book-diagnostic"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-primary transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Book Your Free Diagnostic
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
