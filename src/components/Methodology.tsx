"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Methodology() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Scientifically",
      title: "Research-Backed Study Methods",
      description:
        "Our curriculum is built on cognitive science research: spaced repetition, interleaving, and active recall. These evidence-based techniques ensure that what students learn sticks long-term, not just for the next practice test.",
      icon: (
        <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      label: "Smart Questions",
      title: "AI-Powered Analytics That Pinpoint Your Weak Areas",
      description:
        "Our proprietary AI analyzes every answer to identify patterns in your mistakes. Instead of generic practice, you get questions targeted at the exact concepts where you lose the most points, turning weaknesses into strengths.",
      icon: (
        <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
    {
      label: "Easy Concepts",
      title: "Complex Topics Made Simple",
      description:
        "We break down challenging SAT concepts into digestible, step-by-step lessons. Our tutors use real-world analogies and visual explanations to make even the hardest math and reading topics feel approachable.",
      icon: (
        <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      label: "AI-Enhanced",
      title: "Adaptive Learning That Evolves With You",
      description:
        "As you improve, the AI recalibrates your study plan in real-time. Your practice sessions become increasingly focused, ensuring you spend every minute on the material that will have the biggest impact on your score.",
      icon: (
        <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
            How We Ensure Adding 150 Points in SAT
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            Our methodology combines proven learning science with cutting-edge AI to deliver consistent results.
          </p>
        </AnimateOnScroll>

        {/* Tabs */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "bg-green-primary text-white shadow-md"
                    : "bg-gray-100 text-body hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Tab Content */}
        <div
          key={activeTab}
          className="slider-slide-enter mx-auto max-w-3xl rounded-2xl bg-bg-alt p-8 md:p-12"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-light">
            {tabs[activeTab].icon}
          </div>
          <h3 className="mb-4 text-xl font-bold text-heading md:text-2xl">
            {tabs[activeTab].title}
          </h3>
          <p className="text-base leading-relaxed text-body">
            {tabs[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
}
