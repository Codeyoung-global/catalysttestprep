"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUpNumber from "@/components/CountUpNumber";
import { studentImages } from "@/data/images";
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
      <section className="relative bg-surface-dark py-20 text-center md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={studentImages.studentExam}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Book Your Free Diagnostic Test
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg">
              Our comprehensive diagnostic pinpoints your exact strengths and
              weaknesses, giving you a clear roadmap to your target score. It
              takes about 90 minutes and is completely free - no strings
              attached.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-3">
          {/* Form */}
          <AnimateOnScroll animation="slide-left" className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-heading">
                Fill Out Your Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-heading">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName" name="fullName" type="text" required
                    value={formData.fullName} onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-heading">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-heading">
                    Phone Number
                  </label>
                  <input
                    id="phone" name="phone" type="tel"
                    value={formData.phone} onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="grade" className="mb-1 block text-sm font-medium text-heading">
                      Grade <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="grade" name="grade" required
                      value={formData.grade} onChange={handleChange}
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
                    <label htmlFor="test" className="mb-1 block text-sm font-medium text-heading">
                      Test <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="test" name="test" required
                      value={formData.test} onChange={handleChange}
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

                <div>
                  <label htmlFor="preferredDate" className="mb-1 block text-sm font-medium text-heading">
                    Preferred Date
                  </label>
                  <input
                    id="preferredDate" name="preferredDate" type="date"
                    value={formData.preferredDate} onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-heading">
                    Message / Notes
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={formData.message} onChange={handleChange}
                    placeholder="Anything else we should know? (target score, timeline, special needs, etc.)"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body outline-none transition focus:border-green-primary focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-green-dark hover:shadow-lg"
                >
                  Book My Free Diagnostic &rarr;
                </button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Benefits Sidebar */}
          <AnimateOnScroll animation="slide-right">
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <h3 className="mb-5 text-xl font-bold text-heading">
                  What You&rsquo;ll Get
                </h3>
                <ul className="space-y-4">
                  {[
                    { title: "Full-Length Diagnostic Test", desc: "A realistic, timed practice test that mirrors the actual exam experience." },
                    { title: "Detailed Score Report", desc: "Section-by-section breakdown showing exactly where you stand." },
                    { title: "Weakness Analysis", desc: "AI-powered analysis identifying your top areas for improvement." },
                    { title: "Personalised Study Plan", desc: "A custom roadmap with week-by-week milestones toward your target score." },
                    { title: "1:1 Strategy Session", desc: "30-minute call with a tutor to review your results and discuss next steps." },
                  ].map((benefit) => (
                    <li key={benefit.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-light text-sm font-bold text-green-primary">
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-semibold text-heading">{benefit.title}</div>
                        <div className="text-sm text-body">{benefit.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={studentImages.studentExam}
                  alt="Student focused on exam preparation"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="rounded-2xl bg-green-light p-6 text-center">
                <p className="text-sm font-semibold text-green-primary">
                  100% Free &middot; No Credit Card Required &middot; No Obligation
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="flex flex-wrap items-center justify-center gap-6 text-center text-sm text-body sm:gap-8">
              {[
                { end: 500, suffix: "+", label: "Students Served" },
                { end: 200, suffix: "+", label: "Avg Score Improvement" },
                { end: 98, suffix: "%", label: "Satisfaction Rate" },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  {i > 0 && <div className="hidden h-8 w-px bg-gray-200 sm:block" style={{ position: "absolute", marginLeft: "-2rem" }} />}
                  <span className="text-2xl font-bold text-green-primary">
                    <CountUpNumber end={item.end} suffix={item.suffix} />
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-green-primary">
                  <span className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                </span>
                <span>5-Star Rated</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
