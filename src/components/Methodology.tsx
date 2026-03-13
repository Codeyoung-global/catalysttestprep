"use client";

import { useState } from "react";

export default function Methodology() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Scientifically",
      title: "Research-Backed Study Methods",
      description:
        "Our curriculum is built on cognitive science research — spaced repetition, interleaving, and active recall. These evidence-based techniques ensure that what students learn sticks long-term, not just for the next practice test.",
    },
    {
      label: "Smart Questions",
      title: "AI-Powered Analytics That Pinpoint Your Weak Areas",
      description:
        "Our proprietary AI analyzes every answer to identify patterns in your mistakes. Instead of generic practice, you get questions targeted at the exact concepts where you lose the most points — turning weaknesses into strengths.",
    },
    {
      label: "Easy Concepts",
      title: "Complex Topics Made Simple",
      description:
        "We break down challenging SAT concepts into digestible, step-by-step lessons. Our tutors use real-world analogies and visual explanations to make even the hardest math and reading topics feel approachable.",
    },
    {
      label: "AI-Enhanced",
      title: "Adaptive Learning That Evolves With You",
      description:
        "As you improve, the AI recalibrates your study plan in real-time. Your practice sessions become increasingly focused, ensuring you spend every minute on the material that will have the biggest impact on your score.",
    },
  ];

  return (
    <section className="bg-white" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
          How We Ensure Adding 150 Points in SAT
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body">
          Our methodology combines proven learning science with cutting-edge AI to deliver consistent results.
        </p>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === i
                  ? "bg-green-primary text-white"
                  : "bg-gray-100 text-body hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mx-auto max-w-3xl rounded-xl bg-bg-alt p-8 md:p-12">
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
