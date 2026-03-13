"use client";

import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-bg-alt py-16 md:py-24" id="hero">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column — ~55% */}
          <div className="flex-1 lg:max-w-[55%]">
            {/* H1 */}
            <h1 className="text-4xl font-bold leading-tight text-heading md:text-5xl" style={{ maxWidth: "600px" }}>
              1-on-1 Online SAT Prep That Adds 150+ Points — Guaranteed
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-lg text-body md:text-xl" style={{ maxWidth: "540px" }}>
              Live sessions with Ivy-level tutors. A proprietary AI-powered curriculum.
              And a money-back guarantee if you don&apos;t hit your target score.
            </p>

            {/* Value Props — 3 items */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-heading">Personalized 1-on-1 Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-heading">AI-Powered Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-heading">Score Guarantee</span>
              </div>
            </div>

            {/* Trust Logos */}
            <div className="mt-8 flex items-center gap-6">
              <span className="text-xs text-caption">As seen in</span>
              <div className="flex items-center gap-5 opacity-70">
                <span className="text-sm font-semibold text-gray-400">AP News</span>
                <span className="text-sm font-semibold text-gray-400">Outlook India</span>
              </div>
            </div>

            {/* Mobile CTA — replaces form on small screens */}
            <div className="mt-8 md:hidden">
              <a
                href="#hero-form"
                className="inline-block w-full rounded-lg bg-green-primary px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-green-dark"
              >
                Start My Free Trial &rarr;
              </a>
            </div>
          </div>

          {/* Right Column — Form Card */}
          <div className="w-full lg:max-w-[400px]" id="hero-form">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-xl font-bold text-heading">
                Start Your Free Trial
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                  required
                />
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary"
                  required
                >
                  <option value="" disabled>Select Grade</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-lg bg-green-primary py-3.5 text-base font-bold text-white transition-colors hover:bg-green-dark"
                  style={{ minHeight: "48px" }}
                >
                  Start My Free SAT Prep Trial &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
