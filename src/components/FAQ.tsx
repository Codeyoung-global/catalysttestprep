"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is included in the free SAT prep trial class?",
    answer:
      "Your free trial includes a full diagnostic assessment to identify your strengths and weaknesses, a personalized learning profile analysis, and a live 1-on-1 session with one of our expert tutors. You'll walk away with a clear understanding of where you stand and a roadmap for improvement.",
  },
  {
    question: "How does the SAT score improvement guarantee work?",
    answer:
      "We guarantee that you'll score 1400+ on the SAT or add at least 150 points to your starting score, depending on your baseline. If you complete your full program and don't reach your target, you'll receive a full refund. The guarantee is based on completing all scheduled sessions and assigned practice.",
  },
  {
    question: "What qualifications do your SAT tutors have?",
    answer:
      "All Catalyst tutors are graduates of top-tier universities including Ivy League schools. They've scored in the 99th percentile on the SAT and have multiple years of tutoring experience. Every tutor is vetted through a rigorous selection process that evaluates both subject expertise and teaching ability.",
  },
  {
    question: "How is Catalyst different from group SAT prep courses?",
    answer:
      "Unlike group classes where everyone follows the same pace, Catalyst provides fully personalized 1-on-1 sessions. Your tutor builds a custom curriculum around your specific weak areas using our AI-powered diagnostic tools. This targeted approach is why our students see an average improvement of 150+ points.",
  },
  {
    question: "How does the AI-powered curriculum work?",
    answer:
      "Our proprietary AI engine analyzes your performance on every practice question to identify patterns in your mistakes. It then adapts your study plan in real-time, selecting questions that target the exact concepts where you lose the most points. As you improve, the difficulty and focus areas automatically adjust.",
  },
  {
    question: "Can I schedule sessions at flexible times?",
    answer:
      "Yes! All sessions are conducted online, and you can schedule them at times that work best for you, including evenings and weekends. Our platform matches you with tutors across multiple time zones, so there's always availability. Sessions can be rescheduled with 24 hours notice.",
  },
  {
    question: "How long does a typical SAT prep program last?",
    answer:
      "Program length depends on your starting score and target. Most students see significant improvement within 8–12 weeks. Our plans range from 20 to 80 sessions, and your advisor will recommend the right plan during your free trial based on your diagnostic results and timeline.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white" style={{ padding: "var(--section-gap) 0" }} id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
          SAT Prep FAQs: Common Questions About Catalyst Test Prep
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body">
          Find answers to the most common questions about our SAT prep programs, tutors, and guarantee.
        </p>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-heading md:text-lg">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-caption transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "mt-3 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-base leading-relaxed text-body">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
