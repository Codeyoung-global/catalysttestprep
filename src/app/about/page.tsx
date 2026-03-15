import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Catalyst Test Prep",
  description:
    "Learn about Catalyst Test Prep's mission, story, and the team dedicated to helping students achieve their best test scores.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-dark py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About Catalyst Test Prep
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            We believe every student deserves a personalized path to their dream
            score. Our expert tutors and AI-powered tools make it possible.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-heading">Our Mission</h2>
          <p className="text-lg leading-relaxed text-body">
            At Catalyst Test Prep, our mission is to democratize access to
            world-class test preparation. We combine the expertise of
            Ivy-League-educated tutors with cutting-edge AI technology to
            deliver a truly personalized learning experience&mdash;one that
            adapts to each student&rsquo;s unique strengths, weaknesses, and
            goals. We don&rsquo;t just teach to the test; we build the
            critical thinking skills students need to excel in college and
            beyond.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-bg-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-heading">
            Our Story
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-body">
                Catalyst Test Prep was founded by a group of passionate
                educators who saw a gap in the test-prep industry. Traditional
                group classes moved too fast for some students and too slow for
                others. Generic study plans wasted valuable time on concepts
                students had already mastered.
              </p>
              <p className="mb-4 text-body">
                We set out to build something better&mdash;a platform where
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
            <div className="rounded-2xl bg-green-light p-8">
              <h3 className="mb-4 text-xl font-bold text-heading">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3 text-body">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-primary">&#10003;</span>
                  AI-powered diagnostic and adaptive learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-primary">&#10003;</span>
                  1:1 sessions with 99th-percentile tutors
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-primary">&#10003;</span>
                  Score improvement guarantee or money back
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-primary">&#10003;</span>
                  Flexible scheduling that fits your life
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-primary">&#10003;</span>
                  Holistic approach&mdash;skills, strategy &amp; confidence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-heading">
            Our Values
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-body">
            These principles guide everything we do&mdash;from how we hire
            tutors to how we design our curriculum.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🎯",
                title: "Student First",
                desc: "Every decision starts with one question: does this help our students succeed?",
              },
              {
                icon: "🔬",
                title: "Data-Driven",
                desc: "We use analytics and AI to ensure every study hour counts toward real score gains.",
              },
              {
                icon: "🤝",
                title: "Mentorship",
                desc: "Our tutors are mentors first. They build confidence alongside competence.",
              },
              {
                icon: "🏆",
                title: "Excellence",
                desc: "We hold ourselves to the highest standards in teaching, technology, and results.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-3 text-4xl">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-heading">
                  {value.title}
                </h3>
                <p className="text-sm text-body">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-dark py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { stat: "500+", label: "Students Helped" },
              { stat: "200+", label: "Avg Score Improvement" },
              { stat: "50+", label: "Expert Mentors" },
              { stat: "98%", label: "Student Satisfaction" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-green-primary md:text-5xl">
                  {item.stat}
                </div>
                <div className="text-sm text-gray-300 md:text-base">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-heading">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-lg text-body">
            Take our free diagnostic test and get a personalized study plan
            designed just for you.
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
