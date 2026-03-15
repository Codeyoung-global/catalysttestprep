"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Navnit Ganavaram",
    before: 1180,
    after: 1420,
    stars: 5,
    text: "Catalyst completely changed my approach to the SAT. My tutor identified my weak areas immediately and built a study plan around them. I never thought I could break 1400!",
  },
  {
    name: "Nitin Gupta",
    before: 1200,
    after: 1480,
    stars: 5,
    text: "The personalized attention and AI-powered practice made all the difference. My tutor was from an Ivy League school and knew exactly how to push me to improve.",
  },
  {
    name: "Ayush K.",
    before: 1100,
    after: 1380,
    stars: 5,
    text: "I tried group prep classes before and barely improved. With Catalyst, the 1-on-1 sessions focused on exactly what I needed. The results speak for themselves.",
  },
  {
    name: "Eliot B.",
    before: 1250,
    after: 1510,
    stars: 5,
    text: "My tutor was incredibly knowledgeable and patient. The diagnostic test at the start gave us a clear roadmap. I exceeded my target score by 30 points!",
  },
  {
    name: "Priya Sharma",
    before: 1150,
    after: 1440,
    stars: 5,
    text: "The structured curriculum combined with flexible scheduling made it easy to balance SAT prep with my schoolwork. My reading score alone jumped 120 points.",
  },
  {
    name: "Marcus Lee",
    before: 1220,
    after: 1490,
    stars: 5,
    text: "I was skeptical about online tutoring, but the quality of instruction blew me away. My tutor broke down every concept until I truly understood it.",
  },
  {
    name: "Sana Rizvi",
    before: 1080,
    after: 1340,
    stars: 5,
    text: "Coming from a 1080, I didn't think a 1300+ was possible in three months. Catalyst proved me wrong. The practice tests were incredibly close to the real exam.",
  },
  {
    name: "James Torres",
    before: 1300,
    after: 1530,
    stars: 5,
    text: "Already had a decent score but needed that extra push for Ivy League admissions. My tutor focused on the advanced strategies that took me from good to great.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Number of visible cards depends on viewport — we manage via CSS
  // but the slide logic uses groups of 3 for desktop, 1 for mobile
  const totalSlides = testimonials.length;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isHovered]);

  // Get visible testimonials (3 for desktop, shown via CSS)
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % totalSlides]);
    }
    return items;
  };

  const visible = getVisibleTestimonials();

  return (
    <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
          What Our Students Say
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body">
          Hundreds of students have transformed their SAT scores with Catalyst. Here are some of their stories.
        </p>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev Arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-green-light md:-left-5"
          >
            <svg className="h-5 w-5 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4">
            <div className="flex transition-transform duration-500 ease-in-out gap-6">
              {/* Mobile: show 1 card, Desktop: show 3 cards */}
              {visible.map((t, i) => (
                <div
                  key={`${currentIndex}-${i}`}
                  className={`w-full shrink-0 ${
                    i === 0 ? "block" : "hidden md:block"
                  } md:w-[calc(33.333%-1rem)]`}
                >
                  <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    {/* Score Improvement */}
                    <div className="mb-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-sm text-body">
                        <span className="font-medium">{t.before}</span>
                        <span className="text-green-primary">&rarr;</span>
                        <span className="font-medium">{t.after}</span>
                      </div>
                      <p className="mt-1 text-2xl font-bold text-green-primary">
                        +{t.after - t.before} points
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="mb-3 flex justify-center gap-0.5">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <svg
                          key={si}
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-body">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Name */}
                    <p className="text-sm font-semibold text-heading">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-green-light md:-right-5"
          >
            <svg className="h-5 w-5 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-green-primary"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
