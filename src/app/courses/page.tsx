"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { courses } from "@/data/courses";
import { studentImages } from "@/data/images";
import Link from "next/link";

const courseIcons: Record<string, string> = {
  sat: "M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5v-2l9 5 9-5v2l-9 5z",
  act: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  psat: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  ap: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h1 className="text-3xl font-bold text-heading sm:text-4xl md:text-5xl">
              Our Test Prep <span className="text-green-primary">Courses</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-body sm:text-lg">
              Choose your exam and get matched with an expert tutor who will build a personalized
              curriculum around your goals. Every course comes with a score improvement guarantee.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Course Cards */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {courses.map((course, i) => (
              <AnimateOnScroll key={course.id} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 100}>
                <Link
                  href={`/courses/${course.id}`}
                  className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-primary hover:shadow-lg sm:p-8"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-light transition-all group-hover:bg-green-primary">
                    <svg
                      className="h-7 w-7 text-green-primary transition-colors group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={courseIcons[course.id]} />
                    </svg>
                  </div>

                  {/* Title & Badge */}
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-heading sm:text-2xl md:text-3xl">
                      {course.name} Prep
                    </h2>
                    <span className="rounded-full bg-green-light px-3 py-1 text-xs font-semibold text-green-primary">
                      {course.scoreGuarantee} Guarantee
                    </span>
                  </div>

                  <p className="mb-6 flex-1 text-sm text-body sm:text-base">{course.description}</p>

                  {/* Sections preview */}
                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold text-heading">Sections covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.sections.map((section) => (
                        <span key={section.title} className="rounded-md bg-bg-alt px-3 py-1 text-sm text-body">
                          {section.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <p className="text-sm text-caption">
                      Starting at <span className="font-bold text-heading">{course.pricingPlans[0].price}</span>
                    </p>
                    <p className="text-sm text-caption">{course.targetAudience}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-green-primary transition-colors group-hover:text-green-dark">
                    Learn More & View Plans
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-green-primary overflow-hidden" style={{ padding: "var(--section-gap) 0" }}>
        <div className="absolute inset-0 opacity-10">
          <Image src={studentImages.studentSuccess} alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Not Sure Which Course Is Right for You?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-green-100 sm:text-lg">
              Book a free diagnostic session and our team will recommend the best path based on your
              goals, timeline, and starting score.
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
