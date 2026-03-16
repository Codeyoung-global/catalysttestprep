"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { mentors } from "@/data/mentors";

export default function MentorsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h1 className="mb-4 text-center text-3xl font-bold text-heading sm:text-4xl md:text-5xl">
              Meet Our Expert Mentors
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="mx-auto mb-4 max-w-2xl text-center text-base text-body sm:text-lg">
              Our mentors are experienced educators from top universities, each
              bringing years of{" "}
              <span className="font-semibold text-green-primary">
                personalized 1:1 teaching
              </span>{" "}
              expertise. They don&apos;t just know the material - they know how
              to teach it.
            </p>
            <p className="mx-auto max-w-xl text-center text-sm text-caption">
              Click on any mentor to learn more about their background and
              experience.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mentors Grid */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mentors.map((mentor, i) => (
              <AnimateOnScroll key={mentor.id} animation="fade-up" delay={(i % 4) * 100}>
                <Link
                  href={`/mentors/${mentor.id}`}
                  className="group flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:shadow-lg hover:border-green-primary"
                >
                  {/* Avatar */}
                  {mentor.profilePicture ? (
                    <div className="mb-4 h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
                      <Image
                        src={mentor.profilePicture}
                        alt={mentor.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-light transition-all group-hover:bg-green-primary sm:h-24 sm:w-24">
                      <span className="text-xl font-bold text-green-primary transition-colors group-hover:text-white sm:text-2xl">
                        {mentor.initials}
                      </span>
                    </div>
                  )}

                  <h2 className="text-lg font-bold text-heading">{mentor.name}</h2>
                  {mentor.university && (
                    <p className="mt-1 text-sm text-body">{mentor.university}</p>
                  )}
                  {mentor.degree && (
                    <p className="text-sm text-caption">{mentor.degree}</p>
                  )}

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                    {mentor.experience != null && (
                      <span className="text-sm font-semibold text-green-primary">
                        {mentor.experience}+ yrs exp
                      </span>
                    )}
                    {mentor.studentsTaught != null && (
                      <span className="text-sm text-caption">
                        | {mentor.studentsTaught}+ students
                      </span>
                    )}
                  </div>

                  {mentor.languages.length > 0 && (
                    <p className="mt-2 text-xs text-caption">
                      {mentor.languages.join(", ")}
                    </p>
                  )}

                  <span className="mt-4 text-sm font-semibold text-green-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                    View Profile &rarr;
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-primary" style={{ padding: "64px 0" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-base text-green-100 sm:text-lg">
              Book a free diagnostic session and get matched with the perfect mentor for
              your goals.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <a
              href="/book-diagnostic"
              className="inline-block rounded-lg bg-white px-8 py-3 text-base font-bold text-green-primary transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Book Your Free Diagnostic
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
