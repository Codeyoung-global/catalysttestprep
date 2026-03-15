import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mentors } from "@/data/mentors";

interface MentorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return mentors.map((mentor) => ({ id: mentor.id }));
}

export async function generateMetadata({ params }: MentorPageProps) {
  const { id } = await params;
  const mentor = mentors.find((m) => m.id === id);
  if (!mentor) return { title: "Mentor Not Found | Catalyst Test Prep" };

  return {
    title: `${mentor.name} — ${mentor.specialty} Mentor | Catalyst Test Prep`,
    description: mentor.bio,
  };
}

export default async function MentorProfilePage({ params }: MentorPageProps) {
  const { id } = await params;
  const mentor = mentors.find((m) => m.id === id);
  if (!mentor) notFound();

  return (
    <>
      <Navbar />

      <section style={{ padding: "var(--section-gap) 0" }}>
        <div className="mx-auto max-w-4xl px-6">
          {/* Back Link */}
          <Link
            href="/mentors"
            className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-green-primary hover:text-green-dark transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Mentors
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* Large Avatar */}
            <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-green-light">
              <span className="text-5xl font-bold text-green-primary">
                {mentor.initials}
              </span>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-heading md:text-4xl">
                {mentor.name}
              </h1>
              <p className="mt-1 text-lg text-body">{mentor.university}</p>
              <p className="text-base text-caption">{mentor.degree}</p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <span className="rounded-full bg-green-light px-4 py-1.5 text-sm font-bold text-green-primary">
                  {mentor.satScore} SAT
                </span>
                <span className="rounded-full bg-green-light px-4 py-1.5 text-sm font-semibold text-green-primary">
                  {mentor.experience} {mentor.experience === 1 ? "year" : "years"}{" "}
                  experience
                </span>
                <span className="rounded-full bg-green-light px-4 py-1.5 text-sm font-semibold text-green-primary">
                  {mentor.specialty}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-10">
            <h2 className="mb-3 text-xl font-bold text-heading">About {mentor.name.split(" ")[0]}</h2>
            <p className="text-base leading-relaxed text-body">{mentor.bio}</p>
          </div>

          {/* Teaching Style */}
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-heading">Teaching Style</h2>
            <p className="text-base leading-relaxed text-body">
              {mentor.teachingStyle}
            </p>
          </div>

          {/* Subjects Taught */}
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-heading">Subjects</h2>
            <div className="flex flex-wrap gap-2">
              {mentor.subjects.map((subject) => (
                <span
                  key={subject}
                  className="rounded-lg border border-green-primary/20 bg-green-light px-3 py-1.5 text-sm font-medium text-green-primary"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-heading">Fun Facts</h2>
            <ul className="space-y-2">
              {mentor.funFacts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-body">
                  <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-green-primary" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-bg-alt p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-heading">
              Book a Session with {mentor.name.split(" ")[0]}
            </h2>
            <p className="mb-6 text-base text-body">
              Start with a free diagnostic to see how {mentor.name.split(" ")[0]} can help
              you reach your target score.
            </p>
            <a
              href="/book-diagnostic"
              className="inline-block rounded-lg bg-green-primary px-8 py-3 text-base font-bold text-white transition-colors hover:bg-green-dark"
            >
              Book Your Free Diagnostic
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
