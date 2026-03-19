"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CountUpNumber from "./CountUpNumber";

const features = [
  {
    icon: (
      <svg className="h-7 w-7 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    text: "Live 1:1 online classes with expert mentors",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    text: "Learn from the comfort of your home",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    text: "AI-driven tools to help your daily learning",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    text: "Schedule classes anytime from anywhere",
  },
];

const benefitTags = [
  "Personalized learning",
  "Expert guidance",
  "Faster progress",
  "Deeper understanding",
  "Stronger confidence",
];

const pedagogyCards = [
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Live 1:1 online classes",
    description:
      "Dedicated attention from mentor who adapts lessons to kid's pace and style",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Mastery-based progress tracking",
    description:
      "We help students fully understand each concept before moving on",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Real-time feedback & guidance",
    description:
      "Immediate support accelerates learning and builds confidence",
  },
];

function BellCurveChart() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h4 className="mb-4 text-center text-base font-bold text-heading">
        Achievement Distribution for Students
      </h4>

      {/* Legend */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm bg-amber-400" />
          Traditional Classroom (1:30)
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm bg-blue-500" />
          Group Learning (1:10)
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm bg-green-primary" />
          Mastery Learning from 1:1 Tutoring
        </div>
      </div>

      {/* SVG Bell Curves */}
      <svg viewBox="0 0 400 200" className="w-full" aria-label="Bell curve chart showing 1:1 tutoring outperforms traditional and group learning">
        {/* Grid lines */}
        <line x1="40" y1="170" x2="380" y2="170" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="40" y1="130" x2="380" y2="130" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="4" />
        <line x1="40" y1="90" x2="380" y2="90" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="4" />
        <line x1="40" y1="50" x2="380" y2="50" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="4" />

        {/* Traditional Classroom - amber bell curve (leftmost) */}
        <path
          d="M40,170 C40,170 60,168 80,160 C100,150 120,100 150,50 C180,100 200,150 220,160 C240,168 260,170 280,170"
          fill="rgba(251,191,36,0.25)"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* Group Learning - blue bell curve (middle) */}
        <path
          d="M100,170 C100,170 120,168 140,160 C160,148 180,90 210,40 C240,90 260,148 280,160 C300,168 320,170 340,170"
          fill="rgba(59,130,246,0.2)"
          stroke="#3b82f6"
          strokeWidth="2"
        />

        {/* 1:1 Mastery Learning - green bell curve (rightmost, tallest) */}
        <path
          d="M160,170 C160,170 190,168 220,155 C250,135 270,60 300,20 C330,60 350,135 365,155 C372,165 378,170 380,170"
          fill="rgba(34,197,94,0.25)"
          stroke="#16a34a"
          strokeWidth="2.5"
        />

        {/* X-axis label */}
        <text x="210" y="195" textAnchor="middle" className="fill-gray-500 text-[11px]">
          Achievement Scores
        </text>
      </svg>
    </div>
  );
}

export default function ProvenAdvantage() {
  return (
    <>
      {/* 4-Column Feature Strip */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  {f.icon}
                  <p className="text-sm font-medium text-heading">{f.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Student Counter */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:gap-4">
              <div>
                <span className="text-4xl font-bold text-green-primary md:text-5xl">
                  <CountUpNumber end={50136} separator="," />
                </span>
                <p className="text-base font-semibold text-green-primary">students</p>
              </div>
              <p className="text-lg text-body md:text-xl">
                have experienced 1:1 classes with Codeyoung globally
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="border-gray-100" />
      </div>

      {/* The Proven Advantage of 1:1 Learning */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">
              The proven advantage of 1:1 learning
            </h2>
          </AnimateOnScroll>

          {/* Bloom's 2 Sigma + Chart */}
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* Left - Bloom's 2 Sigma */}
            <AnimateOnScroll animation="slide-left">
              <div className="border-l-4 border-green-primary pl-6">
                <p className="text-lg font-semibold text-heading">
                  The Bloom&apos;s 2 Sigma effect: A 1:1 tutored student
                  performs better than 98% of their peers.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body italic">
                  Research from educational psychologist Benjamin Bloom showed
                  that students who receive one-to-one, mastery-based tutoring
                  can achieve performance gains that are two standard deviations
                  above students in traditional classroom settings.
                </p>
              </div>

              {/* Benefit Tags */}
              <div className="mt-8 flex flex-wrap items-start gap-3">
                {benefitTags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium ${
                      i % 2 === 0
                        ? "border-green-primary/30 bg-green-light text-green-primary"
                        : "border-gray-200 bg-white text-heading"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Right - Bell Curve Chart */}
            <AnimateOnScroll animation="slide-right">
              <BellCurveChart />
            </AnimateOnScroll>
          </div>

          {/* Pedagogy Cards */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="mt-16 mb-8 text-center text-base text-body">
              At Catalyst, we bring this proven pedagogical principle to life:
            </p>
          </AnimateOnScroll>

          <div className="grid gap-6 md:grid-cols-3">
            {pedagogyCards.map((card, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100 + 300}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-light">
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm text-body">{card.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
