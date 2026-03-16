import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Self-Paced Learning | Catalyst Test Prep",
  description:
    "Prepare for the SAT, ACT, PSAT, and AP exams on your own schedule with video lessons, practice tests, and AI-powered analytics.",
};

export default function SelfPacedClassesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Self-Paced Learning
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Study on your schedule with our comprehensive library of video
            lessons, full-length practice tests, and AI-powered analytics that
            adapt to your performance - all at a fraction of the cost of
            private tutoring.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading">
            What&rsquo;s Included
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            Everything you need to prep effectively on your own terms.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Video Lessons */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-light text-2xl">
                &#127909;
              </div>
              <h3 className="mb-2 text-xl font-bold text-heading">
                Video Lessons
              </h3>
              <p className="mb-4 text-body">
                200+ expert-recorded lessons covering every concept and question
                type on the SAT, ACT, PSAT, and AP exams.
              </p>
              <ul className="space-y-2 text-sm text-body">
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Bite-sized
                  10-15 minute modules
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Taught by
                  99th-percentile scorers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Concept
                  explanations + worked examples
                </li>
              </ul>
            </div>

            {/* Practice Tests */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-light text-2xl">
                &#128221;
              </div>
              <h3 className="mb-2 text-xl font-bold text-heading">
                Practice Tests
              </h3>
              <p className="mb-4 text-body">
                Unlimited full-length, timed practice tests that replicate the
                real exam experience down to the last detail.
              </p>
              <ul className="space-y-2 text-sm text-body">
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Realistic
                  testing interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Instant
                  scoring &amp; detailed explanations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Section
                  &amp; topic-level breakdowns
                </li>
              </ul>
            </div>

            {/* AI Analytics */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-light text-2xl">
                &#129302;
              </div>
              <h3 className="mb-2 text-xl font-bold text-heading">
                AI-Powered Analytics
              </h3>
              <p className="mb-4 text-body">
                Our AI engine tracks your performance across every question and
                adapts your study plan in real-time.
              </p>
              <ul className="space-y-2 text-sm text-body">
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Smart
                  weakness detection
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Predicted
                  score tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-primary">&#10003;</span> Adaptive
                  practice recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading">
            Self-Paced Pricing
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            Affordable plans designed to give you maximum value.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Monthly",
                price: "$49",
                period: "/month",
                features: [
                  "Full video library access",
                  "Unlimited practice tests",
                  "AI analytics dashboard",
                  "Community forum access",
                ],
                cta: "Start Monthly",
                highlighted: false,
              },
              {
                name: "3-Month",
                price: "$129",
                period: "/3 months",
                features: [
                  "Everything in Monthly",
                  "Priority support",
                  "Score improvement guarantee",
                  "Downloadable study guides",
                ],
                cta: "Best Value",
                highlighted: true,
              },
              {
                name: "6-Month",
                price: "$199",
                period: "/6 months",
                features: [
                  "Everything in 3-Month",
                  "2 x 1:1 strategy sessions",
                  "Parent progress reports",
                  "College admissions tips",
                ],
                cta: "Go All In",
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 text-center shadow-sm ${
                  plan.highlighted
                    ? "border-2 border-green-primary bg-white"
                    : "border border-gray-100 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block rounded-full bg-green-primary px-4 py-1 text-xs font-bold uppercase text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-1 text-xl font-bold text-heading">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-heading">
                    {plan.price}
                  </span>
                  <span className="text-body">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3 text-left text-sm text-body">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-green-primary">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/book-diagnostic"
                  className={`block rounded-lg px-6 py-3 font-bold transition-colors ${
                    plan.highlighted
                      ? "bg-green-primary text-white hover:bg-green-dark"
                      : "border border-green-primary text-green-primary hover:bg-green-light"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-heading">
            Self-Paced vs 1:1 Classes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-heading">Feature</th>
                  <th className="px-4 py-4 text-center text-heading">
                    Self-Paced
                  </th>
                  <th className="px-4 py-4 text-center text-heading">
                    1:1 Classes
                  </th>
                </tr>
              </thead>
              <tbody className="text-body">
                {[
                  ["Video Lessons", true, true],
                  ["Practice Tests", true, true],
                  ["AI Analytics", true, true],
                  ["Dedicated Tutor", false, true],
                  ["Live Sessions", false, true],
                  ["Custom Homework", false, true],
                  ["Session Recordings", false, true],
                  ["Flexible Scheduling", true, true],
                  ["Score Guarantee", "3-month+ plans", true],
                  ["Starting Price", "$49/mo", "$149/mo"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-medium">{row[0]}</td>
                    <td className="px-4 py-3 text-center">
                      {row[1] === true ? (
                        <span className="text-green-primary">&#10003;</span>
                      ) : row[1] === false ? (
                        <span className="text-gray-300">&mdash;</span>
                      ) : (
                        <span className="text-xs">{row[1]}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row[2] === true ? (
                        <span className="text-green-primary">&#10003;</span>
                      ) : row[2] === false ? (
                        <span className="text-gray-300">&mdash;</span>
                      ) : (
                        <span className="text-xs">{row[2]}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-body">
            Not sure which is right for you?{" "}
            <a href="/book-diagnostic" className="font-semibold text-green-primary underline">
              Take a free diagnostic
            </a>{" "}
            and we&rsquo;ll recommend the best path.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Start Learning at Your Own Pace
          </h2>
          <p className="mb-8 text-gray-300">
            Begin with a free diagnostic to find out exactly where to focus your
            study time.
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
