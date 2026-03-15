export interface Mentor {
  id: string;
  name: string;
  university: string;
  degree: string;
  satScore: number;
  experience: number;
  specialty: string;
  bio: string;
  initials: string;
  subjects: string[];
  funFacts: string[];
  teachingStyle: string;
}

export const mentors: Mentor[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    university: "Harvard University",
    degree: "B.A. in Mathematics",
    satScore: 1580,
    experience: 6,
    specialty: "Math",
    bio: "Sarah has helped over 200 students achieve 750+ on the SAT Math section. She believes every student can master math with the right approach and a bit of persistence. Her students consistently report that concepts finally 'click' after working with her.",
    initials: "SM",
    subjects: ["SAT Math", "ACT Math", "AP Calculus AB", "AP Calculus BC"],
    funFacts: [
      "Competed in national math olympiads in high school",
      "Can solve a Rubik's cube in under 2 minutes",
      "Volunteers teaching math at local community centers",
    ],
    teachingStyle:
      "Patient and methodical. Sarah breaks down complex problems into manageable steps and builds student confidence through incremental wins. She emphasizes pattern recognition and strategic shortcuts.",
  },
  {
    id: "david-chen",
    name: "David Chen",
    university: "Yale University",
    degree: "B.S. in Computer Science",
    satScore: 1560,
    experience: 5,
    specialty: "Math & Data Analysis",
    bio: "David combines his analytical background with a passion for teaching to help students conquer quantitative reasoning. He specializes in data analysis questions and helping students build logical frameworks for problem-solving.",
    initials: "DC",
    subjects: ["SAT Math", "ACT Math", "AP Statistics", "PSAT"],
    funFacts: [
      "Built an app that generates personalized practice problems",
      "Former captain of his college quiz bowl team",
      "Loves hiking and has visited 30 national parks",
    ],
    teachingStyle:
      "Analytical and engaging. David uses real-world examples and data-driven approaches to make abstract concepts tangible. He encourages students to think like scientists and test their reasoning.",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    university: "Princeton University",
    degree: "B.A. in English Literature",
    satScore: 1570,
    experience: 7,
    specialty: "Reading & Writing",
    bio: "Priya is a reading comprehension expert who has helped hundreds of students decode complex passages with confidence. She teaches students to read strategically, not just carefully, turning the verbal section into a strength.",
    initials: "PS",
    subjects: ["SAT Reading", "SAT Writing", "ACT English", "AP English Literature"],
    funFacts: [
      "Published author of a young adult novel",
      "Speaks four languages fluently",
      "Runs a book club for high school students",
    ],
    teachingStyle:
      "Warm and insightful. Priya helps students develop a genuine curiosity for reading while teaching efficient test-taking strategies. She focuses on building vocabulary in context and identifying author intent.",
  },
  {
    id: "michael-torres",
    name: "Michael Torres",
    university: "Columbia University",
    degree: "M.Ed. in Education",
    satScore: 1550,
    experience: 8,
    specialty: "Test Strategy & Math",
    bio: "With a Master's in Education, Michael brings research-backed teaching methods to every session. He specializes in helping students overcome test anxiety and develop time management strategies that maximize scores across all sections.",
    initials: "MT",
    subjects: ["SAT Math", "SAT Reading", "ACT Composite", "PSAT"],
    funFacts: [
      "Former high school math teacher before becoming a private tutor",
      "Ran the New York City Marathon twice",
      "Collects vintage board games",
    ],
    teachingStyle:
      "Structured and encouraging. Michael creates detailed study plans tailored to each student's timeline and goals. He uses frequent check-ins and mock tests to track progress and adjust strategies.",
  },
  {
    id: "emily-watson",
    name: "Emily Watson",
    university: "Stanford University",
    degree: "B.S. in Cognitive Science",
    satScore: 1590,
    experience: 4,
    specialty: "Reading Comprehension",
    bio: "Emily uses her cognitive science background to teach students how their brains process information during high-stakes tests. She has developed proprietary techniques for active reading that dramatically improve comprehension speed and accuracy.",
    initials: "EW",
    subjects: ["SAT Reading", "ACT Reading", "AP English Language", "PSAT"],
    funFacts: [
      "Scored a perfect 1600 on her first SAT attempt",
      "Teaches meditation techniques for test anxiety",
      "Avid rock climber and outdoor enthusiast",
    ],
    teachingStyle:
      "Science-based and adaptive. Emily tailors her methods to each student's learning style, using cognitive science principles to optimize retention and recall. She makes reading strategy feel like a superpower.",
  },
  {
    id: "james-oconnor",
    name: "James O'Connor",
    university: "MIT",
    degree: "B.S. in Physics",
    satScore: 1580,
    experience: 5,
    specialty: "Math & Science",
    bio: "James brings the precision of a physicist to SAT prep, helping students develop systematic approaches to even the trickiest math problems. His students love his clear explanations and the way he connects math concepts to real-world applications.",
    initials: "JO",
    subjects: ["SAT Math", "ACT Math", "ACT Science", "AP Physics"],
    funFacts: [
      "Built a telescope from scratch in college",
      "Competitive chess player ranked in the top 5% nationally",
      "Makes math memes that go viral on social media",
    ],
    teachingStyle:
      "Logical and creative. James encourages students to approach problems from multiple angles and find elegant solutions. He uses visual aids and diagrams extensively to make abstract concepts concrete.",
  },
  {
    id: "aisha-johnson",
    name: "Aisha Johnson",
    university: "University of Pennsylvania",
    degree: "B.A. in Psychology",
    satScore: 1560,
    experience: 6,
    specialty: "Writing & Grammar",
    bio: "Aisha is a grammar and writing specialist who transforms students' approach to the writing section. She teaches the rules of standard English in a way that sticks, helping students see patterns in grammar questions and eliminate wrong answers with confidence.",
    initials: "AJ",
    subjects: ["SAT Writing", "ACT English", "AP English Language", "PSAT"],
    funFacts: [
      "Editor of her college newspaper for three years",
      "Passionate about journaling and creative writing",
      "Hosts a podcast about effective communication",
    ],
    teachingStyle:
      "Energetic and rule-based. Aisha teaches grammar rules as a system of patterns rather than isolated facts. She uses mnemonics and real-world writing examples to make the rules memorable and applicable.",
  },
  {
    id: "ryan-nakamura",
    name: "Ryan Nakamura",
    university: "Duke University",
    degree: "B.S. in Biomedical Engineering",
    satScore: 1570,
    experience: 4,
    specialty: "Math & Science",
    bio: "Ryan combines engineering precision with a gift for breaking down complex topics into simple, understandable pieces. He excels at identifying the specific gaps in a student's knowledge and filling them efficiently to produce rapid score improvements.",
    initials: "RN",
    subjects: ["SAT Math", "ACT Math", "ACT Science", "AP Chemistry"],
    funFacts: [
      "Designed a 3D-printed study tool for geometry concepts",
      "Former varsity swimmer and swim coach",
      "Loves cooking and experiments with molecular gastronomy",
    ],
    teachingStyle:
      "Efficient and hands-on. Ryan focuses on doing problems together rather than lecturing, believing students learn best by working through challenges with guided support. He assigns targeted practice between sessions.",
  },
  {
    id: "olivia-martinez",
    name: "Olivia Martinez",
    university: "Brown University",
    degree: "B.A. in Comparative Literature",
    satScore: 1550,
    experience: 5,
    specialty: "Reading & Writing",
    bio: "Olivia is passionate about helping students discover their analytical voice through the SAT verbal sections. She specializes in teaching students to identify rhetorical techniques and argument structures, skills that boost scores and carry into college-level work.",
    initials: "OM",
    subjects: ["SAT Reading", "SAT Writing", "ACT English", "ACT Reading"],
    funFacts: [
      "Has read over 500 books and counting",
      "Fluent in Spanish and Portuguese",
      "Mentors first-generation college applicants",
    ],
    teachingStyle:
      "Discussion-driven and empathetic. Olivia uses Socratic questioning to help students arrive at answers on their own. She creates a comfortable environment where mistakes are treated as learning opportunities.",
  },
  {
    id: "kevin-park",
    name: "Kevin Park",
    university: "Cornell University",
    degree: "B.S. in Applied Mathematics",
    satScore: 1580,
    experience: 6,
    specialty: "Math",
    bio: "Kevin is a math enthusiast who makes even the most challenging algebra and geometry problems feel approachable. With a track record of helping students improve their math scores by an average of 120 points, he is one of our most sought-after mentors.",
    initials: "KP",
    subjects: ["SAT Math", "ACT Math", "AP Calculus AB", "PSAT"],
    funFacts: [
      "Won a regional math competition three years in a row",
      "Plays piano and composes music in his free time",
      "Coaches youth basketball on weekends",
    ],
    teachingStyle:
      "Dynamic and encouraging. Kevin uses gamification and timed challenges to make practice sessions feel less like studying and more like training. He celebrates every milestone and keeps motivation high.",
  },
  {
    id: "rachel-kim",
    name: "Rachel Kim",
    university: "Dartmouth College",
    degree: "B.A. in Economics",
    satScore: 1540,
    experience: 3,
    specialty: "Math & Data Analysis",
    bio: "Rachel brings a fresh perspective to SAT prep, having recently aced the test herself. She connects with students on a peer level while delivering expert-caliber instruction in quantitative reasoning and data interpretation.",
    initials: "RK",
    subjects: ["SAT Math", "PSAT", "AP Statistics", "ACT Math"],
    funFacts: [
      "Founded a peer tutoring program at Dartmouth",
      "Competitive debate champion in high school",
      "Enjoys digital illustration and graphic design",
    ],
    teachingStyle:
      "Relatable and strategic. Rachel shares the study techniques that worked for her own SAT journey and helps students build personalized study routines. She emphasizes understanding the test-makers' mindset.",
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    university: "Georgetown University",
    degree: "B.A. in Philosophy",
    satScore: 1560,
    experience: 7,
    specialty: "Reading & Critical Thinking",
    bio: "Marcus uses his philosophy training to teach students how to think critically about SAT passages and arguments. He has a unique ability to help students see through tricky answer choices and develop the logical reasoning skills that top scorers rely on.",
    initials: "MW",
    subjects: ["SAT Reading", "SAT Writing", "ACT Reading", "AP English Literature"],
    funFacts: [
      "Hosts philosophy discussion groups for teens",
      "Amateur stand-up comedian",
      "Ran a college prep workshop series for underserved communities",
    ],
    teachingStyle:
      "Thought-provoking and conversational. Marcus asks challenging questions that push students to think deeper. He makes the verbal section feel like solving a puzzle rather than a chore, building both skills and enthusiasm.",
  },
];
