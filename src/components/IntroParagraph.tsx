export default function IntroParagraph() {
  return (
    <section className="bg-white" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="animate-fade-in-up mb-6 text-2xl font-bold text-heading md:text-3xl">
          Your Score Leap Starts Here
        </h2>
        <p className="animate-fade-in-up delay-100 text-base leading-relaxed text-body md:text-lg">
          Catalyst Test Prep matches every student with a dedicated, Ivy-level tutor and a
          smart AI-powered curriculum that adapts to <em>you</em>. Our structured diagnostic
          approach pinpoints your exact strengths and growth areas — so every session moves
          the needle. And yes, we put our money where our mouth is:
        </p>
        <div className="animate-scale-in delay-300 mt-8 inline-flex items-center gap-3 rounded-full bg-green-light px-6 py-3">
          <span className="text-2xl">🎯</span>
          <span className="text-base font-bold text-green-primary md:text-lg">
            1400+ SAT or 150+ point boost — guaranteed, or your money back
          </span>
        </div>
      </div>
    </section>
  );
}
