"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  AP Exam data                                                       */
/* ------------------------------------------------------------------ */

interface ApExam {
  name: string;
  mcTotal: number;
  frTotal: number;
  mcWeight: number; // portion of composite from MC (0-1)
  frWeight: number; // portion of composite from FR (0-1)
  frLabel: string; // label shown for FR input
  frDescription: string; // helper text for FR scoring
  /** Minimum composite % thresholds: [score2, score3, score4, score5] */
  cutoffs: [number, number, number, number];
}

const AP_EXAMS: Record<string, ApExam> = {
  "AP Calculus AB": {
    name: "AP Calculus AB",
    mcTotal: 45,
    frTotal: 54,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "6 questions, 9 points each (54 total)",
    cutoffs: [0.25, 0.4, 0.5, 0.65],
  },
  "AP Calculus BC": {
    name: "AP Calculus BC",
    mcTotal: 45,
    frTotal: 54,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "6 questions, 9 points each (54 total)",
    cutoffs: [0.2, 0.35, 0.45, 0.6],
  },
  "AP Physics 1": {
    name: "AP Physics 1",
    mcTotal: 50,
    frTotal: 45,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "5 questions, 9 points each (45 total)",
    cutoffs: [0.3, 0.42, 0.55, 0.67],
  },
  "AP Physics 2": {
    name: "AP Physics 2",
    mcTotal: 50,
    frTotal: 36,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "4 questions, 9 points each (36 total)",
    cutoffs: [0.27, 0.4, 0.52, 0.65],
  },
  "AP Physics C: Mechanics": {
    name: "AP Physics C: Mechanics",
    mcTotal: 35,
    frTotal: 45,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "3 questions, 15 points each (45 total)",
    cutoffs: [0.25, 0.4, 0.52, 0.66],
  },
  "AP Physics C: E&M": {
    name: "AP Physics C: E&M",
    mcTotal: 35,
    frTotal: 45,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "3 questions, 15 points each (45 total)",
    cutoffs: [0.22, 0.35, 0.48, 0.62],
  },
  "AP English Language": {
    name: "AP English Language",
    mcTotal: 45,
    frTotal: 18,
    mcWeight: 0.45,
    frWeight: 0.55,
    frLabel: "Essay Points",
    frDescription: "3 essays, scored 0\u20136 each (18 total)",
    cutoffs: [0.28, 0.42, 0.54, 0.7],
  },
  "AP English Literature": {
    name: "AP English Literature",
    mcTotal: 55,
    frTotal: 18,
    mcWeight: 0.45,
    frWeight: 0.55,
    frLabel: "Essay Points",
    frDescription: "3 essays, scored 0\u20136 each (18 total)",
    cutoffs: [0.28, 0.42, 0.54, 0.7],
  },
  "AP Computer Science A": {
    name: "AP Computer Science A",
    mcTotal: 40,
    frTotal: 36,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "4 questions, 9 points each (36 total)",
    cutoffs: [0.25, 0.38, 0.52, 0.67],
  },
  "AP Computer Science Principles": {
    name: "AP Computer Science Principles",
    mcTotal: 70,
    frTotal: 5,
    mcWeight: 0.7,
    frWeight: 0.3,
    frLabel: "Create Performance Task Points",
    frDescription: "Scored 0\u20135 on the Create Task rubric",
    cutoffs: [0.3, 0.45, 0.58, 0.72],
  },
  "AP US History": {
    name: "AP US History",
    mcTotal: 55,
    frTotal: 22,
    mcWeight: 0.4,
    frWeight: 0.6,
    frLabel: "Free Response Points",
    frDescription: "3 SAQs (9 pts) + 1 DBQ (7 pts) + 1 LEQ (6 pts) = 22 total",
    cutoffs: [0.25, 0.4, 0.52, 0.65],
  },
  "AP World History": {
    name: "AP World History",
    mcTotal: 55,
    frTotal: 22,
    mcWeight: 0.4,
    frWeight: 0.6,
    frLabel: "Free Response Points",
    frDescription: "3 SAQs (9 pts) + 1 DBQ (7 pts) + 1 LEQ (6 pts) = 22 total",
    cutoffs: [0.25, 0.4, 0.52, 0.65],
  },
  "AP Biology": {
    name: "AP Biology",
    mcTotal: 60,
    frTotal: 24,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "2 long FRQs (8\u201310 pts each) + 4 short FRQs (4 pts each) = 24 total",
    cutoffs: [0.27, 0.4, 0.52, 0.66],
  },
  "AP Chemistry": {
    name: "AP Chemistry",
    mcTotal: 60,
    frTotal: 46,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "3 long FRQs + 4 short FRQs (46 total points)",
    cutoffs: [0.25, 0.38, 0.5, 0.65],
  },
  "AP Psychology": {
    name: "AP Psychology",
    mcTotal: 100,
    frTotal: 14,
    mcWeight: 0.667,
    frWeight: 0.333,
    frLabel: "Free Response Points",
    frDescription: "2 FRQs, 7 points each (14 total)",
    cutoffs: [0.3, 0.45, 0.55, 0.7],
  },
  "AP Statistics": {
    name: "AP Statistics",
    mcTotal: 40,
    frTotal: 50,
    mcWeight: 0.5,
    frWeight: 0.5,
    frLabel: "Free Response Points",
    frDescription: "5 short FRQs (10 pts each) + 1 investigative task (15 pts) = ~50 total",
    cutoffs: [0.25, 0.4, 0.52, 0.67],
  },
};

const EXAM_NAMES = Object.keys(AP_EXAMS);

/* ------------------------------------------------------------------ */
/*  Score message helpers                                              */
/* ------------------------------------------------------------------ */

function scoreLabel(score: number): string {
  switch (score) {
    case 5:
      return "Extremely well qualified";
    case 4:
      return "Well qualified";
    case 3:
      return "Qualified";
    case 2:
      return "Possibly qualified";
    default:
      return "No recommendation";
  }
}

function encouragingMessage(score: number): string {
  switch (score) {
    case 5:
      return "Amazing work! A 5 is the highest score possible - colleges will be impressed. Keep doing what you\u2019re doing!";
    case 4:
      return "Fantastic job! A 4 shows strong mastery of the material. Many colleges award credit for this score - you\u2019re in great shape!";
    case 3:
      return "Solid effort! A 3 is considered passing and many colleges accept it for credit. With a little more practice, a 4 or 5 is totally within reach!";
    case 2:
      return "You\u2019re building a good foundation! With focused review on your weak spots, you can absolutely bump this up. Don\u2019t give up!";
    default:
      return "Every expert started somewhere. This is your baseline - now let\u2019s build a game plan to improve. You\u2019ve got this!";
  }
}

function scoreColor(score: number): string {
  switch (score) {
    case 5:
      return "text-green-500";
    case 4:
      return "text-emerald-500";
    case 3:
      return "text-yellow-500";
    case 2:
      return "text-orange-500";
    default:
      return "text-red-500";
  }
}

function scoreBgColor(score: number): string {
  switch (score) {
    case 5:
      return "bg-green-50 border-green-200";
    case 4:
      return "bg-emerald-50 border-emerald-200";
    case 3:
      return "bg-yellow-50 border-yellow-200";
    case 2:
      return "bg-orange-50 border-orange-200";
    default:
      return "bg-red-50 border-red-200";
  }
}

/* ------------------------------------------------------------------ */
/*  Animated score display                                             */
/* ------------------------------------------------------------------ */

function AnimatedScore({
  score,
  composite,
}: {
  score: number;
  composite: number;
}) {
  const [displayed, setDisplayed] = useState(0);
  const [scale, setScale] = useState(0.5);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setDisplayed(0);
    setScale(0.5);
    setOpacity(0);

    // Quick count-up animation
    const steps = [1, 2, 3, 4, 5].filter((s) => s <= score);
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setDisplayed(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setScale(1);
        setOpacity(1);
      }
    }, 180);

    // Fade/scale in
    const timeout = setTimeout(() => {
      setScale(1);
      setOpacity(1);
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [score]);

  return (
    <div
      className={`flex flex-col items-center rounded-2xl border-2 p-8 transition-all duration-700 ${scoreBgColor(score)}`}
      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <span className="mb-1 text-sm font-semibold uppercase tracking-wider text-body">
        Predicted AP Score
      </span>
      <span
        className={`text-8xl font-black tabular-nums transition-all duration-300 ${scoreColor(score)}`}
      >
        {displayed}
      </span>
      <span className="mt-2 text-lg font-semibold text-heading">
        {scoreLabel(score)}
      </span>
      <span className="mt-1 text-sm text-body">
        Composite: {Math.round(composite * 100)}%
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress bar for composite breakdown                               */
/* ------------------------------------------------------------------ */

function CompositeBar({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium text-heading">{label}</span>
        <span className="text-body">
          {value} / {max} ({Math.round(pct)}%)
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-green-primary transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function ApScoreCalculatorPage() {
  const [selectedExam, setSelectedExam] = useState(EXAM_NAMES[0]);
  const [mcCorrect, setMcCorrect] = useState<number | "">("");
  const [frScore, setFrScore] = useState<number | "">("");
  const [hasCalculated, setHasCalculated] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const exam = AP_EXAMS[selectedExam];

  // Reset inputs when exam changes
  useEffect(() => {
    setMcCorrect("");
    setFrScore("");
    setHasCalculated(false);
  }, [selectedExam]);

  // Calculate composite & predicted score
  const { composite, predictedScore } = useMemo(() => {
    const mc = typeof mcCorrect === "number" ? mcCorrect : 0;
    const fr = typeof frScore === "number" ? frScore : 0;

    const mcPct = exam.mcTotal > 0 ? mc / exam.mcTotal : 0;
    const frPct = exam.frTotal > 0 ? fr / exam.frTotal : 0;
    const comp = mcPct * exam.mcWeight + frPct * exam.frWeight;

    let score = 1;
    if (comp >= exam.cutoffs[3]) score = 5;
    else if (comp >= exam.cutoffs[2]) score = 4;
    else if (comp >= exam.cutoffs[1]) score = 3;
    else if (comp >= exam.cutoffs[0]) score = 2;

    return { composite: comp, predictedScore: score };
  }, [mcCorrect, frScore, exam]);

  const canCalculate =
    typeof mcCorrect === "number" &&
    typeof frScore === "number" &&
    mcCorrect >= 0 &&
    frScore >= 0;

  function handleCalculate() {
    if (!canCalculate) return;
    setHasCalculated(true);
    // Scroll to result after a short delay for animation
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
  }

  /* --- render ----------------------------------------------------- */

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            AP Score Calculator &amp; Predictor
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Wondering how you did on your AP exam? Plug in your scores and get an
            instant prediction - then find out exactly how to level up.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Step 1 - Select exam */}
          <div className="mb-8">
            <label
              htmlFor="exam-select"
              className="mb-2 block text-sm font-semibold uppercase tracking-wider text-body"
            >
              Step 1: Choose Your AP Exam
            </label>
            <select
              id="exam-select"
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-heading outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary"
            >
              {EXAM_NAMES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Step 2 - Enter scores */}
          <div className="mb-8 rounded-2xl bg-bg-alt p-6 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-body">
              Step 2: Enter Your Scores
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* MC input */}
              <div>
                <label
                  htmlFor="mc-input"
                  className="mb-1 block font-medium text-heading"
                >
                  Multiple Choice Correct
                </label>
                <p className="mb-2 text-sm text-body">
                  Out of {exam.mcTotal} questions
                </p>
                <input
                  id="mc-input"
                  type="number"
                  min={0}
                  max={exam.mcTotal}
                  step={1}
                  placeholder={`0 \u2013 ${exam.mcTotal}`}
                  value={mcCorrect === "" ? "" : mcCorrect}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (v === "") {
                      setMcCorrect("");
                      setHasCalculated(false);
                      return;
                    }
                    const n = Math.min(
                      Math.max(0, parseInt(v, 10) || 0),
                      exam.mcTotal
                    );
                    setMcCorrect(n);
                    setHasCalculated(false);
                  }}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-heading outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary"
                />
              </div>

              {/* FR input */}
              <div>
                <label
                  htmlFor="fr-input"
                  className="mb-1 block font-medium text-heading"
                >
                  {exam.frLabel}
                </label>
                <p className="mb-2 text-sm text-body">{exam.frDescription}</p>
                <input
                  id="fr-input"
                  type="number"
                  min={0}
                  max={exam.frTotal}
                  step={1}
                  placeholder={`0 \u2013 ${exam.frTotal}`}
                  value={frScore === "" ? "" : frScore}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (v === "") {
                      setFrScore("");
                      setHasCalculated(false);
                      return;
                    }
                    const n = Math.min(
                      Math.max(0, parseInt(v, 10) || 0),
                      exam.frTotal
                    );
                    setFrScore(n);
                    setHasCalculated(false);
                  }}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-heading outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary"
                />
              </div>
            </div>

            {/* Calculate button */}
            <button
              onClick={handleCalculate}
              disabled={!canCalculate}
              className="mt-6 w-full rounded-lg bg-green-primary px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              Predict My AP Score
            </button>
          </div>

          {/* Result */}
          {hasCalculated && (
            <div
              ref={resultRef}
              className="animate-fade-in-up mb-8 space-y-6"
              style={{
                animation: "fadeInUp 0.6s ease-out both",
              }}
            >
              <AnimatedScore score={predictedScore} composite={composite} />

              {/* Composite breakdown */}
              <div className="space-y-3 rounded-2xl bg-bg-alt p-6 shadow-sm">
                <h3 className="text-lg font-bold text-heading">
                  Score Breakdown
                </h3>
                <CompositeBar
                  label="Multiple Choice"
                  value={typeof mcCorrect === "number" ? mcCorrect : 0}
                  max={exam.mcTotal}
                />
                <CompositeBar
                  label={exam.frLabel}
                  value={typeof frScore === "number" ? frScore : 0}
                  max={exam.frTotal}
                />
              </div>

              {/* Encouraging message */}
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="text-lg leading-relaxed text-heading">
                  {encouragingMessage(predictedScore)}
                </p>
              </div>

              {/* Score scale reference */}
              <div className="rounded-2xl bg-bg-alt p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-heading">
                  What AP Scores Mean
                </h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((s) => (
                    <div
                      key={s}
                      className={`flex items-center gap-3 rounded-lg p-2 transition-colors ${
                        s === predictedScore
                          ? "bg-green-light font-semibold"
                          : ""
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-white ${
                          s === 5
                            ? "bg-green-500"
                            : s === 4
                              ? "bg-emerald-500"
                              : s === 3
                                ? "bg-yellow-500"
                                : s === 2
                                  ? "bg-orange-500"
                                  : "bg-red-500"
                        }`}
                      >
                        {s}
                      </span>
                      <span className="text-heading">{scoreLabel(s)}</span>
                      {s === predictedScore && (
                        <span className="ml-auto text-sm font-bold text-green-primary">
                          &larr; You are here
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-center text-3xl font-bold text-heading">
            How This Calculator Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Pick your exam",
                body: "Choose from 16 of the most popular AP exams. Each one has its own scoring structure built in.",
              },
              {
                step: "2",
                title: "Enter your scores",
                body: "Input how many multiple-choice questions you got right and your free-response point total.",
              },
              {
                step: "3",
                title: "Get your prediction",
                body: "We calculate a weighted composite score and map it to the 1\u20135 scale using approximate College Board cutoffs.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-light text-lg font-bold text-green-primary">
                  {item.step}
                </span>
                <h3 className="mb-2 text-xl font-bold text-heading">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-body">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-body">
            <strong>Disclaimer:</strong> This tool provides estimates based on
            publicly available scoring guidelines. Actual AP score cutoffs vary
            from year to year and are determined by the College Board. Use this
            calculator as a helpful guide, not a guarantee.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-heading">
            7 Tips to Boost Your AP Score
          </h2>

          <ol className="space-y-5 text-body">
            {[
              {
                title: "Start early and space it out",
                body: "Cramming the night before doesn\u2019t work for AP exams. Spread your review over weeks (or months!) so the material really sticks.",
              },
              {
                title: "Take full-length practice exams",
                body: "Simulating real test conditions - timed, no distractions - is the single best way to build stamina and identify weak spots.",
              },
              {
                title: "Master the free-response format",
                body: "Each AP exam has specific FRQ rubrics. Learn exactly what graders are looking for and practice earning every possible point.",
              },
              {
                title: "Review mistakes, not just answers",
                body: "When you get a practice question wrong, don\u2019t just read the correct answer. Understand why you missed it and what concept you need to revisit.",
              },
              {
                title: "Use official College Board resources",
                body: "Past FRQs, scoring guidelines, and course descriptions are all free on the College Board website. These are the gold standard for practice.",
              },
              {
                title: "Form a study group",
                body: "Teaching a concept to someone else is one of the most effective ways to learn. Plus, your study buddies might catch gaps you\u2019ve missed.",
              },
              {
                title: "Get expert help where it counts",
                body: "A great tutor can pinpoint exactly where you\u2019re losing points and give you targeted strategies to improve. Even a few sessions can make a big difference.",
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
            Ready to Hit Your Target AP Score?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Our expert tutors specialize in AP exam prep. Whether you&rsquo;re
            aiming for a 3 or shooting for a 5, we&rsquo;ll build a custom study
            plan around <em>your</em> strengths and goals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/book-diagnostic"
              className="inline-block rounded-lg bg-green-primary px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-dark"
            >
              Book Your Free Diagnostic
            </a>
            <a
              href="/courses/ap"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Explore AP Courses
            </a>
          </div>
        </div>
      </section>

      {/* Inline keyframe for fade-in animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
