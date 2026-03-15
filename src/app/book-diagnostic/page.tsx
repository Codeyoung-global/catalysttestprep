"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, FormEvent } from "react";

export default function BookDiagnosticPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    test: "",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Diagnostic form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Book Your Free Diagnostic Test
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Our comprehensive diagnostic pinpoints your exact strengths and
            weaknesses, giving you a clear roadmap to your target score. It
            takes about 90 minutes and is completely free&mdash;no strings
            attached.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-heading">
                Fill Out Your Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-sm font-medium text-heading"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-heading"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-heading"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                {/* Grade + Test row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="grade"
                      className="mb-1 block text-sm font-medium text-heading"
                    >
                      Grade <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      required
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                    >
                      <option value="">Select grade</option>
                      <option value="8">8th Grade</option>
                      <option value="9">9th Grade</option>
                      <option value="10">10th Grade</option>
                      <option value="11">11th Grade</option>
                      <option value="12">12th Grade</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="test"
                      className="mb-1 block text-sm font-medium text-heading"
                    >
                      Test <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="test"
                      name="test"
                      required
                      value={formData.test}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                    >
                      <option value="">Select test</option>
                      <option value="SAT">SAT</option>
                      <option value="ACT">ACT</option>
                      <option value="PSAT">PSAT</option>
                      <option value="AP">AP Exams</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="mb-1 block text-sm font-medium text-heading"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-heading"
                  >
                    Message / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else we should know? (target score, timeline, special needs, etc.)"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-primary px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-dark"
                >
                  Book My Free Diagnostic &rarr;
                </button>
              </form>
            </div>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-xl font-bold text-heading">
                What You&rsquo;ll Get
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Full-Length Diagnostic Test",
                    desc: "A realistic, timed practice test that mirrors the actual exam experience.",
                  },
                  {
                    title: "Detailed Score Report",
                    desc: "Section-by-section breakdown showing exactly where you stand.",
                  },
                  {
                    title: "Weakness Analysis",
                    desc: "AI-powered analysis identifying your top areas for improvement.",
                  },
                  {
                    title: "Personalised Study Plan",
                    desc: "A custom roadmap with week-by-week milestones toward your target score.",
                  },
                  {
                    title: "1:1 Strategy Session",
                    desc: "30-minute call with a tutor to review your results and discuss next steps.",
                  },
                ].map((benefit) => (
                  <li key={benefit.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light text-sm font-bold text-green-primary">
                      &#10003;
                    </span>
                    <div>
                      <div className="font-semibold text-heading">
                        {benefit.title}
                      </div>
                      <div className="text-sm text-body">{benefit.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-green-light p-6 text-center">
              <p className="text-sm font-semibold text-green-primary">
                100% Free &middot; No Credit Card Required &middot; No
                Obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center text-sm text-body">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-green-primary">
                500+
              </span>
              <span>Students Served</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-green-primary">
                200+
              </span>
              <span>Avg Score Improvement</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-green-primary">
                98%
              </span>
              <span>Satisfaction Rate</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-green-primary">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
