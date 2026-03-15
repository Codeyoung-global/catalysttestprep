import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mentors } from "@/data/mentors";

export const metadata = {
  title: "Meet Our Expert Mentors | Catalyst Test Prep",
  description:
    "Our mentors are graduates of top universities who scored in the 99th percentile on the SAT. Find the perfect mentor for your test prep journey.",
};

export default function MentorsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="mb-4 text-center text-4xl font-bold text-heading md:text-5xl">
            Meet Our Expert Mentors
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-center text-lg text-body">
            Every Catalyst mentor scored in the{" "}
            <span className="font-semibold text-green-primary">99th percentile</span> on
            the SAT and graduated from a top university. They don&apos;t just know the
            material &mdash; they know how to teach it.
          </p>
          <p className="mx-auto max-w-xl text-center text-sm text-caption">
            Click on any mentor to learn more about their background, teaching style, and
            the subjects they cover.
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mentors.map((mentor) => (
              <Link
                key={mentor.id}
                href={`/mentors/${mentor.id}`}
                className="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Avatar */}
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-light transition-colors group-hover:bg-green-primary">
                  <span className="text-2xl font-bold text-green-primary transition-colors group-hover:text-white">
                    {mentor.initials}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-heading">{mentor.name}</h2>
                <p className="mt-1 text-sm text-body">{mentor.university}</p>
                <p className="text-sm text-caption">{mentor.degree}</p>

                <p className="mt-3 text-base font-bold text-green-primary">
                  {mentor.satScore} SAT
                </p>
                <p className="text-sm text-caption">
                  {mentor.experience} {mentor.experience === 1 ? "year" : "years"} tutoring
                </p>

                <p className="mt-2 text-xs font-medium text-green-primary">
                  {mentor.specialty}
                </p>

                <span className="mt-4 text-sm font-semibold text-green-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View Profile &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-green-primary" style={{ padding: "64px 0" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-green-100">
            Book a free diagnostic session and get matched with the perfect mentor for
            your goals.
          </p>
          <a
            href="/book-diagnostic"
            className="inline-block rounded-lg bg-white px-8 py-3 text-base font-bold text-green-primary transition-colors hover:bg-gray-100"
          >
            Book Your Free Diagnostic
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
