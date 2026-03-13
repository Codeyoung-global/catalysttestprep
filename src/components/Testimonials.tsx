export default function Testimonials() {
  const testimonials = [
    {
      name: "Navnit Ganavaram",
      before: 1180,
      after: 1420,
      improvement: 240,
      stars: 5,
      text: "Catalyst completely changed my approach to the SAT. My tutor identified my weak areas immediately and built a study plan around them. I never thought I could break 1400!",
    },
    {
      name: "Nitin Gupta",
      before: 1200,
      after: 1480,
      improvement: 280,
      stars: 5,
      text: "The personalized attention and AI-powered practice made all the difference. My tutor was from an Ivy League school and knew exactly how to push me to improve.",
    },
    {
      name: "Ayush K.",
      before: 1100,
      after: 1380,
      improvement: 280,
      stars: 5,
      text: "I tried group prep classes before and barely improved. With Catalyst, the 1-on-1 sessions focused on exactly what I needed. The results speak for themselves.",
    },
    {
      name: "Eliot B.",
      before: 1250,
      after: 1510,
      improvement: 260,
      stars: 5,
      text: "My tutor was incredibly knowledgeable and patient. The diagnostic test at the start gave us a clear roadmap. I exceeded my target score by 30 points!",
    },
  ];

  return (
    <section className="bg-white" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
          SAT Score Improvements from Real Students
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body">
          Our students consistently achieve remarkable score improvements with personalized 1-on-1 SAT prep.
        </p>

        {/* Testimonial Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              {/* Score Improvement — Most Prominent */}
              <div className="mb-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-body">
                  <span>{t.before}</span>
                  <span className="text-caption">&rarr;</span>
                  <span>{t.after}</span>
                </div>
                <p className="mt-1 text-2xl font-bold text-green-primary">+{t.improvement} points</p>
              </div>

              {/* Stars */}
              <div className="mb-3 flex justify-center gap-0.5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg key={si} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-body">&ldquo;{t.text}&rdquo;</p>

              {/* Name */}
              <p className="text-sm font-semibold text-heading">{t.name}</p>
            </div>
          ))}
        </div>

        {/* Score Ticker Strip — merged from "Trusted by Ivy Leaguers" */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {[
            { name: "Priya S.", score: "+220" },
            { name: "Marcus L.", score: "+195" },
            { name: "Sana R.", score: "+260" },
            { name: "James T.", score: "+180" },
            { name: "Anika P.", score: "+210" },
          ].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full bg-green-light px-4 py-2 text-sm"
            >
              <span className="font-medium text-heading">{s.name}</span>
              <span className="font-bold text-green-primary">{s.score}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
