"use client";
import { useState, useRef } from "react";
import Link from "next/link";

interface Tutor {
    id: string;
    name: string;
    subject: string;
    university: string;
    satScore: string;
    experience: string;
    bio: string;
    rating: number;
    reviewCount: number;
    studentCount: number;
    videoUrl: string;
    initials: string;
    bgColor: string;
    reviews: { author: string; text: string; rating: number }[];
}

const tutors: Tutor[] = [
  {
        id: "sarah-mitchell",
        name: "Sarah Mitchell",
        subject: "SAT Math",
        university: "Harvard University",
        satScore: "1580 SAT",
        experience: "6 years",
        bio: "Harvard Math grad who has helped 200+ students crack the 1500 barrier. Specialises in turning abstract algebra and geometry into simple, repeatable strategies.",
        rating: 4.9,
        reviewCount: 142,
        studentCount: 218,
        videoUrl: "",
        initials: "SM",
        bgColor: "#e8f5e9",
        reviews: [
          { author: "Aiden K.", text: "Sarah's method for tackling grid-in questions was a game-changer. Went from 620 to 760 in math!", rating: 5 },
          { author: "Priya R.", text: "Super patient and explains every step. Highly recommend for anyone struggling with the math section.", rating: 5 },
          { author: "Tom W.", text: "Got a 1530 after 8 sessions — couldn't have done it without her.", rating: 5 },
              ],
  },
  {
        id: "david-chen",
        name: "David Chen",
        subject: "SAT Reading & Writing",
        university: "Yale University",
        satScore: "1560 SAT",
        experience: "5 years",
        bio: "Yale CS grad with a knack for evidence-based reading. David's systematic approach to passage analysis has helped hundreds of students dramatically improve their verbal scores.",
        rating: 4.8,
        reviewCount: 118,
        studentCount: 196,
        videoUrl: "",
        initials: "DC",
        bgColor: "#e3f2fd",
        reviews: [
          { author: "Mei L.", text: "David's passage annotation technique is incredible. Improved my Reading score by 80 points.", rating: 5 },
          { author: "James O.", text: "Very methodical and clear. I finally understood how to eliminate wrong answers.", rating: 5 },
          { author: "Sofia B.", text: "Went from 630 to 710 on Evidence-Based Reading. David is the best!", rating: 5 },
              ],
  },
  {
        id: "priya-sharma",
        name: "Priya Sharma",
        subject: "SAT Writing",
        university: "Princeton University",
        satScore: "1570 SAT",
        experience: "7 years",
        bio: "Princeton Literature grad and grammar expert. Priya breaks down complex writing rules into easy-to-remember frameworks that students apply with confidence on test day.",
        rating: 4.9,
        reviewCount: 163,
        studentCount: 241,
        videoUrl: "",
        initials: "PS",
        bgColor: "#fce4ec",
        reviews: [
          { author: "Lucas M.", text: "Priya's grammar cheat sheet alone was worth every session. My writing score jumped 90 points.", rating: 5 },
          { author: "Chloe A.", text: "She makes grammar rules actually make sense. I stopped guessing and started knowing.", rating: 5 },
          { author: "Rohan S.", text: "Brilliant tutor. Very structured and always knows exactly what each student needs.", rating: 5 },
              ],
  },
  {
        id: "michael-torres",
        name: "Michael Torres",
        subject: "Full SAT",
        university: "Columbia University",
        satScore: "1550 SAT",
        experience: "8 years",
        bio: "Columbia M.Ed with 8 years of full-SAT coaching experience. Michael builds personalised study plans based on diagnostic data and has an unmatched track record for score improvement.",
        rating: 4.9,
        reviewCount: 187,
        studentCount: 302,
        videoUrl: "",
        initials: "MT",
        bgColor: "#fff8e1",
        reviews: [
          { author: "Nina P.", text: "Michael diagnosed my weak spots in the first session and built a plan that actually worked. 1490 on my first real test!", rating: 5 },
          { author: "Ethan H.", text: "The most prepared and organised tutor I've ever had. Worth every penny.", rating: 5 },
          { author: "Ava C.", text: "Scored 1510 after 12 sessions. Michael is a legend.", rating: 5 },
              ],
  },
  {
        id: "jessica-park",
        name: "Jessica Park",
        subject: "SAT Math",
        university: "MIT",
        satScore: "1590 SAT",
        experience: "4 years",
        bio: "MIT Mathematics graduate and competitive math olympiad coach. Jessica's precision and speed strategies help students tackle the hardest SAT questions with confidence.",
        rating: 5.0,
        reviewCount: 89,
        studentCount: 134,
        videoUrl: "",
        initials: "JP",
        bgColor: "#f3e5f5",
        reviews: [
          { author: "Ben T.", text: "Jessica is a genius. I didn't think I could ever solve those hard math problems, but now I can.", rating: 5 },
          { author: "Sara N.", text: "Her speed tricks for multiple choice are incredible. Saved so much time on the test.", rating: 5 },
          { author: "Omar F.", text: "Perfect score on math section — couldn't have done it without her.", rating: 5 },
              ],
  },
  ];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
    const cls = size === "lg" ? "h-5 w-5" : "h-4 w-4";
    return (
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className={`${cls} ${s <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
          </div>
        );
}

export default function MeetTutors() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
  
    const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
    const next = () => setActiveIndex((i) => Math.min(tutors.length - 1, i + 1));
  
    const activeTutor = tutors[activeIndex];
  
    return (
          <section className="bg-white py-20" id="tutors">
                <div className="mx-auto max-w-7xl px-6">
                  {/* Header */}
                        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                                  <div>
                                              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-green-primary">Our Educators</p>
                                              <h2 className="text-3xl font-bold text-heading md:text-4xl">Meet Our Expert Tutors</h2>
                                              <p className="mt-2 max-w-xl text-body">
                                                            Ivy-League graduates and 99th-percentile scorers dedicated to helping you reach your target score.
                                              </p>
                                  </div>
                                  <Link href="#hero-form" className="shrink-0 rounded-lg bg-green-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-dark">
                                              Book a Free Trial &rarr;
                                  </Link>
                        </div>
                
                  {/* Slider Layout */}
                        <div className="relative">
                          {/* Tutor Cards Row */}
                                  <div ref={sliderRef} className="flex gap-4 overflow-hidden">
                                    {tutors.map((tutor, i) => {
                          const isActive = i === activeIndex;
                          return (
                                            <div
                                                                key={tutor.id}
                                                                onClick={() => setActiveIndex(i)}
                                                                className={`flex-shrink-0 cursor-pointer rounded-2xl border-2 p-5 transition-all duration-300 ${
                                                                                      isActive
                                                                                        ? "border-green-primary shadow-lg scale-[1.02]"
                                                                                        : "border-gray-200 hover:border-green-primary/50 hover:shadow-md"
                                                                }`}
                                                                style={{
                                                                                      width: "calc(25% - 12px)",
                                                                                      minWidth: "200px",
                                                                                      background: isActive ? tutor.bgColor : "#fff",
                                                                }}
                                                              >
                                              {/* Avatar */}
                                                              <div
                                                                                    className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-green-primary shadow-sm"
                                                                                    style={{ background: tutor.bgColor }}
                                                                                  >
                                                                {tutor.initials}
                                                              </div>
                                                              <h3 className="text-center text-base font-bold text-heading">{tutor.name}</h3>
                                                              <p className="mt-0.5 text-center text-xs font-semibold text-green-primary">{tutor.subject}</p>
                                                              <p className="mt-0.5 text-center text-xs text-caption">{tutor.university}</p>
                                                              <div className="mt-2 flex items-center justify-center gap-1">
                                                                                  <StarRating rating={tutor.rating} />
                                                                                  <span className="text-xs font-semibold text-heading">{tutor.rating}</span>
                                                              </div>
                                                              <p className="mt-1 text-center text-xs text-caption">{tutor.reviewCount} reviews</p>
                                            </div>
                                          );
          })}
                                  </div>
                        
                          {/* Nav Arrows */}
                                  <div className="mt-6 flex items-center justify-between">
                                              <div className="flex gap-2">
                                                            <button
                                                                              onClick={prev}
                                                                              disabled={activeIndex === 0}
                                                                              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all hover:border-green-primary hover:text-green-primary disabled:opacity-30"
                                                                            >
                                                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                                                            </svg>
                                                            </button>
                                                            <button
                                                                              onClick={next}
                                                                              disabled={activeIndex === tutors.length - 1}
                                                                              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all hover:border-green-primary hover:text-green-primary disabled:opacity-30"
                                                                            >
                                                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                                            </svg>
                                                            </button>
                                              </div>
                                    {/* Dot indicators */}
                                              <div className="flex gap-2">
                                                {tutors.map((_, i) => (
                            <button
                                                key={i}
                                                onClick={() => setActiveIndex(i)}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                                      i === activeIndex ? "w-6 bg-green-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                                                }`}
                                              />
                          ))}
                                              </div>
                                  </div>
                        </div>
                
                  {/* Active Tutor Detail Panel */}
                        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8" key={activeTutor.id}>
                                  <div className="flex flex-col gap-8 lg:flex-row">
                                    {/* Left: Video + Basic Info */}
                                              <div className="flex flex-col gap-5 lg:w-[340px] lg:shrink-0">
                                                {/* Video Placeholder */}
                                                            <div
                                                                              className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl"
                                                                              style={{ background: activeTutor.bgColor }}
                                                                            >
                                                                            <div className="flex flex-col items-center gap-2 text-center">
                                                                                              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-3xl font-bold text-green-primary shadow">
                                                                                                {activeTutor.initials}
                                                                                                </div>
                                                                                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-primary/90 text-white shadow-lg">
                                                                                                                  <svg className="h-5 w-5 translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                                                                                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                                                                                    </svg>
                                                                                                </div>
                                                                                              <p className="text-xs font-medium text-body">Intro video coming soon</p>
                                                                            </div>
                                                            </div>
                                              
                                                {/* Stats */}
                                                            <div className="grid grid-cols-3 gap-3 text-center">
                                                              {[
                              [activeTutor.satScore, "SAT Score"],
                              [activeTutor.experience, "Experience"],
                              [`${activeTutor.studentCount}+`, "Students"],
                            ].map(([val, lbl]) => (
                                                <div key={lbl} className="rounded-xl bg-bg-alt p-3">
                                                                    <p className="text-lg font-bold text-green-primary">{val}</p>
                                                                    <p className="text-xs text-caption">{lbl}</p>
                                                </div>
                                              ))}
                                                            </div>
                                              
                                                            <Link
                                                                              href={`/tutors/${activeTutor.id}`}
                                                                              className="w-full rounded-lg border-2 border-green-primary py-3 text-center text-sm font-bold text-green-primary transition-colors hover:bg-green-primary hover:text-white"
                                                                            >
                                                                            View Full Profile &rarr;
                                                            </Link>
                                                            <Link
                                                                              href="#hero-form"
                                                                              className="w-full rounded-lg bg-green-primary py-3 text-center text-sm font-bold text-white transition-colors hover:bg-green-dark"
                                                                            >
                                                                            Book a Free Trial with {activeTutor.name.split(" ")[0]} &rarr;
                                                            </Link>
                                              </div>
                                  
                                    {/* Right: Bio + Reviews */}
                                              <div className="flex flex-1 flex-col gap-6">
                                                            <div>
                                                                            <div className="mb-1 flex flex-wrap items-center gap-3">
                                                                                              <h3 className="text-2xl font-bold text-heading">{activeTutor.name}</h3>
                                                                                              <span className="rounded-full bg-green-light px-3 py-1 text-xs font-semibold text-green-primary">
                                                                                                {activeTutor.subject}
                                                                                                </span>
                                                                            </div>
                                                                            <p className="text-sm text-caption">{activeTutor.university}</p>
                                                                            <div className="mt-2 flex items-center gap-2">
                                                                                              <StarRating rating={activeTutor.rating} size="lg" />
                                                                                              <span className="font-bold text-heading">{activeTutor.rating}</span>
                                                                                              <span className="text-sm text-caption">({activeTutor.reviewCount} reviews)</span>
                                                                            </div>
                                                            </div>
                                              
                                                            <div>
                                                                            <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-caption">About</h4>
                                                                            <p className="text-body leading-relaxed">{activeTutor.bio}</p>
                                                            </div>
                                              
                                                {/* Student Reviews */}
                                                            <div>
                                                                            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-caption">Student Reviews</h4>
                                                                            <div className="flex flex-col gap-3">
                                                                              {activeTutor.reviews.map((review, i) => (
                                <div key={i} className="rounded-xl bg-bg-alt p-4">
                                                      <div className="mb-1 flex items-center justify-between">
                                                                              <span className="text-sm font-semibold text-heading">{review.author}</span>
                                                                              <StarRating rating={review.rating} />
                                                      </div>
                                                      <p className="text-sm text-body">{review.text}</p>
                                </div>
                              ))}
                                                                            </div>
                                                            </div>
                                              </div>
                                  </div>
                        </div>
                </div>
          </section>
        );
}
