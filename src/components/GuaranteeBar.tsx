export default function GuaranteeBar() {
  return (
    <section className="bg-surface-dark" style={{ padding: "32px 0" }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-center md:gap-6">
        <svg className="h-10 w-10 shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <p className="text-center text-xl font-bold text-white md:text-2xl">
          Score 1400+ in SAT or Add 150 Points - Guaranteed, or Your Money Back
        </p>
        <a href="#faq" className="text-sm font-medium text-green-400 underline hover:text-green-300 transition-colors">
          Learn more
        </a>
      </div>
    </section>
  );
}
