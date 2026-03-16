export interface Mentor {
  id: string;
  name: string;
  profilePicture: string | null;
  university: string;
  degree: string;
  experience: number | null;
  bio: string;
  initials: string;
  languages: string[];
  classesTaken: number | null;
  studentsTaught: number | null;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const mentors: Mentor[] = [
  {
    id: slugify("Suman Chatterjee"),
    name: "Suman Chatterjee",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/K64FJEgQdA-4239.png",
    university: "Ramakrishna Mission Vivekananda Educational and Research Institute",
    degree: "Masters in Mathematics",
    experience: 2,
    bio: "Hi, I'm Suman Chatterjee, a SuperCertified Math Mentor at CodeYoung. I have 2+ years of experience teaching children through personalised 1:1 online sessions. I hold a Masters in Mathematics from Ramakrishna Mission Vivekananda Educational and Research Institute. I've taught 150+ students and conducted 750+ live classes, gaining extensive experience in live online teaching. I focus on making learning enjoyable and personalised, helping children grow in confidence and think independently.",
    initials: getInitials("Suman Chatterjee"),
    languages: ["English"],
    classesTaken: 750,
    studentsTaught: 150,
  },
  {
    id: slugify("Hina Shaikh"),
    name: "Hina Shaikh",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/C8-2ZYcuaz-4424.png",
    university: "Aditya Engineering College",
    degree: "B.E(E&TC), B.Ed",
    experience: 10,
    bio: "I focus on simplifying complex concepts, tailoring lessons to individual student needs & fostering a supportive learning environment to help students achieve their highest potential. My goal is to build confidence through effective teaching strategies.",
    initials: getInitials("Hina Shaikh"),
    languages: ["English", "Hindi"],
    classesTaken: 12071,
    studentsTaught: 5010,
  },
  {
    id: slugify("Nikunj Maheshwari"),
    name: "Nikunj Maheshwari",
    profilePicture: null,
    university: "Dr. PDKV, Akola",
    degree: "M.Tech",
    experience: 4,
    bio: "Passionate Physics Tutor, Tutor Trainer, Mentor, and Counsellor. Inspiring the Next Generation of Scientists, Doctors, Engineers, and many more. Tutoring students from US, UK, UAE, Australia, Saudi Arabia and India for 4 years.",
    initials: getInitials("Nikunj Maheshwari"),
    languages: ["English", "Hindi"],
    classesTaken: 6000,
    studentsTaught: 400,
  },
  {
    id: slugify("Darsana S"),
    name: "Darsana S",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/vjlwmAsz1y-4785.png",
    university: "Dr. Mahalingam College of Engineering and Technology",
    degree: "M.E Structural Engineering",
    experience: 6,
    bio: "Hi, I'm Darsana, a Certified Mathematics and Engineering Mentor with an M.E. in Structural Engineering from Dr. Mahalingam College of Engineering and Technology. I have 6 years of teaching experience and have guided 190+ students. I've conducted 2,700+ hours of live online classes. I provide tailored sessions in mathematics, aptitude, and analytical skills, helping students strengthen problem-solving abilities and succeed academically.",
    initials: getInitials("Darsana S"),
    languages: ["English", "Hindi", "Malayalam", "Tamil"],
    classesTaken: 1801,
    studentsTaught: 190,
  },
  {
    id: slugify("Zakaria Ali"),
    name: "Zakaria Ali",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/tQRLxQibkJ-5008.png",
    university: "College of Engineering, Trivandrum, Kerala, India",
    degree: "B.Tech in Electronics & Communication Engineering",
    experience: 13,
    bio: "Hi, I'm Zakaria Ali, a Testprep Mentor at CodeYoung. I have 13+ years of experience teaching children through personalised 1:1 online sessions. I hold a Bachelors Degree in Electronics & Communication Engineering from College of Engineering, Trivandrum, Kerala, India. I've taught 225+ students and conducted 1600+ live classes. I strive to create a safe and encouraging environment where children can develop problem-solving skills naturally.",
    initials: getInitials("Zakaria Ali"),
    languages: ["English", "Hindi", "Malayalam", "Tamil"],
    classesTaken: 1600,
    studentsTaught: 225,
  },
  {
    id: slugify("Kanishka Mahajan"),
    name: "Kanishka Mahajan",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/ejGGrVPg_N-5588.png",
    university: "Jain University",
    degree: "B.Com (Hons)",
    experience: 4,
    bio: "Hi, I'm Kanishka, an experienced Test Prep Mentor specializing in SAT preparation. I hold a B.Com (Hons) from Jain University and bring 4+ years of experience coaching high school students. I've supported 150+ learners and conducted 4,100+ hours of live online classes. My sessions are strategy-driven and focused on accuracy, confidence, and score improvement.",
    initials: getInitials("Kanishka Mahajan"),
    languages: ["English", "Hindi"],
    classesTaken: 1000,
    studentsTaught: 150,
  },
  {
    id: slugify("Satyanarayana Yedla"),
    name: "Satyanarayana Yedla",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/8iPPfD6tlt-5770.png",
    university: "Dr. B. R. Ambedkar University",
    degree: "M.Sc",
    experience: 3,
    bio: "Hi, I'm Satyanarayana Yedla, a Mathematics and Test Prep mentor with over 3 years of teaching experience. I hold an M.Sc. degree from Dr. B. R. Ambedkar University. I teach students in grades 9-12, focusing on strong conceptual understanding, problem-solving skills, and confidence building.",
    initials: getInitials("Satyanarayana Yedla"),
    languages: ["English", "Hindi"],
    classesTaken: 800,
    studentsTaught: 100,
  },
  {
    id: slugify("Mayukh Jana"),
    name: "Mayukh Jana",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/fAYJ_AaYR4-5817.png",
    university: "BITS Pilani",
    degree: "B.E.",
    experience: 5,
    bio: "Hi, I'm Mayukh Jana, a Math and Test Prep Mentor with 5 years of experience. I hold a B.E. from BITS Pilani and combine strong analytical thinking with practical problem-solving. I help senior students build clarity and confidence in advanced concepts and exam preparation.",
    initials: getInitials("Mayukh Jana"),
    languages: ["English", "Hindi"],
    classesTaken: 800,
    studentsTaught: 100,
  },
  {
    id: slugify("Akrsti Aggarwal"),
    name: "Akrsti Aggarwal",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/Df6jOOQttz-5847.png",
    university: "University of Delhi",
    degree: "MA English",
    experience: 5,
    bio: "Hi, I'm Akrsti Aggarwal, a dedicated High School Test Prep Mentor with 5 years of teaching experience, focused on supporting students across grades 9-12. I hold an M.A. in English from the University of Delhi and bring a strong understanding of diverse learning styles and student needs. I have taught 200+ students and conducted 7,500+ hours of live online classes, emphasizing structured preparation, clarity of concepts, and exam-oriented strategies.",
    initials: getInitials("Akrsti Aggarwal"),
    languages: ["English", "Hindi"],
    classesTaken: 5000,
    studentsTaught: 200,
  },
  {
    id: slugify("Sundararaman CP"),
    name: "Sundararaman CP",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/D6CCYcPUaE-5859.png",
    university: "Madras University",
    degree: "M.Sc (Maths)",
    experience: 7,
    bio: "Hi, I'm Sundararaman CP, a Testprep Mentor at CodeYoung. I have 7+ years of experience teaching children through personalised 1:1 online sessions. I hold a M.Sc (Maths) from Madras University. I've taught 100+ students and conducted 500+ live classes. I believe in creating a positive learning space where children feel confident to ask questions and explore ideas.",
    initials: getInitials("Sundararaman CP"),
    languages: ["English", "Hindi", "Tamil"],
    classesTaken: null,
    studentsTaught: null,
  },
  {
    id: slugify("Ruhaan Hassan"),
    name: "Ruhaan Hassan",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/5-3hM3jDss-6031.png",
    university: "The University of Newcastle Upon Tyne",
    degree: "MSc Electrical Power",
    experience: 8,
    bio: "Experienced educator with 8+ years of teaching experience. Holds an MSc in Electrical Power from The University of Newcastle Upon Tyne. Dedicated to helping students achieve their academic goals through personalized mentoring.",
    initials: getInitials("Ruhaan Hassan"),
    languages: ["English", "Hindi"],
    classesTaken: 1000,
    studentsTaught: 500,
  },
  {
    id: slugify("Himanshu Kumar"),
    name: "Himanshu Kumar",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/V905yN0gSZ-6038.png",
    university: "",
    degree: "",
    experience: null,
    bio: "Dedicated mentor committed to helping students excel through personalized 1:1 online sessions and structured test preparation strategies.",
    initials: getInitials("Himanshu Kumar"),
    languages: ["English", "Hindi"],
    classesTaken: null,
    studentsTaught: null,
  },
  {
    id: slugify("V Sai Sudheer"),
    name: "V Sai Sudheer",
    profilePicture:
      "https://user-assets.codeyoung.com/mentorProfiles/mBD6UEEnib-6074.png",
    university: "IIT BHU",
    degree: "B.Tech + M.Tech (5 years Dual Degree)",
    experience: 5,
    bio: "I help students develop strong mathematical thinking - not just memorize formulas. I teach AP Math (Calculus AB/BC, Statistics, Precalculus) and math competitions including AMC 8, AMC 10/12, and MOEMS, with a focus on logic, clarity, and problem-solving. My approach is concept-first and strategy-driven. For AP courses, I help students master fundamentals, handle multi-step questions, and avoid common exam traps.",
    initials: getInitials("V Sai Sudheer"),
    languages: ["English", "Hindi", "Telugu"],
    classesTaken: null,
    studentsTaught: 200,
  },
];
