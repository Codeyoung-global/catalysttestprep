import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses, getCourseById, getAllCourseIds } from "@/data/courses";
import type { Metadata } from "next";

interface CoursePageProps {
  params: Promise<{ course: string }>;
}

/* ---------- Static params for SSG ---------- */
export async function generateStaticParams() {
  return getAllCourseIds().map((id) => ({ course: id }));
}

/* ---------- Dynamic metadata ---------- */
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { course } = await params;
  const courseData = getCourseById(course);
  if (!courseData) return { title: "Course Not Found" };

  return {
    title: `${courseData.fullName} | Catalyst Test Prep`,
    description: courseData.description,
  };
}

/* ---------- Page ---------- */
export default async function CoursePage({ params }: CoursePageProps) {
  const { course: courseSlug } = await params;
  const course = getCourseById(courseSlug);
  if (!course) notFound();

  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-green-primary/20 px-4 py-1.5 text-sm font-semibold text-green-400">
            {course.scoreGuarantee} Score Guarantee
          </span>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {course.fullName}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            {course.description}
          </p>
          <p className="mt-3 text-sm text-gray-400">{course.targetAudience}</p>
          <a
            href="/#hero-form"
            className="mt-8 inline-block rounded-lg bg-green-primary px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-dark"
          >
            Book Free Diagnostic
          </a>
        </div>
      </section>

      {/* ── What's Covered (Curriculum) ──────────── */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
            What&apos;s Covered
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            Our curriculum is tailored to the latest {course.name} exam format. Every topic below is
            covered through 1-on-1 sessions, adaptive practice, and full-length simulations.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {course.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-light">
                    <svg
                      className="h-5 w-5 text-green-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-heading">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-body">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features ─────────────────────────── */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">
            Why Students Choose Catalyst for {course.name}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {course.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-light">
                  <svg
                    className="h-5 w-5 text-green-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-body">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────── */}
      <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }} id="pricing">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            Choose Your {course.name} Prep Plan
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
            Flexible plans designed to fit your timeline, budget, and score goals.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {course.pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-2xl p-6 ${
                  plan.highlighted
                    ? "scale-105 border-2 border-green-400 bg-white/10 shadow-xl"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-primary px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-bold text-white md:text-xl">{plan.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{plan.sessions}</p>
                <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2 text-sm text-gray-300 md:text-base"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#hero-form"
                  className={`mt-6 block rounded-lg py-3 text-center text-sm font-bold transition-colors ${
                    plan.highlighted
                      ? "bg-green-primary text-white hover:bg-green-dark"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Start My Free {course.name} Prep Trial &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Score Guarantee ──────────────────────── */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-light">
            <svg
              className="h-8 w-8 text-green-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl">
            {course.scoreGuarantee} Score Guarantee
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-body">
            {course.scoreGuaranteeDetail}
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────── */}
      <section className="bg-green-primary" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Boost Your {course.name} Score?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            Book a free diagnostic session today. We&apos;ll assess your current level, identify
            your biggest opportunities for improvement, and build a personalized plan to hit your
            target score.
          </p>
          <a
            href="/#hero-form"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-primary transition-colors hover:bg-gray-100"
          >
            Book Free Diagnostic
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
