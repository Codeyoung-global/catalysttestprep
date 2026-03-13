export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$1,899",
      sessions: "20 sessions",
      features: [
        "1-on-1 live tutoring",
        "Diagnostic assessment",
        "Personalized study plan",
        "Progress tracking dashboard",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "$2,499",
      sessions: "40 sessions",
      features: [
        "Everything in Starter",
        "AI-powered practice sets",
        "Weekly progress reports",
        "Parent check-in calls",
        "Priority scheduling",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$3,049",
      sessions: "60 sessions",
      features: [
        "Everything in Standard",
        "Extended session length",
        "Bonus practice materials",
        "College application guidance",
        "Dedicated advisor",
      ],
      highlighted: false,
    },
    {
      name: "Elite",
      price: "$3,599",
      sessions: "80 sessions",
      features: [
        "Everything in Premium",
        "Unlimited practice tests",
        "Essay review & feedback",
        "Score improvement guarantee",
        "24/7 tutor access",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-surface-dark" style={{ padding: "var(--section-gap) 0" }} id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          Choose Your SAT Prep Plan
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
          Flexible plans designed to fit your timeline, budget, and score goals.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl p-6 ${
                plan.highlighted
                  ? "scale-105 border-2 border-green-400 bg-white/10 shadow-xl"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-primary px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-bold text-white md:text-xl">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{plan.sessions}</p>
              <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-gray-300 md:text-base">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#hero-form"
                className={`mt-6 block rounded-lg py-3 text-center text-sm font-bold transition-colors ${
                  plan.highlighted
                    ? "bg-green-primary text-white hover:bg-green-dark"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Start My Free SAT Prep Trial &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
