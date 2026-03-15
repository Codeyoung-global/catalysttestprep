import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Score Calculator Tools | Catalyst Test Prep",
  description:
    "Use our free SAT, ACT, PSAT, AP, and GPA calculators to estimate your scores, plan your prep, and set your target. Fun, fast, and built for students.",
};

const calculators = [
  {
    title: "SAT Score Calculator",
    description:
      "Estimate your SAT score from raw section scores. See where you stand and what colleges are within reach.",
    href: "https://www.catalysttestprep.com/calculator-tools/sat-score-calculator",
    external: true,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
    color: "from-blue-500 to-blue-700",
    tagline: "400–1600 scale",
  },
  {
    title: "ACT Score Calculator",
    description:
      "Convert your raw ACT section scores into a composite. Find out your percentile and college readiness benchmarks.",
    href: "https://www.catalysttestprep.com/calculator-tools/act-score-calculator",
    external: true,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    color: "from-purple-500 to-purple-700",
    tagline: "1–36 composite",
  },
  {
    title: "PSAT Score Calculator",
    description:
      "Calculate your PSAT/NMSQT total score and Selection Index. Find out if you're on track for National Merit!",
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
    description:
      "Predict your AP exam score (1–5) based on your multiple choice and free-response performance. Covers 15+ AP subjects.",
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
    description:
      "Calculate your weighted and unweighted GPA. Add courses, grades, and credits — see your cumulative GPA instantly.",
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

export default function CalculatorToolsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block animate-fade-in-up rounded-full bg-green-primary/20 px-4 py-1.5 text-sm font-semibold text-green-400">
            Free Tools for Students
          </span>
          <h1 className="animate-fade-in-up delay-100 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Score Calculator Tools
          </h1>
          <p className="mx-auto mt-6 max-w-3xl animate-fade-in-up delay-200 text-lg text-gray-300">
            Crunch numbers, not stress. Use our free calculators to estimate your test scores,
            check National Merit eligibility, predict AP results, and track your GPA — all in seconds.
          </p>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc, i) => {
              const CardWrapper = calc.external ? "a" : Link;
              const extraProps = calc.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {};

              return (
                <CardWrapper
                  key={calc.title}
                  href={calc.href}
                  {...extraProps}
                  className={`hover-lift group animate-fade-in-up delay-${(i + 1) * 100} flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all`}
                >
                  {/* Icon */}
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${calc.color} text-white`}>
                    {calc.icon}
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-xl font-bold text-heading group-hover:text-green-primary transition-colors">
                    {calc.title}
                  </h2>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-caption">
                    {calc.tagline}
                  </span>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-body">
                    {calc.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-green-primary">
                    Open Calculator
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    {calc.external && (
                      <svg className="h-3.5 w-3.5 text-caption" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Use Our Calculators */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
            Why Students Love Our Calculators
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            Built by test prep experts, these tools give you a clear picture of where you stand — so you can focus your energy on what matters most.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "⚡",
                title: "Instant Results",
                desc: "No sign-ups, no waiting. Enter your scores and see your results in real time.",
              },
              {
                emoji: "🎯",
                title: "Accurate Estimates",
                desc: "Based on the latest scoring tables from College Board and ACT, Inc.",
              },
              {
                emoji: "📊",
                title: "Actionable Insights",
                desc: "Know exactly where to improve. Our calculators show you your strengths and weak spots.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="hover-lift rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="mb-3 inline-block text-4xl">{item.emoji}</span>
                <h3 className="mb-2 text-lg font-bold text-heading">{item.title}</h3>
                <p className="text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-primary" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Want a Personalized Score Improvement Plan?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            Our calculators give you the numbers — our expert tutors turn those numbers into results.
            Book a free diagnostic to get a custom study plan built around your goals.
          </p>
          <Link
            href="/book-diagnostic"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-primary transition-colors hover:bg-gray-100"
          >
            Book Your Free Diagnostic
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
