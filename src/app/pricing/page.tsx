"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const testTiers = {
  SAT: [
    {
      name: "Starter",
      sessions: "20 Sessions",
      price: "$1,499",
      features: [
        "Full diagnostic assessment",
        "Personalised study plan",
        "20 x 1-hour 1:1 sessions",
        "AI progress tracking",
        "Practice test access",
      ],
    },
    {
      name: "Standard",
      sessions: "40 Sessions",
      price: "$2,799",
      popular: true,
      features: [
        "Everything in Starter",
        "40 x 1-hour 1:1 sessions",
        "Score improvement guarantee",
        "Custom homework assignments",
        "Parent progress reports",
      ],
    },
    {
      name: "Premium",
      sessions: "60 Sessions",
      price: "$3,999",
      features: [
        "Everything in Standard",
        "60 x 1-hour 1:1 sessions",
        "Priority tutor matching",
        "College admissions guidance",
        "Session recordings",
      ],
    },
    {
      name: "Elite",
      sessions: "80 Sessions",
      price: "$4,999",
      features: [
        "Everything in Premium",
        "80 x 1-hour 1:1 sessions",
        "Dedicated academic advisor",
        "Unlimited practice tests",
        "1400+ score guarantee",
      ],
    },
  ],
  ACT: [
    {
      name: "Starter",
      sessions: "20 Sessions",
      price: "$1,499",
      features: [
        "Full diagnostic assessment",
        "Personalised study plan",
        "20 x 1-hour 1:1 sessions",
        "AI progress tracking",
        "Practice test access",
      ],
    },
    {
      name: "Standard",
      sessions: "40 Sessions",
      price: "$2,799",
      popular: true,
      features: [
        "Everything in Starter",
        "40 x 1-hour 1:1 sessions",
        "Score improvement guarantee",
        "Custom homework assignments",
        "Parent progress reports",
      ],
    },
    {
      name: "Premium",
      sessions: "60 Sessions",
      price: "$3,999",
      features: [
        "Everything in Standard",
        "60 x 1-hour 1:1 sessions",
        "Priority tutor matching",
        "College admissions guidance",
        "Session recordings",
      ],
    },
    {
      name: "Elite",
      sessions: "80 Sessions",
      price: "$4,999",
      features: [
        "Everything in Premium",
        "80 x 1-hour 1:1 sessions",
        "Dedicated academic advisor",
        "Unlimited practice tests",
        "32+ score guarantee",
      ],
    },
  ],
  PSAT: [
    {
      name: "Starter",
      sessions: "15 Sessions",
      price: "$1,099",
      features: [
        "Full diagnostic assessment",
        "Personalised study plan",
        "15 x 1-hour 1:1 sessions",
        "AI progress tracking",
        "Practice test access",
      ],
    },
    {
      name: "Standard",
      sessions: "30 Sessions",
      price: "$1,999",
      popular: true,
      features: [
        "Everything in Starter",
        "30 x 1-hour 1:1 sessions",
        "Score improvement guarantee",
        "Custom homework assignments",
        "National Merit strategy",
      ],
    },
    {
      name: "Premium",
      sessions: "45 Sessions",
      price: "$2,799",
      features: [
        "Everything in Standard",
        "45 x 1-hour 1:1 sessions",
        "Priority tutor matching",
        "Parent progress reports",
        "Session recordings",
      ],
    },
    {
      name: "Elite",
      sessions: "60 Sessions",
      price: "$3,499",
      features: [
        "Everything in Premium",
        "60 x 1-hour 1:1 sessions",
        "Dedicated academic advisor",
        "Unlimited practice tests",
        "National Merit Semifinalist prep",
      ],
    },
  ],
  AP: [
    {
      name: "Starter",
      sessions: "10 Sessions",
      price: "$799",
      features: [
        "Subject diagnostic assessment",
        "Personalised study plan",
        "10 x 1-hour 1:1 sessions",
        "AI progress tracking",
        "Practice exam access",
      ],
    },
    {
      name: "Standard",
      sessions: "20 Sessions",
      price: "$1,499",
      popular: true,
      features: [
        "Everything in Starter",
        "20 x 1-hour 1:1 sessions",
        "Free response coaching",
        "Custom homework assignments",
        "Progress reports",
      ],
    },
    {
      name: "Premium",
      sessions: "30 Sessions",
      price: "$2,099",
      features: [
        "Everything in Standard",
        "30 x 1-hour 1:1 sessions",
        "Priority tutor matching",
        "Multi-subject support",
        "Session recordings",
      ],
    },
    {
      name: "Elite",
      sessions: "40 Sessions",
      price: "$2,699",
      features: [
        "Everything in Premium",
        "40 x 1-hour 1:1 sessions",
        "Dedicated academic advisor",
        "Unlimited practice exams",
        "Score 5 guarantee",
      ],
    },
  ],
};

const faqs = [
  {
    q: "Can I switch plans after I start?",
    a: "Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you'll only pay the difference. If you downgrade, the remaining balance will be credited to your account.",
  },
  {
    q: "What does the score guarantee cover?",
    a: "Our score guarantee applies to Standard plans and above. If you complete your full program and don't reach your target score, you receive a full refund. Specific guarantees vary by test and plan tier.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Absolutely. We offer interest-free monthly payment plans on all programs. You can split your tuition into 3, 6, or 12 monthly installments with no added fees.",
  },
  {
    q: "Are there discounts for siblings?",
    a: "Yes, we offer a 15% sibling discount when two or more students from the same family enroll. Contact us for details.",
  },
  {
    q: "What if I need to pause my program?",
    a: "Life happens. You can pause your program for up to 30 days at no charge. Simply let your tutor or our support team know in advance.",
  },
  {
    q: "Is the diagnostic test really free?",
    a: "Yes, 100%. The diagnostic is completely free with no credit card required and no obligation to purchase a plan. It's our way of showing you the Catalyst difference.",
  },
];

type TestKey = keyof typeof testTiers;

export default function PricingPage() {
  const [activeTest, setActiveTest] = useState<TestKey>("SAT");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs: TestKey[] = ["SAT", "ACT", "PSAT", "AP"];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Transparent Pricing for Every Learner
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            No hidden fees. No surprise charges. Choose the plan that fits your
            goals, budget, and timeline.
          </p>
        </div>
      </section>

      {/* Test Tabs + 4-Tier Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTest(tab)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
                  activeTest === tab
                    ? "bg-green-primary text-white"
                    : "bg-gray-100 text-heading hover:bg-gray-200"
                }`}
              >
                {tab} Prep
              </button>
            ))}
          </div>

          {/* Tier Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testTiers[activeTest].map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl p-6 shadow-sm ${
                  tier.popular
                    ? "border-2 border-green-primary bg-white"
                    : "border border-gray-100 bg-white"
                }`}
              >
                {tier.popular && (
                  <div className="mb-3 self-start rounded-full bg-green-primary px-3 py-0.5 text-xs font-bold uppercase text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-heading">{tier.name}</h3>
                <p className="mb-2 text-sm text-body">{tier.sessions}</p>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-heading">
                    {tier.price}
                  </span>
                </div>
                <ul className="mb-6 flex-1 space-y-2 text-sm text-body">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-green-primary">
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/book-diagnostic"
                  className={`block rounded-lg px-4 py-3 text-center font-bold transition-colors ${
                    tier.popular
                      ? "bg-green-primary text-white hover:bg-green-dark"
                      : "border border-green-primary text-green-primary hover:bg-green-light"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1:1 Classes Pricing */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading">
            1:1 Classes Pricing
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-body">
            All 1:1 plans include a dedicated tutor, personalised curriculum,
            AI-powered analytics, and flexible scheduling.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { hours: "10 Hours", price: "$149/hr", total: "$1,490" },
              {
                hours: "20 Hours",
                price: "$139/hr",
                total: "$2,780",
                popular: true,
              },
              { hours: "40 Hours", price: "$125/hr", total: "$5,000" },
              { hours: "60+ Hours", price: "$110/hr", total: "Custom" },
            ].map((pkg) => (
              <div
                key={pkg.hours}
                className={`rounded-2xl p-6 text-center shadow-sm ${
                  pkg.popular
                    ? "border-2 border-green-primary bg-white"
                    : "border border-gray-100 bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="mb-3 inline-block rounded-full bg-green-primary px-3 py-0.5 text-xs font-bold uppercase text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-1 text-lg font-bold text-heading">
                  {pkg.hours}
                </h3>
                <div className="mb-1 text-3xl font-bold text-heading">
                  {pkg.price}
                </div>
                <p className="mb-4 text-sm text-body">Total: {pkg.total}</p>
                <a
                  href="/book-diagnostic"
                  className={`block rounded-lg px-4 py-3 font-bold transition-colors ${
                    pkg.popular
                      ? "bg-green-primary text-white hover:bg-green-dark"
                      : "border border-green-primary text-green-primary hover:bg-green-light"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Paced Pricing */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading">
            Self-Paced Pricing
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-body">
            Access our full library of video lessons, practice tests, and AI
            analytics&mdash;no tutor required.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Monthly",
                price: "$49",
                period: "/month",
                features: [
                  "Full video library",
                  "Unlimited practice tests",
                  "AI analytics dashboard",
                  "Community forum",
                ],
              },
              {
                name: "3-Month",
                price: "$129",
                period: "/3 months",
                popular: true,
                features: [
                  "Everything in Monthly",
                  "Priority support",
                  "Score guarantee",
                  "Downloadable guides",
                ],
              },
              {
                name: "6-Month",
                price: "$199",
                period: "/6 months",
                features: [
                  "Everything in 3-Month",
                  "2 x 1:1 strategy sessions",
                  "Parent reports",
                  "College admissions tips",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 text-center shadow-sm ${
                  plan.popular
                    ? "border-2 border-green-primary bg-white"
                    : "border border-gray-100 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="mb-3 inline-block rounded-full bg-green-primary px-3 py-0.5 text-xs font-bold uppercase text-white">
                    Best Value
                  </div>
                )}
                <h3 className="mb-1 text-lg font-bold text-heading">
                  {plan.name}
                </h3>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-heading">
                    {plan.price}
                  </span>
                  <span className="text-body">{plan.period}</span>
                </div>
                <ul className="mb-6 space-y-2 text-left text-sm text-body">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-green-primary">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/book-diagnostic"
                  className={`block rounded-lg px-4 py-3 font-bold transition-colors ${
                    plan.popular
                      ? "bg-green-primary text-white hover:bg-green-dark"
                      : "border border-green-primary text-green-primary hover:bg-green-light"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-heading">
            Pricing FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-heading"
                >
                  {faq.q}
                  <span className="ml-4 shrink-0 text-xl text-green-primary">
                    {openFaq === i ? "\u2212" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-body">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Not Sure Which Plan Is Right?
          </h2>
          <p className="mb-8 text-gray-300">
            Start with a free diagnostic test. We&rsquo;ll recommend the perfect
            plan based on your goals, timeline, and budget.
          </p>
          <a
            href="/book-diagnostic"
            className="inline-block rounded-lg bg-green-primary px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-green-dark"
          >
            Book Your Free Diagnostic &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
