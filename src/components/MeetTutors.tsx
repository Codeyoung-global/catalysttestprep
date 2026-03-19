"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { mentors } from "@/data/mentors";

const bgColors = [
  "#e8f5e9",
  "#e3f2fd",
  "#fce4ec",
  "#fff8e1",
  "#f3e5f5",
  "#e0f7fa",
  "#fff3e0",
  "#f1f8e9",
  "#ede7f6",
  "#e8eaf6",
  "#fbe9e7",
  "#efebe9",
  "#eceff1",
];

export default function MeetTutors() {
  // Show mentors with the most data (experience + students + classes)
  const featured = mentors
    .filter((m) => m.experience != null && m.studentsTaught != null)
    .slice(0, 6);

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setActiveIndex((i) => Math.min(featured.length - 1, i + 1));

  const active = featured[activeIndex];
  if (!active) return null;

  const activeBg = bgColors[activeIndex % bgColors.length];

  const stats = [
    active.experience != null && {
      value: `${active.experience}+`,
      label: "Yrs Exp",
    },
    active.classesTaken != null && {
      value: active.classesTaken.toLocaleString() + "+",
      label: "Classes",
    },
    active.studentsTaught != null && {
      value: active.studentsTaught.toLocaleString() + "+",
      label: "Students",
    },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <section className="bg-white py-20" id="tutors">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-green-primary">
                Our Educators
              </p>
              <h2 className="text-3xl font-bold text-heading md:text-4xl">
                Meet Our Expert Tutors
              </h2>
              <p className="mt-2 max-w-xl text-body">
                Experienced mentors from top universities, dedicated to helping
                you reach your target score through personalized 1:1 sessions.
              </p>
            </div>
            <Link
              href="#hero-form"
              className="shrink-0 rounded-lg bg-green-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-green-dark hover:shadow-lg"
            >
              Book a Free Trial &rarr;
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Slider Layout */}
        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="relative">
            {/* Tutor Cards Row */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:overflow-hidden">
              {featured.map((mentor, i) => {
                const isActive = i === activeIndex;
                const bg = bgColors[i % bgColors.length];
                return (
                  <div
                    key={mentor.id}
                    onClick={() => setActiveIndex(i)}
                    className={`flex-shrink-0 cursor-pointer rounded-2xl border-2 p-5 transition-all duration-300 ${
                      isActive
                        ? "border-green-primary shadow-lg scale-[1.02]"
                        : "border-gray-200 hover:border-green-primary/50 hover:shadow-md"
                    }`}
                    style={{
                      width: "clamp(180px, 22%, 220px)",
                      minWidth: "180px",
                      background: isActive ? bg : "#fff",
                    }}
                  >
                    {/* Avatar */}
                    {mentor.profilePicture ? (
                      <div className="mx-auto mb-3 h-16 w-16 overflow-hidden rounded-full shadow-sm md:h-20 md:w-20">
                        <Image
                          src={mentor.profilePicture}
                          alt={mentor.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-green-primary shadow-sm md:h-20 md:w-20 md:text-2xl"
                        style={{ background: bg }}
                      >
                        {mentor.initials}
                      </div>
                    )}
                    <h3 className="text-center text-sm font-bold text-heading md:text-base">
                      {mentor.name}
                    </h3>
                    {mentor.degree && (
                      <p className="mt-0.5 text-center text-xs font-semibold text-green-primary">
                        {mentor.degree}
                      </p>
                    )}
                    {mentor.university && (
                      <p className="mt-0.5 line-clamp-1 text-center text-xs text-caption">
                        {mentor.university}
                      </p>
                    )}
                    {mentor.experience != null && (
                      <p className="mt-2 text-center text-xs font-medium text-body">
                        {mentor.experience}+ yrs experience
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Nav Arrows */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  disabled={activeIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all hover:border-green-primary hover:text-green-primary disabled:opacity-30"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  disabled={activeIndex === featured.length - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all hover:border-green-primary hover:text-green-primary disabled:opacity-30"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              {/* Dot indicators */}
              <div className="flex gap-2">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-6 bg-green-primary"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Active Tutor Detail Panel */}
        <div
          className="slider-slide-enter mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          key={active.id}
        >
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left: Photo + Stats */}
            <div className="flex flex-col gap-5 lg:w-[340px] lg:shrink-0">
              {/* Profile photo or placeholder */}
              <div
                className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl"
                style={{ background: activeBg }}
              >
                {active.profilePicture ? (
                  <Image
                    src={active.profilePicture}
                    alt={active.name}
                    width={340}
                    height={220}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-4xl font-bold text-green-primary shadow">
                      {active.initials}
                    </div>
                  </div>
                )}
              </div>

              {/* Stats */}
              {stats.length > 0 && (
                <div
                  className={`grid gap-3 text-center ${
                    stats.length === 3
                      ? "grid-cols-3"
                      : stats.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-1"
                  }`}
                >
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-bg-alt p-3">
                      <p className="text-base font-bold text-green-primary md:text-lg">
                        {s.value}
                      </p>
                      <p className="text-xs text-caption">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <Link
                href={`/mentors/${active.id}`}
                className="w-full rounded-lg border-2 border-green-primary py-3 text-center text-sm font-bold text-green-primary transition-all hover:bg-green-primary hover:text-white"
              >
                View Full Profile &rarr;
              </Link>
              <Link
                href="#hero-form"
                className="w-full rounded-lg bg-green-primary py-3 text-center text-sm font-bold text-white transition-all hover:bg-green-dark hover:shadow-lg"
              >
                Book a Free Trial with {active.name.split(" ")[0]} &rarr;
              </Link>
            </div>

            {/* Right: Bio + Details */}
            <div className="flex flex-1 flex-col gap-6">
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-heading">
                    {active.name}
                  </h3>
                  {active.degree && (
                    <span className="rounded-full bg-green-light px-3 py-1 text-xs font-semibold text-green-primary">
                      {active.degree}
                    </span>
                  )}
                </div>
                {active.university && (
                  <p className="text-sm text-caption">{active.university}</p>
                )}
              </div>

              <div>
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-caption">
                  About
                </h4>
                <p className="text-body leading-relaxed">{active.bio}</p>
              </div>

              {/* Languages */}
              {active.languages.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-caption">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {active.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-lg border border-green-primary/20 bg-green-light px-3 py-1.5 text-sm font-medium text-green-primary"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-caption">
                  Highlights
                </h4>
                <div className="flex flex-col gap-3">
                  {[
                    active.experience != null &&
                      `${active.experience}+ years of dedicated teaching experience`,
                    active.studentsTaught != null &&
                      `Guided ${active.studentsTaught.toLocaleString()}+ students to success`,
                    active.classesTaken != null &&
                      `Conducted ${active.classesTaken.toLocaleString()}+ live online classes`,
                    active.degree &&
                      `${active.degree} from ${active.university}`,
                  ]
                    .filter(Boolean)
                    .map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 rounded-xl bg-bg-alt p-4">
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
                        <p className="text-sm text-body">{highlight}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Mentors Link */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="mt-8 text-center">
            <Link
              href="/mentors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-primary transition-colors hover:text-green-dark"
            >
              View All {mentors.length} Mentors
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
