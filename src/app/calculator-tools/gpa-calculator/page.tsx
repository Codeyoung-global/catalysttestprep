"use client";

import { useState, useCallback, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */

const GRADE_MAP: Record<string, number> = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
};

const GRADE_OPTIONS = Object.keys(GRADE_MAP);

interface Course {
  id: number;
  name: string;
  grade: string;
  credits: number;
  isAP: boolean;
  isHonors: boolean;
}

const defaultCourse = (id: number): Course => ({
  id,
  name: "",
  grade: "A",
  credits: 3,
  isAP: false,
  isHonors: false,
});

/* ------------------------------------------------------------------ */
/*  Helper: encouraging message                                       */
/* ------------------------------------------------------------------ */

function encouragingMessage(gpa: number): string {
  if (gpa >= 3.9) return "Dean's List material! You're absolutely crushing it!";
  if (gpa >= 3.5) return "Outstanding work! Keep riding that momentum!";
  if (gpa >= 3.0) return "Solid performance! You're on a great track.";
  if (gpa >= 2.5) return "Good foundation. A few tweaks and you'll soar!";
  if (gpa >= 2.0) return "Room to grow, and that's totally okay. Let's build a plan!";
  return "Every expert was once a beginner. Let's turn things around together!";
}

/* ------------------------------------------------------------------ */
/*  Animated GPA display                                              */
/* ------------------------------------------------------------------ */

function GpaDisplay({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const colorClass =
    value >= 3.5
      ? "text-green-500"
      : value >= 3.0
        ? "text-yellow-500"
        : value >= 2.5
          ? "text-orange-500"
          : "text-red-500";

  return (
    <div className="flex flex-col items-center">
      <span className="mb-1 text-sm font-semibold uppercase tracking-wider text-body">
        {label}
      </span>
      <span
        className={`text-5xl font-extrabold tabular-nums transition-all duration-500 ${colorClass}`}
      >
        {value.toFixed(2)}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default function GpaCalculatorPage() {
  const [courses, setCourses] = useState<Course[]>([
    defaultCourse(1),
    defaultCourse(2),
    defaultCourse(3),
  ]);
  const [nextId, setNextId] = useState(4);

  /* --- course CRUD ------------------------------------------------ */

  const addCourse = useCallback(() => {
    setCourses((prev) => [...prev, defaultCourse(nextId)]);
    setNextId((n) => n + 1);
  }, [nextId]);

  const removeCourse = useCallback((id: number) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const updateCourse = useCallback(
    (id: number, field: keyof Course, value: string | number | boolean) => {
      setCourses((prev) =>
        prev.map((c) => {
          if (c.id !== id) return c;
          const updated = { ...c, [field]: value };
          // AP and Honors are mutually exclusive
          if (field === "isAP" && value === true) {
            updated.isHonors = false;
          }
          if (field === "isHonors" && value === true) {
            updated.isAP = false;
          }
          return updated;
        })
      );
    },
    []
  );

  /* --- GPA calculation -------------------------------------------- */

  const { unweightedGpa, weightedGpa, totalCredits } = useMemo(() => {
    let uwPoints = 0;
    let wPoints = 0;
    let creds = 0;

    for (const c of courses) {
      const base = GRADE_MAP[c.grade] ?? 0;
      const weight = c.isAP ? 1.0 : c.isHonors ? 0.5 : 0;
      uwPoints += base * c.credits;
      wPoints += (base + weight) * c.credits;
      creds += c.credits;
    }

    return {
      unweightedGpa: creds > 0 ? uwPoints / creds : 0,
      weightedGpa: creds > 0 ? wPoints / creds : 0,
      totalCredits: creds,
    };
  }, [courses]);

  /* --- render ----------------------------------------------------- */

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            GPA Calculator
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Crunch the numbers in seconds. Find out exactly where you stand and
            how to level up your GPA.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          {/* GPA readout */}
          <div className="mb-10 rounded-2xl bg-bg-alt p-8 shadow-sm">
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
              <GpaDisplay label="Unweighted GPA" value={unweightedGpa} />
              <div className="hidden h-16 w-px bg-gray-300 sm:block" />
              <GpaDisplay label="Weighted GPA" value={weightedGpa} />
            </div>

            <p className="mt-4 text-center text-sm text-body">
              Total Credit Hours: <strong>{totalCredits}</strong>
            </p>

            {totalCredits > 0 && (
              <p className="mt-3 text-center text-lg font-medium text-heading">
                {encouragingMessage(unweightedGpa)}
              </p>
            )}
          </div>

          {/* Course rows */}
          <div className="space-y-4">
            {/* Header (hidden on mobile) */}
            <div className="hidden grid-cols-[1fr_120px_100px_80px_80px_40px] gap-3 text-sm font-semibold text-body md:grid">
              <span>Course Name</span>
              <span>Grade</span>
              <span>Credits</span>
              <span className="text-center">AP</span>
              <span className="text-center">Honors</span>
              <span />
            </div>

            {courses.map((course) => (
              <div
                key={course.id}
                className="grid grid-cols-1 gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_120px_100px_80px_80px_40px] md:items-center md:border-0 md:p-0 md:shadow-none"
              >
                {/* Course name */}
                <input
                  type="text"
                  placeholder="e.g. AP Biology"
                  value={course.name}
                  onChange={(e) =>
                    updateCourse(course.id, "name", e.target.value)
                  }
                  className="rounded-lg border border-gray-300 px-3 py-2 text-heading outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                />

                {/* Grade */}
                <select
                  value={course.grade}
                  onChange={(e) =>
                    updateCourse(course.id, "grade", e.target.value)
                  }
                  className="rounded-lg border border-gray-300 px-3 py-2 text-heading outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                >
                  {GRADE_OPTIONS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>

                {/* Credits */}
                <input
                  type="number"
                  min={0.5}
                  max={10}
                  step={0.5}
                  value={course.credits}
                  onChange={(e) =>
                    updateCourse(
                      course.id,
                      "credits",
                      Math.max(0.5, parseFloat(e.target.value) || 0.5)
                    )
                  }
                  className="rounded-lg border border-gray-300 px-3 py-2 text-heading outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                />

                {/* AP checkbox */}
                <label className="flex items-center justify-center gap-2 md:justify-center">
                  <input
                    type="checkbox"
                    checked={course.isAP}
                    onChange={(e) =>
                      updateCourse(course.id, "isAP", e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-green-primary accent-green-600 focus:ring-green-primary"
                  />
                  <span className="text-sm text-body md:hidden">AP (+1.0)</span>
                </label>

                {/* Honors checkbox */}
                <label className="flex items-center justify-center gap-2 md:justify-center">
                  <input
                    type="checkbox"
                    checked={course.isHonors}
                    onChange={(e) =>
                      updateCourse(course.id, "isHonors", e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-green-primary accent-green-600 focus:ring-green-primary"
                  />
                  <span className="text-sm text-body md:hidden">Honors (+0.5)</span>
                </label>

                {/* Remove */}
                <button
                  onClick={() => removeCourse(course.id)}
                  disabled={courses.length <= 1}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-red-500 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-30"
                  aria-label="Remove course"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Add course button */}
          <button
            onClick={addCourse}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-primary px-5 py-2.5 font-semibold text-white transition hover:bg-green-dark"
          >
            <span className="text-xl leading-none">+</span> Add Course
          </button>
        </div>
      </section>

      {/* Explanation section */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-center text-3xl font-bold text-heading">
            Weighted vs. Unweighted GPA : What&rsquo;s the Difference?
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-heading">
                Unweighted GPA
              </h3>
              <p className="leading-relaxed text-body">
                The classic 4.0 scale. Every class is treated equally. Whether
                it&rsquo;s Art History or AP Calculus. Most colleges look at this
                number first, so it&rsquo;s a great baseline to know.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-heading">
                Weighted GPA
              </h3>
              <p className="leading-relaxed text-body">
                This version rewards you for tackling tougher coursework. Honors
                classes get a +0.5 bump and AP classes get a +1.0 bump, so your
                GPA can climb above 4.0. Colleges love seeing that you
                challenged yourself!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-heading">
            5 Tips to Boost Your GPA
          </h2>

          <ol className="space-y-5 text-body">
            {[
              {
                title: "Stay organized",
                body: "Use a planner or digital app to track every assignment, quiz, and project. Missing even one homework can drag down your grade more than you'd think.",
              },
              {
                title: "Ask for help early",
                body: "Teachers and tutors are there to help. Don't wait until the night before the final. A quick office-hours visit can clear up weeks of confusion.",
              },
              {
                title: "Challenge yourself wisely",
                body: "Taking an AP or Honors course shows ambition and can boost your weighted GPA. Just make sure you balance your schedule so you can still do well in every class.",
              },
              {
                title: "Review, don't just re-read",
                body: "Active recall (practice problems, flashcards, teaching someone else) is far more effective than passively reading your notes.",
              },
              {
                title: "Take care of yourself",
                body: "Sleep, nutrition, and exercise directly affect academic performance. A rested brain learns faster and retains more.",
              },
            ].map((tip, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-light text-sm font-bold text-green-primary">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-heading">{tip.title}.</strong>{" "}
                  {tip.body}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Raise Your GPA?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Our expert tutors build a personalized study plan around{" "}
            <em>your</em> strengths and goals. Book a free diagnostic session
            and let&rsquo;s map out your path to a stronger GPA  - together.
          </p>
          <a
            href="/book-diagnostic"
            className="inline-block rounded-lg bg-green-primary px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-dark"
          >
            Book Your Free Diagnostic
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
