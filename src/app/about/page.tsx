"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUpNumber from "@/components/CountUpNumber";
import { studentImages } from "@/data/images";

const values = [
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: "Student First",
    desc: "Every decision starts with one question: does this help our students succeed?",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Data-Driven",
    desc: "We use analytics and AI to ensure every study hour counts toward real score gains.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Mentorship",
    desc: "Our tutors are mentors first. They build confidence alongside competence.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .982-3.172M8.25 8.75a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
      </svg>
    ),
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in teaching, technology, and results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-surface-dark py-20 text-center md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={studentImages.studentSuccess}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              About Catalyst Test Prep
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150}>
            <p className="text-base text-gray-300 sm:text-lg md:text-xl">
              We believe every student deserves a personalized path to their dream
              score. Our expert tutors and AI-powered tools make it possible.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-6 text-3xl font-bold text-heading">Our Mission</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-base leading-relaxed text-body sm:text-lg">
              At Catalyst Test Prep, our mission is to democratize access to
              world-class test preparation. We combine the expertise of
              Ivy-League-educated tutors with cutting-edge AI technology to
              deliver a truly personalized learning experience - one that
              adapts to each student&rsquo;s unique strengths, weaknesses, and
              goals. We don&rsquo;t just teach to the test; we build the
              critical thinking skills students need to excel in college and
              beyond.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-8 text-center text-3xl font-bold text-heading">
              Our Story
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <AnimateOnScroll animation="slide-left">
              <div>
                <p className="mb-4 text-body">
                  Catalyst Test Prep was founded by a group of passionate
                  educators who saw a gap in the test-prep industry. Traditional
                  group classes moved too fast for some students and too slow for
                  others. Generic study plans wasted valuable time on concepts
                  students had already mastered.
                </p>
                <p className="mb-4 text-body">
                  We set out to build something better - a platform where
                  every lesson is tailored to the individual, every practice
                  problem is selected with purpose, and every student is
                  supported by a mentor who genuinely cares about their success.
                </p>
                <p className="text-body">
                  What started as a small tutoring service has grown into a
                  comprehensive test-prep platform serving hundreds of students
                  nationwide. But our core philosophy has never changed: meet
                  students where they are, and take them where they want to go.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-right">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={studentImages.aboutCollaboration}
                  alt="Students collaborating in a bright study environment"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-2xl bg-green-light p-6">
                <h3 className="mb-3 text-lg font-bold text-heading">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-2 text-sm text-body">
                  {[
                    "AI-powered diagnostic and adaptive learning",
                    "1:1 sessions with expert tutors",
                    "Score improvement guarantee or money back",
                    "Flexible scheduling that fits your life",
                    "Holistic approach - skills, strategy & confidence",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 text-center text-3xl font-bold text-heading">
              Meet Our Founders
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-body">
              The visionaries behind Catalyst Test Prep, driven by a shared passion for transforming education.
            </p>
          </AnimateOnScroll>
          <div className="grid gap-10 md:grid-cols-2">
            <AnimateOnScroll animation="slide-left" delay={100}>
              <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-light">
                  <span className="text-3xl font-bold text-green-primary">RT</span>
                </div>
                <h3 className="text-xl font-bold text-heading">Rupika Taneja</h3>
                <p className="mt-1 text-sm font-semibold text-green-primary">Co-Founder &amp; COO</p>
                <p className="mt-1 text-sm text-caption">IIT Delhi Alumna</p>
                <p className="mt-4 text-sm leading-relaxed text-body">
                  Rupika is a passionate advocate for nurturing creativity and potential in every student. With her background in engineering from IIT Delhi and deep experience in ed-tech, she leads operations at Catalyst Test Prep with a student-first mindset. She believes that when innate talent is properly guided, students don&rsquo;t just improve scores - they become confident, independent learners ready to take on the world.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slide-right" delay={100}>
              <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-light">
                  <span className="text-3xl font-bold text-green-primary">SD</span>
                </div>
                <h3 className="text-xl font-bold text-heading">Shailendra Dhakad</h3>
                <p className="mt-1 text-sm font-semibold text-green-primary">Co-Founder &amp; CEO</p>
                <p className="mt-1 text-sm text-caption">IIT Delhi Alumnus</p>
                <p className="mt-4 text-sm leading-relaxed text-body">
                  Shailendra envisions education as a transformative force that empowers students to achieve what they once thought impossible. An IIT Delhi graduate with a deep understanding of technology and learning systems, he drives the vision and strategy at Catalyst Test Prep. His focus on data-driven, personalized learning ensures that every student receives the targeted support they need to reach their dream score.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 text-center text-3xl font-bold text-heading">
              Our Values
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-body">
              These principles guide everything we do - from how we hire
              tutors to how we design our curriculum.
            </p>
          </AnimateOnScroll>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} animation="fade-up" delay={i * 100}>
                <div className="hover-lift flex h-full flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-light">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-heading">
                    {value.title}
                  </h3>
                  <p className="text-sm text-body">{value.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-dark py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Our Impact in Numbers
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {[
              { end: 500, suffix: "+", label: "Students Helped" },
              { end: 200, suffix: "+", label: "Avg Score Improvement" },
              { end: 50, suffix: "+", label: "Expert Mentors" },
              { end: 98, suffix: "%", label: "Student Satisfaction" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.label} animation="scale-in" delay={i * 100}>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-green-primary sm:text-4xl md:text-5xl">
                    <CountUpNumber end={item.end} suffix={item.suffix} />
                  </div>
                  <div className="text-sm text-gray-300 md:text-base">
                    {item.label}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 text-3xl font-bold text-heading">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-base text-body sm:text-lg">
              Take our free diagnostic test and get a personalized study plan
              designed just for you.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale-in" delay={200}>
            <a
              href="/book-diagnostic"
              className="inline-block rounded-lg bg-green-primary px-10 py-4 text-lg font-bold text-white transition-all hover:bg-green-dark hover:shadow-lg"
            >
              Book Your Free Diagnostic &rarr;
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
