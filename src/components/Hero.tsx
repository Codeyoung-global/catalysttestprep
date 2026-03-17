"use client";
import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

interface FormData {
    who: string;
    when: string;
    name: string;
    phone: string;
    email: string;
    grade: string;
}

const TOTAL_STEPS = 4;

export default function Hero() {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormData>({
          who: "",
          when: "",
          name: "",
          phone: "",
          email: "",
          grade: "",
    });
    const [submitted, setSubmitted] = useState(false);

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  const handleWho = (value: string) => {
        setFormData({ ...formData, who: value });
        setStep(2);
  };

  const handleWhen = (value: string) => {
        setFormData({ ...formData, when: value });
        setStep(3);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(4);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("Form submitted:", formData);
  };

  return (
        <section className="bg-bg-alt py-16 md:py-24" id="hero">
              <div className="mx-auto max-w-7xl px-6">
                      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
                        {/* Left Column */}
                                <div className="flex-1 lg:max-w-[55%]">
                                            <h1 className="animate-fade-in-up text-4xl font-bold leading-tight text-heading md:text-5xl" style={{ maxWidth: "600px" }}>
                                                          1-on-1 Online SAT Prep That Adds 150+ Points{" "}
                                                          <span className="text-gradient-green">- Guaranteed</span>
                                            </h1>
                                            <p className="animate-fade-in-up delay-200 mt-6 text-lg text-body md:text-xl" style={{ maxWidth: "540px" }}>
                                                          Live sessions with Ivy-level tutors. A proprietary AI-powered curriculum. And a money-back guarantee if you don&apos;t hit your target score.
                                            </p>
                                            <div className="animate-fade-in-up delay-400 mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
                                              {["Personalized 1-on-1 Sessions", "AI-Powered Curriculum", "Score Guarantee"].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                                            <svg className="h-5 w-5 shrink-0 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm font-medium text-heading">{item}</span>
                          </div>
                        ))}
                                            </div>
                                            <div className="mt-8 flex items-center gap-6">
                                                          <span className="text-xs text-caption">As seen in</span>
                                                          <div className="flex items-center gap-5 opacity-70">
                                                                          <span className="text-sm font-semibold text-gray-400">AP News</span>
                                                                          <span className="text-sm font-semibold text-gray-400">Outlook India</span>
                                                          </div>
                                            </div>

                                            <div className="mt-8 md:hidden">
                                                          <a href="#hero-form" className="inline-block w-full rounded-lg bg-green-primary px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-green-dark">
                                                                          Start My Free Trial &rarr;
                                                          </a>
                                            </div>
                                </div>
                      
                        {/* Right Column — Multi-Step Form */}
                                <div className="w-full animate-slide-right delay-300 lg:max-w-[420px]" id="hero-form">
                                            <div className="animate-pulse-glow rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                                              {submitted ? (
                          <div className="flex flex-col items-center py-6 text-center">
                                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-light">
                                                                <svg className="h-8 w-8 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                                                                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-heading">You&apos;re all set!</h3>
                                            <p className="mt-2 text-sm text-body">We&apos;ll be in touch within 24 hours to schedule your free trial session.</p>
                          </div>
                        ) : (
                          <>
                            {/* Progress bar (shown after step 1) */}
                            {step > 1 && (
                                                <div className="mb-6">
                                                                      <button onClick={() => setStep((s) => (s - 1) as Step)} className="mb-3 flex items-center gap-1 text-sm text-body hover:text-green-primary transition-colors">
                                                                                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                                                                </svg>
                                                                                              Back
                                                                      </button>
                                                                      <div className="h-1.5 w-full rounded-full bg-gray-200">
                                                                                              <div className="h-1.5 rounded-full bg-green-primary transition-all duration-300" style={{ width: `${progress}%` }} />
                                                                      </div>
                                                </div>
                                            )}
                          
                            {/* Step 1 — Who */}
                            {step === 1 && (
                                                <div>
                                                                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-primary">America&apos;s #1 SAT Prep Platform</p>
                                                                      <h2 className="mb-6 text-xl font-bold text-heading">Who will be getting tutoring?</h2>
                                                                      <div className="flex flex-col gap-3">
                                                                        {["I will", "My child", "Someone else"].map((opt) => (
                                                                            <button key={opt} onClick={() => handleWho(opt)} className="w-full rounded-xl bg-heading py-3.5 text-base font-semibold text-white transition-all hover:bg-green-dark hover:scale-[1.02] active:scale-[0.98]">
                                                                              {opt}
                                                                              </button>
                                                                          ))}
                                                                      </div>
                                                </div>
                                            )}
                          
                            {/* Step 2 — When */}
                            {step === 2 && (
                                                <div>
                                                                      <h2 className="mb-6 text-xl font-bold text-heading">How soon would you like to get started?</h2>
                                                                      <div className="flex flex-col gap-3">
                                                                        {["Right away", "In a few weeks", "Not sure"].map((opt) => (
                                                                            <button key={opt} onClick={() => handleWhen(opt)} className="w-full rounded-xl bg-heading py-3.5 text-base font-semibold text-white transition-all hover:bg-green-dark hover:scale-[1.02] active:scale-[0.98]">
                                                                              {opt}
                                                                              </button>
                                                                          ))}
                                                                      </div>
                                                </div>
                                            )}
                          
                            {/* Step 3 — Contact Info */}
                            {step === 3 && (
                                                <div>
                                                                      <h2 className="mb-2 text-xl font-bold text-heading">Let&apos;s find you the perfect tutor</h2>
                                                                      <p className="mb-5 text-sm text-body">Fill in your details and we&apos;ll match you with a top SAT specialist.</p>
                                                                      <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                                                                                              <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary" required />
                                                                                              <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary" required />
                                                                                              <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading placeholder-gray-400 transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary" required />
                                                                                              <button type="submit" className="mt-2 w-full rounded-lg bg-green-primary py-3.5 text-base font-bold text-white transition-colors hover:bg-green-dark">
                                                                                                                        Continue &rarr;
                                                                                                </button>
                                                                      </form>
                                                </div>
                                            )}
                          
                            {/* Step 4 — Grade */}
                            {step === 4 && (
                                                <div>
                                                                      <h2 className="mb-2 text-xl font-bold text-heading">Almost there!</h2>
                                                                      <p className="mb-5 text-sm text-body">Select the student&apos;s current grade to personalise your prep plan.</p>
                                                                      <form onSubmit={handleFinalSubmit} className="flex flex-col gap-4">
                                                                                              <select value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-heading transition-colors focus:border-green-primary focus:ring-1 focus:ring-green-primary" required>
                                                                                                                        <option value="" disabled>Select Grade</option>
                                                                                                {["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map((g) => (
                                                                              <option key={g} value={g}>{g}</option>
                                                                            ))}
                                                                                                </select>
                                                                                              <button type="submit" className="mt-2 w-full rounded-lg bg-green-primary py-3.5 text-base font-bold text-white transition-colors hover:bg-green-dark">
                                                                                                                        Start My Free SAT Prep Trial &rarr;
                                                                                                </button>
                                                                      </form>
                                                                      <div className="mt-4 flex items-center justify-center gap-6 text-center">
                                                                        {[["10M+", "Hours of Live Instruction"], ["10K+", "5-Star Reviews"], ["40K+", "Expert Tutors"]].map(([num, label]) => (
                                                                            <div key={num}>
                                                                                                        <p className="text-lg font-bold text-green-primary">{num}</p>
                                                                                                        <p className="text-xs text-caption">{label}</p>
                                                                              </div>
                                                                          ))}
                                                                      </div>
                                                </div>
                                            )}
                          </>
                        )}
                                            </div>
                                </div>
                      </div>
              </div>
        </section>
      );
}
