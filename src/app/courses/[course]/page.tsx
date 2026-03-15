import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { getCourseById, getAllCourseIds } from "@/data/courses";
import type { Metadata } from "next";

interface CoursePageProps {
  params: Promise<{ course: string }>;
}

export async function generateStaticParams() {
  return getAllCourseIds().map((id) => ({ course: id }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { course } = await params;
  const courseData = getCourseById(course);
  if (!courseData) return { title: "Course Not Found" };

  return {
    title: `${courseData.fullName} | Catalyst Test Prep`,
    description: courseData.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { course: courseSlug } = await params;
  const course = getCourseById(courseSlug);
  if (!course) notFound();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-4 inline-block rounded-full bg-green-primary/20 px-4 py-1.5 text-sm font-semibold text-green-400">
              {course.scoreGuarantee} Score Guarantee
            </span>
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {course.fullName}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <p className="mx-auto mt-6 max-w-3xl text-base text-gray-300 sm:text-lg">
              {course.description}
            </p>
            <p className="mt-3 text-sm text-gray-400">{course.targetAudience}</p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={300}>
            <a
              href="/#hero-form"
              className="mt-8 inline-block rounded-lg bg-green-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-green-dark hover:shadow-lg"
            >
              Book Free Diagnostic
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Covered */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
              What&apos;s Covered
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-body">
              Our curriculum is tailored to the latest {course.name} exam format. Every topic below is
              covered through 1-on-1 sessions, adaptive practice, and full-length simulations.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-2">
            {course.sections.map((section, i) => (
              <AnimateOnScroll key={section.title} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 100}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-light">
                      <svg className="h-5 w-5 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-heading">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-body">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">
              Why Students Choose Catalyst for {course.name}
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {course.keyFeatures.map((feature, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="hover-lift flex h-full items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-light">
                    <svg className="h-5 w-5 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-body">{feature}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }} id="pricing">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
              Choose Your {course.name} Prep Plan
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
              Flexible plans designed to fit your timeline, budget, and score goals.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {course.pricingPlans.map((plan, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className={`relative flex h-full flex-col rounded-2xl p-6 ${
                  plan.highlighted
                    ? "scale-105 border-2 border-green-400 bg-white/10 shadow-xl"
                    : "border border-white/10 bg-white/5"
                }`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-primary px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-white md:text-xl">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-400">{plan.sessions}</p>
                  <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">{plan.price}</p>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-gray-300 md:text-base">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/#hero-form"
                    className={`mt-6 block rounded-lg py-3 text-center text-sm font-bold transition-all ${
                      plan.highlighted
                        ? "bg-green-primary text-white hover:bg-green-dark hover:shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    Start My Free {course.name} Prep Trial &rarr;
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Score Guarantee */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="scale-in">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-light">
              <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <h2 className="mb-4 text-3xl font-bold text-heading md:text-4xl">
              {course.scoreGuarantee} Score Guarantee
            </h2>
            <p className="mx-auto max-w-2xl text-base text-body sm:text-lg">
              {course.scoreGuaranteeDetail}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-primary" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Boost Your {course.name} Score?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-green-100 sm:text-lg">
              Book a free diagnostic session today. We&apos;ll assess your current level, identify
              your biggest opportunities for improvement, and build a personalized plan to hit your
              target score.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <a
              href="/#hero-form"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-primary transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Book Free Diagnostic
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
