import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studentImages } from "@/data/images";

export const metadata = {
  title: "1:1 Personalised Classes | Catalyst Test Prep",
  description:
    "Get one-on-one test prep tutoring with Ivy-League-educated mentors. Fully personalised SAT, ACT, PSAT, and AP preparation tailored to your goals.",
};

export default function PersonalisedClassesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-surface-dark py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={studentImages.tutoringSession}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                1:1 Personalised Classes
              </h1>
              <p className="max-w-2xl text-lg text-gray-300">
                The most effective way to prepare. Your own dedicated tutor builds a
                custom curriculum around your strengths, weaknesses, and target
                score - so every session moves you closer to your goal.
              </p>
            </div>
            <div className="hidden overflow-hidden rounded-2xl shadow-2xl md:block">
              <Image
                src={studentImages.onlineLearning}
                alt="Student in a personalized online tutoring session"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading">
            How It Works
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            Four simple steps from your first diagnostic to your dream score.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Free Diagnostic",
                desc: "Take a full-length diagnostic test so we can identify your exact starting point and key areas for improvement.",
              },
              {
                step: "2",
                title: "Custom Study Plan",
                desc: "Your tutor creates a personalised week-by-week plan targeting the topics that will have the biggest impact on your score.",
              },
              {
                step: "3",
                title: "1:1 Live Sessions",
                desc: "Meet with your tutor for live online sessions focused on concept mastery, test strategy, and timed practice.",
              },
              {
                step: "4",
                title: "Track & Adapt",
                desc: "AI analytics track your progress in real-time. Your plan adapts continuously so you never waste time on what you already know.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-primary text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-heading">
            Benefits of 1:1 Learning
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Undivided Attention",
                desc: "Your tutor focuses entirely on you. No waiting, no falling behind, no distractions.",
              },
              {
                title: "Customised Pace",
                desc: "Move faster through topics you grasp quickly and spend more time where it matters most.",
              },
              {
                title: "Flexible Scheduling",
                desc: "Book sessions when it suits you - evenings, weekends, or between activities.",
              },
              {
                title: "Accountability Partner",
                desc: "Your tutor keeps you on track with regular check-ins, homework, and progress reviews.",
              },
              {
                title: "Test-Day Strategies",
                desc: "Learn time management, question-skipping tactics, and stress-reduction techniques.",
              },
              {
                title: "Score Guarantee",
                desc: "We stand behind our results. If you don't hit your target, you get your money back.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-heading">
                  {benefit.title}
                </h3>
                <p className="text-sm text-body">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-heading">
            What&rsquo;s Included
          </h2>
          <div className="rounded-2xl bg-green-light p-8 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Full-length diagnostic assessment",
                "Personalised study plan",
                "Live 1:1 sessions with an expert tutor",
                "AI-powered progress tracking dashboard",
                "Unlimited practice tests",
                "Custom homework assignments",
                "Score prediction analytics",
                "Direct messaging with your tutor",
                "Session recordings for review",
                "Parent progress reports",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="font-bold text-green-primary">
                    &#10003;
                  </span>
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={studentImages.happyStudents}
                alt="Happy students celebrating their success"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <svg
                className="mx-auto mb-4 h-10 w-10 text-green-primary opacity-40 md:mx-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <blockquote className="mb-6 text-xl italic text-heading md:text-2xl">
                &ldquo;My tutor knew exactly where I was struggling before I even
                said a word. In 10 weeks my SAT score went from 1180 to 1460.
                Catalyst didn&rsquo;t just raise my score - it changed how I
                approach learning.&rdquo;
              </blockquote>
              <p className="font-semibold text-heading">Priya S.</p>
              <p className="text-sm text-body">
                SAT Score: 1180 &rarr; 1460 &middot; Admitted to UCLA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Start With a Free Diagnostic
          </h2>
          <p className="mb-8 text-gray-300">
            See where you stand and get a custom plan to reach your target
            score - all for free.
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
