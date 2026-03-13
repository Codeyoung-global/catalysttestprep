export default function MeetTutors() {
  const tutors = [
    {
      name: "Sarah Mitchell",
      university: "Harvard University",
      degree: "B.A. in Mathematics",
      satScore: "1580 SAT",
      experience: "6 years tutoring",
      bio: "Specializes in helping students master the math section with intuitive problem-solving strategies.",
    },
    {
      name: "David Chen",
      university: "Yale University",
      degree: "B.S. in Computer Science",
      satScore: "1560 SAT",
      experience: "5 years tutoring",
      bio: "Expert in data analysis and evidence-based reading, helping students improve critical reasoning skills.",
    },
    {
      name: "Priya Sharma",
      university: "Princeton University",
      degree: "B.A. in English Literature",
      satScore: "1570 SAT",
      experience: "7 years tutoring",
      bio: "Focuses on reading comprehension and writing strategies that consistently raise verbal scores.",
    },
    {
      name: "Michael Torres",
      university: "Columbia University",
      degree: "M.Ed. in Education",
      satScore: "1550 SAT",
      experience: "8 years tutoring",
      bio: "Brings a research-backed teaching methodology and deep understanding of standardized test design.",
    },
  ];

  return (
    <section className="bg-bg-alt" style={{ padding: "var(--section-gap) 0" }} id="tutors">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-heading md:text-4xl">
          Meet Your SAT Prep Tutors
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body">
          Our tutors are graduates of top universities with proven track records of helping students achieve their target scores.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tutors.map((tutor, i) => (
            <div key={i} className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm">
              {/* Avatar Placeholder */}
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-light">
                <span className="text-2xl font-bold text-green-primary">
                  {tutor.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-heading">{tutor.name}</h3>
              <p className="mt-1 text-sm text-body">{tutor.university}</p>
              <p className="text-sm text-caption">{tutor.degree}</p>
              <p className="mt-2 text-base font-bold text-green-primary">{tutor.satScore}</p>
              <p className="text-sm text-caption">{tutor.experience}</p>
              <p className="mt-3 text-sm text-body">{tutor.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-sm font-semibold text-green-primary hover:text-green-dark transition-colors">
            View All Tutors &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
