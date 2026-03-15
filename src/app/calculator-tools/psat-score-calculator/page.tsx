"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Constants & helpers                                                */
/* ------------------------------------------------------------------ */

const MATH_MIN = 160;
const MATH_MAX = 760;
const EBRW_MIN = 160;
const EBRW_MAX = 760;

/** Approximate PSAT percentile based on total score (320-1520). */
function getPercentile(total: number): number {
  if (total >= 1460) return 99;
  if (total >= 1400) return 99;
  if (total >= 1370) return 98;
  if (total >= 1340) return 97;
  if (total >= 1310) return 96;
  if (total >= 1280) return 95;
  if (total >= 1250) return 93;
  if (total >= 1220) return 91;
  if (total >= 1200) return 89;
  if (total >= 1170) return 86;
  if (total >= 1140) return 83;
  if (total >= 1110) return 80;
  if (total >= 1080) return 76;
  if (total >= 1050) return 72;
  if (total >= 1020) return 67;
  if (total >= 990) return 62;
  if (total >= 960) return 57;
  if (total >= 930) return 51;
  if (total >= 900) return 46;
  if (total >= 870) return 40;
  if (total >= 840) return 35;
  if (total >= 810) return 30;
  if (total >= 780) return 25;
  if (total >= 750) return 21;
  if (total >= 720) return 17;
  if (total >= 690) return 13;
  if (total >= 660) return 10;
  if (total >= 630) return 8;
  if (total >= 600) return 5;
  if (total >= 560) return 3;
  if (total >= 500) return 2;
  return 1;
}

/** Encouraging message based on Selection Index. */
function encouragingMessage(selectionIndex: number): string {
  if (selectionIndex >= 222)
    return "National Merit Semifinalist territory! You are absolutely crushing it!";
  if (selectionIndex >= 215)
    return "You are in the running for National Merit Semifinalist in many states -- incredible work!";
  if (selectionIndex >= 207)
    return "Commended Scholar material! That is a seriously impressive score.";
  if (selectionIndex >= 190)
    return "Strong performance! You are well above average and building a great college profile.";
  if (selectionIndex >= 150)
    return "Solid foundation! With targeted practice, you can push this score even higher.";
  if (selectionIndex >= 100)
    return "Good start -- every point counts, and the right study plan can make a big difference.";
  return "This is your starting line, not your finish line. Let's build a plan to boost your score!";
}

/** Color class for score tier. */
function tierColor(selectionIndex: number): string {
  if (selectionIndex >= 207) return "text-green-500";
  if (selectionIndex >= 190) return "text-emerald-500";
  if (selectionIndex >= 150) return "text-yellow-500";
  if (selectionIndex >= 100) return "text-orange-500";
  return "text-red-500";
}

function tierBgColor(selectionIndex: number): string {
  if (selectionIndex >= 207) return "bg-green-100 border-green-300";
  if (selectionIndex >= 190) return "bg-emerald-50 border-emerald-300";
  if (selectionIndex >= 150) return "bg-yellow-50 border-yellow-300";
  if (selectionIndex >= 100) return "bg-orange-50 border-orange-300";
  return "bg-red-50 border-red-300";
}

/* ------------------------------------------------------------------ */
/*  Animated score display                                             */
/* ------------------------------------------------------------------ */

function ScoreDisplay({
  label,
  value,
  subtitle,
  colorClass,
}: {
  label: string;
  value: string;
  subtitle?: string;
  colorClass?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-1 text-sm font-semibold uppercase tracking-wider text-body">
        {label}
      </span>
      <span
        className={`text-5xl font-extrabold tabular-nums transition-all duration-500 ${colorClass ?? "text-green-primary"}`}
        style={{ animation: "scorePopIn 0.4s ease-out" }}
      >
        {value}
      </span>
      {subtitle && (
        <span className="mt-1 text-xs font-medium text-body">{subtitle}</span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  National Merit badge                                               */
/* ------------------------------------------------------------------ */

function MeritBadge({ selectionIndex }: { selectionIndex: number }) {
  if (selectionIndex >= 215) {
    return (
      <div
        className="mt-6 inline-flex items-center gap-3 rounded-full border-2 border-yellow-400 bg-yellow-50 px-6 py-3"
        style={{ animation: "badgeSlideUp 0.6s ease-out" }}
      >
        <span className="text-3xl">&#127942;</span>
        <div className="text-left">
          <p className="text-sm font-bold text-yellow-800">
            Potential National Merit Semifinalist
          </p>
          <p className="text-xs text-yellow-700">
            Cutoffs vary by state (typically 215-224). You are in the zone!
          </p>
        </div>
      </div>
    );
  }

  if (selectionIndex >= 207) {
    return (
      <div
        className="mt-6 inline-flex items-center gap-3 rounded-full border-2 border-green-400 bg-green-50 px-6 py-3"
        style={{ animation: "badgeSlideUp 0.6s ease-out" }}
      >
        <span className="text-3xl">&#11088;</span>
        <div className="text-left">
          <p className="text-sm font-bold text-green-800">
            National Merit Commended Scholar
          </p>
          <p className="text-xs text-green-700">
            Selection Index of 207+ qualifies for Commended recognition.
            Fantastic work!
          </p>
        </div>
      </div>
    );
  }

  if (selectionIndex >= 190) {
    return (
      <div
        className="mt-6 inline-flex items-center gap-3 rounded-full border-2 border-blue-300 bg-blue-50 px-6 py-3"
        style={{ animation: "badgeSlideUp 0.6s ease-out" }}
      >
        <span className="text-3xl">&#128170;</span>
        <div className="text-left">
          <p className="text-sm font-bold text-blue-800">
            Close to Commended Scholar
          </p>
          <p className="text-xs text-blue-700">
            You are within striking distance. Focused prep could get you there!
          </p>
        </div>
      </div>
    );
  }

  return null;
}

/* ------------------------------------------------------------------ */
/*  Score input component                                              */
/* ------------------------------------------------------------------ */

function ScoreInput({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-heading">{label}</label>
        <span className="text-xs text-body">
          {min} - {max}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <input
            type="range"
            min={min}
            max={max}
            step={10}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-green-600"
            style={{
              background: `linear-gradient(to right, #16a34a ${pct}%, #e5e7eb ${pct}%)`,
            }}
          />
        </div>

        <input
          type="number"
          min={min}
          max={max}
          step={10}
          value={value}
          onChange={(e) => {
            let v = Number(e.target.value);
            if (v < min) v = min;
            if (v > max) v = max;
            // Round to nearest 10
            v = Math.round(v / 10) * 10;
            onChange(v);
          }}
          className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-center text-lg font-bold text-heading outline-none focus:border-green-primary focus:ring-1 focus:ring-green-primary"
        />
      </div>

      {/* Visual progress bar label */}
      <div className="flex justify-between text-xs text-body">
        <span>Low</span>
        <span>Average</span>
        <span>Excellent</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Percentile bar                                                     */
/* ------------------------------------------------------------------ */

function PercentileBar({ percentile }: { percentile: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-heading">
          National Percentile
        </span>
        <span className="text-sm font-bold text-green-primary">
          {percentile}th
        </span>
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-700 ease-out"
          style={{ width: `${percentile}%` }}
        />
      </div>
      <p className="text-xs text-body">
        You scored higher than approximately {percentile}% of test takers.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  State cutoff table data                                            */
/* ------------------------------------------------------------------ */

const STATE_CUTOFFS: { state: string; cutoff: number }[] = [
  { state: "Alabama", cutoff: 215 },
  { state: "Alaska", cutoff: 215 },
  { state: "Arizona", cutoff: 218 },
  { state: "California", cutoff: 221 },
  { state: "Colorado", cutoff: 220 },
  { state: "Connecticut", cutoff: 222 },
  { state: "Florida", cutoff: 219 },
  { state: "Georgia", cutoff: 220 },
  { state: "Illinois", cutoff: 221 },
  { state: "Massachusetts", cutoff: 223 },
  { state: "Maryland", cutoff: 223 },
  { state: "Michigan", cutoff: 219 },
  { state: "Minnesota", cutoff: 220 },
  { state: "New Jersey", cutoff: 223 },
  { state: "New York", cutoff: 222 },
  { state: "North Carolina", cutoff: 220 },
  { state: "Ohio", cutoff: 219 },
  { state: "Pennsylvania", cutoff: 221 },
  { state: "Texas", cutoff: 221 },
  { state: "Virginia", cutoff: 222 },
  { state: "Washington", cutoff: 222 },
  { state: "Washington D.C.", cutoff: 224 },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function PsatScoreCalculatorPage() {
  const [mathScore, setMathScore] = useState(530);
  const [ebrwScore, setEbrwScore] = useState(530);
  const [showStateCutoffs, setShowStateCutoffs] = useState(false);

  const results = useMemo(() => {
    const total = mathScore + ebrwScore;
    const selectionIndex = Math.round(total / 10);
    const percentile = getPercentile(total);

    return { total, selectionIndex, percentile };
  }, [mathScore, ebrwScore]);

  return (
    <>
      {/* Keyframe animations */}
      <style jsx global>{`
        @keyframes scorePopIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          60% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes badgeSlideUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          0% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          transition: transform 0.15s ease;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            PSAT/NMSQT Score Calculator
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Slide, calculate, and find out if you&rsquo;re on track for National
            Merit -- all in under 30 seconds.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Score inputs */}
          <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
            <h2 className="mb-6 text-center text-2xl font-bold text-heading">
              Enter Your Section Scores
            </h2>

            <div className="grid gap-10 md:grid-cols-2">
              <ScoreInput
                label="Math Section Score"
                value={mathScore}
                min={MATH_MIN}
                max={MATH_MAX}
                onChange={setMathScore}
              />
              <ScoreInput
                label="Evidence-Based Reading & Writing"
                value={ebrwScore}
                min={EBRW_MIN}
                max={EBRW_MAX}
                onChange={setEbrwScore}
              />
            </div>
          </div>

          {/* Results */}
          <div
            className="mb-10 rounded-2xl bg-bg-alt p-8 shadow-sm"
            style={{ animation: "fadeInUp 0.5s ease-out" }}
          >
            <h2 className="mb-6 text-center text-2xl font-bold text-heading">
              Your PSAT Results
            </h2>

            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
              <ScoreDisplay
                label="Total Score"
                value={results.total.toString()}
                subtitle="out of 1520"
                colorClass={tierColor(results.selectionIndex)}
              />
              <div className="hidden h-16 w-px bg-gray-300 sm:block" />
              <ScoreDisplay
                label="Selection Index"
                value={results.selectionIndex.toString()}
                subtitle="out of 228"
                colorClass={tierColor(results.selectionIndex)}
              />
            </div>

            {/* Encouraging message */}
            <p className="mt-6 text-center text-lg font-medium text-heading">
              {encouragingMessage(results.selectionIndex)}
            </p>

            {/* Merit badge */}
            <div className="text-center">
              <MeritBadge selectionIndex={results.selectionIndex} />
            </div>

            {/* Percentile bar */}
            <div className="mt-8">
              <PercentileBar percentile={results.percentile} />
            </div>
          </div>

          {/* Score breakdown card */}
          <div
            className={`mb-10 rounded-2xl border p-6 ${tierBgColor(results.selectionIndex)} transition-colors duration-500`}
          >
            <h3 className="mb-4 text-lg font-bold text-heading">
              Score Breakdown
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  label: "Math",
                  value: mathScore,
                  max: 760,
                },
                {
                  label: "EBRW",
                  value: ebrwScore,
                  max: 760,
                },
                {
                  label: "Total",
                  value: results.total,
                  max: 1520,
                },
                {
                  label: "Selection Index",
                  value: results.selectionIndex,
                  max: 228,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-body">
                    {item.label}
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-heading">
                    {item.value}
                  </p>
                  <div className="mx-auto mt-2 h-1.5 w-full max-w-[100px] overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-green-500 transition-all duration-500"
                      style={{
                        width: `${(item.value / item.max) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-body">of {item.max}</p>
                </div>
              ))}
            </div>
          </div>

          {/* State cutoffs toggle */}
          <div className="mb-10 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <button
              onClick={() => setShowStateCutoffs((prev) => !prev)}
              className="flex w-full items-center justify-between text-left"
            >
              <h3 className="text-lg font-bold text-heading">
                National Merit Semifinalist Cutoffs by State
              </h3>
              <span
                className="text-2xl text-body transition-transform duration-300"
                style={{
                  transform: showStateCutoffs
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                &#9660;
              </span>
            </button>

            {showStateCutoffs && (
              <div
                className="mt-4"
                style={{ animation: "fadeInUp 0.3s ease-out" }}
              >
                <p className="mb-4 text-sm text-body">
                  These are approximate Selection Index cutoffs. Actual cutoffs
                  change each year. Your Selection Index:{" "}
                  <strong className={tierColor(results.selectionIndex)}>
                    {results.selectionIndex}
                  </strong>
                </p>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {STATE_CUTOFFS.map(({ state, cutoff }) => {
                    const qualifies = results.selectionIndex >= cutoff;
                    return (
                      <div
                        key={state}
                        className={`flex items-center justify-between rounded-lg px-4 py-2 text-sm ${
                          qualifies
                            ? "bg-green-50 text-green-800"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        <span className="font-medium">{state}</span>
                        <span className="flex items-center gap-2">
                          <span className="font-bold">{cutoff}</span>
                          {qualifies && (
                            <span className="text-green-600">&#10003;</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What does my PSAT score mean? */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-center text-3xl font-bold text-heading">
            What Does My PSAT Score Mean?
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-heading">
                Total Score (320-1520)
              </h3>
              <p className="leading-relaxed text-body">
                Your total PSAT score is the sum of your Math and
                Evidence-Based Reading & Writing section scores. Each section
                ranges from 160 to 760. This score helps you benchmark yourself
                against other test takers and track your progress toward the
                SAT.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-heading">
                Selection Index (48-228)
              </h3>
              <p className="leading-relaxed text-body">
                The Selection Index is used by the National Merit Scholarship
                Program to determine eligibility. It is calculated by adding
                your two section scores and dividing by 10 (approximately). A
                score of 207 or above typically qualifies for Commended Scholar,
                while Semifinalist cutoffs vary by state.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-heading">
                Commended Scholar (207+)
              </h3>
              <p className="leading-relaxed text-body">
                About 34,000 students nationwide earn Commended Scholar status
                each year. While it doesn&rsquo;t advance to the Finalist
                stage, it&rsquo;s a prestigious honor that looks great on
                college applications and can unlock certain scholarships.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-heading">
                Semifinalist & Finalist
              </h3>
              <p className="leading-relaxed text-body">
                About 16,000 students qualify as Semifinalists based on
                state-level cutoffs (typically 215-224). Semifinalists who
                complete the application process can advance to Finalist status
                and compete for $2,500 National Merit Scholarships and
                college-sponsored awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips to improve */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-heading">
            5 Ways to Boost Your PSAT Score
          </h2>

          <ol className="space-y-5 text-body">
            {[
              {
                title: "Take a full-length practice test first",
                body: "Before diving into prep, take a timed practice PSAT to identify your baseline. Knowing your starting point helps you focus on the areas with the most room for improvement.",
              },
              {
                title: "Master the math fundamentals",
                body: "The PSAT Math section rewards fluency with algebra, problem-solving, and data analysis. Drill core concepts until they feel automatic -- speed and accuracy go hand in hand.",
              },
              {
                title: "Read strategically, not passively",
                body: "For the Reading & Writing section, practice active reading: annotate passages, identify the main idea quickly, and eliminate wrong answers before picking the right one.",
              },
              {
                title: "Learn the test's patterns",
                body: "The PSAT reuses question types and formats. Once you recognize common patterns -- like \"best evidence\" pairs or \"no change\" grammar questions -- you can answer faster and more confidently.",
              },
              {
                title: "Work with a tutor or structured program",
                body: "A personalized study plan accelerates progress. An experienced tutor can pinpoint weak spots you might miss on your own and teach you strategies tailored to your learning style.",
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
            Ready to Reach Your PSAT Goals?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Whether you&rsquo;re aiming for National Merit or just want to
            build a strong foundation for the SAT, our expert tutors create a
            personalized game plan just for you. Book a free diagnostic session
            and let&rsquo;s get started.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/book-diagnostic"
              className="inline-block rounded-lg bg-green-primary px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-dark"
            >
              Book Your Free Diagnostic
            </a>
            <a
              href="/courses"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Explore Our Courses
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
