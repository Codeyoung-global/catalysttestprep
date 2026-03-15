export interface PricingPlan {
  name: string;
  price: string;
  sessions: string;
  features: string[];
  highlighted: boolean;
}

export interface CourseSection {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  name: string;
  fullName: string;
  description: string;
  targetAudience: string;
  scoreGuarantee: string;
  scoreGuaranteeDetail: string;
  sections: CourseSection[];
  keyFeatures: string[];
  pricingPlans: PricingPlan[];
}

export const courses: Course[] = [
  {
    id: "sat",
    name: "SAT",
    fullName: "SAT Test Prep",
    description:
      "Dominate the SAT with personalized 1-on-1 tutoring, AI-powered practice, and a proven methodology that has helped thousands of students reach their dream scores.",
    targetAudience: "High school juniors and seniors preparing for college admissions",
    scoreGuarantee: "1400+",
    scoreGuaranteeDetail:
      "We guarantee you will score 1400+ on the SAT or improve by at least 150 points from your diagnostic baseline. If you complete the full program and don't hit your target, you receive a full refund.",
    sections: [
      {
        title: "Math",
        topics: [
          "Heart of Algebra",
          "Problem Solving & Data Analysis",
          "Passport to Advanced Math",
          "Additional Topics in Math",
          "Calculator & No-Calculator Strategies",
        ],
      },
      {
        title: "Evidence-Based Reading & Writing",
        topics: [
          "Reading Comprehension",
          "Command of Evidence",
          "Words in Context",
          "Expression of Ideas",
          "Standard English Conventions",
        ],
      },
    ],
    keyFeatures: [
      "Full-length SAT practice tests with detailed analytics",
      "AI-powered adaptive question bank",
      "Real-time score tracking and progress reports",
      "College admissions strategy guidance",
      "Flexible online scheduling, including evenings and weekends",
      "Ivy-league tutors who scored in the 99th percentile",
    ],
    pricingPlans: [
      {
        name: "Starter",
        price: "$1,899",
        sessions: "20 sessions",
        features: [
          "1-on-1 live tutoring",
          "Diagnostic assessment",
          "Personalized study plan",
          "Progress tracking dashboard",
          "Email support",
        ],
        highlighted: false,
      },
      {
        name: "Standard",
        price: "$2,499",
        sessions: "40 sessions",
        features: [
          "Everything in Starter",
          "AI-powered practice sets",
          "Weekly progress reports",
          "Parent check-in calls",
          "Priority scheduling",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$3,049",
        sessions: "60 sessions",
        features: [
          "Everything in Standard",
          "Extended session length",
          "Bonus practice materials",
          "College application guidance",
          "Dedicated advisor",
        ],
        highlighted: false,
      },
      {
        name: "Elite",
        price: "$3,599",
        sessions: "80 sessions",
        features: [
          "Everything in Premium",
          "Unlimited practice tests",
          "Essay review & feedback",
          "Score improvement guarantee",
          "24/7 tutor access",
        ],
        highlighted: false,
      },
    ],
  },
  {
    id: "act",
    name: "ACT",
    fullName: "ACT Test Prep",
    description:
      "Conquer the ACT with expert tutors who tailor every session to your strengths and weaknesses across all four sections. Our data-driven approach maximizes your composite score.",
    targetAudience: "High school juniors and seniors targeting top ACT scores for college admissions",
    scoreGuarantee: "32+",
    scoreGuaranteeDetail:
      "We guarantee you will score 32+ on the ACT or improve by at least 4 points from your diagnostic baseline. Complete the full program and miss your target, and you receive a full refund.",
    sections: [
      {
        title: "English",
        topics: [
          "Grammar & Usage",
          "Punctuation",
          "Sentence Structure",
          "Rhetorical Skills",
          "Style & Tone",
        ],
      },
      {
        title: "Math",
        topics: [
          "Pre-Algebra & Elementary Algebra",
          "Intermediate Algebra & Coordinate Geometry",
          "Plane Geometry",
          "Trigonometry",
          "Integrating Essential Skills",
        ],
      },
      {
        title: "Reading",
        topics: [
          "Prose Fiction & Literary Narrative",
          "Social Science Passages",
          "Humanities Passages",
          "Natural Science Passages",
          "Comparative Reading",
        ],
      },
      {
        title: "Science",
        topics: [
          "Data Representation",
          "Research Summaries",
          "Conflicting Viewpoints",
          "Experimental Design Analysis",
          "Scientific Reasoning Strategies",
        ],
      },
    ],
    keyFeatures: [
      "Full-length ACT practice tests with section-by-section breakdowns",
      "Science reasoning bootcamp",
      "Time management strategies for all four sections",
      "Optional ACT Writing (essay) coaching",
      "Flexible online scheduling, including evenings and weekends",
      "Tutors who scored 35+ on the ACT",
    ],
    pricingPlans: [
      {
        name: "Starter",
        price: "$1,799",
        sessions: "20 sessions",
        features: [
          "1-on-1 live tutoring",
          "Diagnostic assessment",
          "Personalized study plan",
          "Progress tracking dashboard",
          "Email support",
        ],
        highlighted: false,
      },
      {
        name: "Standard",
        price: "$2,399",
        sessions: "40 sessions",
        features: [
          "Everything in Starter",
          "AI-powered practice sets",
          "Weekly progress reports",
          "Parent check-in calls",
          "Priority scheduling",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$2,949",
        sessions: "60 sessions",
        features: [
          "Everything in Standard",
          "Extended session length",
          "Bonus practice materials",
          "College application guidance",
          "Dedicated advisor",
        ],
        highlighted: false,
      },
      {
        name: "Elite",
        price: "$3,499",
        sessions: "80 sessions",
        features: [
          "Everything in Premium",
          "Unlimited practice tests",
          "Essay review & feedback",
          "Score improvement guarantee",
          "24/7 tutor access",
        ],
        highlighted: false,
      },
    ],
  },
  {
    id: "psat",
    name: "PSAT",
    fullName: "PSAT / NMSQT Test Prep",
    description:
      "Maximize your PSAT score to qualify for the National Merit Scholarship and build a strong foundation for SAT success. Our targeted prep gives you a competitive edge.",
    targetAudience: "High school sophomores and juniors aiming for National Merit Scholarship qualification",
    scoreGuarantee: "1350+",
    scoreGuaranteeDetail:
      "We guarantee you will score 1350+ on the PSAT or improve by at least 120 points from your diagnostic baseline. Complete the full program and miss your target, and you receive a full refund.",
    sections: [
      {
        title: "Math",
        topics: [
          "Heart of Algebra",
          "Problem Solving & Data Analysis",
          "Passport to Advanced Math",
          "Additional Topics in Math",
          "Calculator Strategy & Efficiency",
        ],
      },
      {
        title: "Evidence-Based Reading & Writing",
        topics: [
          "Reading Comprehension & Passage Analysis",
          "Command of Evidence",
          "Words in Context",
          "Expression of Ideas",
          "Standard English Conventions",
        ],
      },
      {
        title: "National Merit Strategy",
        topics: [
          "Understanding the Selection Index",
          "State-by-State Cutoff Analysis",
          "Commended Scholar vs. Semifinalist Targeting",
          "Scholarship Application Preparation",
          "Timeline & Milestone Planning",
        ],
      },
    ],
    keyFeatures: [
      "National Merit Scholarship qualification strategy",
      "Full-length PSAT practice tests with score projections",
      "State-specific cutoff score analysis",
      "SAT readiness assessment included",
      "Flexible online scheduling, including evenings and weekends",
      "Tutors who are National Merit Scholars themselves",
    ],
    pricingPlans: [
      {
        name: "Starter",
        price: "$1,499",
        sessions: "15 sessions",
        features: [
          "1-on-1 live tutoring",
          "Diagnostic assessment",
          "Personalized study plan",
          "Progress tracking dashboard",
          "Email support",
        ],
        highlighted: false,
      },
      {
        name: "Standard",
        price: "$1,999",
        sessions: "30 sessions",
        features: [
          "Everything in Starter",
          "AI-powered practice sets",
          "Weekly progress reports",
          "Parent check-in calls",
          "National Merit strategy session",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$2,549",
        sessions: "45 sessions",
        features: [
          "Everything in Standard",
          "Extended session length",
          "Bonus practice materials",
          "SAT transition planning",
          "Dedicated advisor",
        ],
        highlighted: false,
      },
      {
        name: "Elite",
        price: "$2,999",
        sessions: "60 sessions",
        features: [
          "Everything in Premium",
          "Unlimited practice tests",
          "Scholarship application guidance",
          "Score improvement guarantee",
          "24/7 tutor access",
        ],
        highlighted: false,
      },
    ],
  },
  {
    id: "ap",
    name: "AP",
    fullName: "AP Exam Prep",
    description:
      "Earn top scores on your AP exams with expert tutors who specialize in the most in-demand subjects. Our structured approach turns complex material into confident test performance.",
    targetAudience: "High school students taking AP courses who want to score 4 or 5 on their exams",
    scoreGuarantee: "4-5",
    scoreGuaranteeDetail:
      "We guarantee you will score a 4 or 5 on your AP exam. If you complete the full program and score below a 4, you receive a full refund.",
    sections: [
      {
        title: "AP Calculus (AB & BC)",
        topics: [
          "Limits & Continuity",
          "Differentiation Techniques",
          "Applications of Derivatives",
          "Integration & Accumulation",
          "Differential Equations & Series (BC)",
        ],
      },
      {
        title: "AP Physics (1, 2, C)",
        topics: [
          "Kinematics & Dynamics",
          "Energy, Work & Power",
          "Waves & Optics",
          "Electricity & Magnetism",
          "Lab-Based & Free-Response Strategies",
        ],
      },
      {
        title: "AP English (Language & Literature)",
        topics: [
          "Rhetorical Analysis",
          "Argumentative Essay Writing",
          "Literary Analysis & Interpretation",
          "Synthesis & Source Integration",
          "Prose & Poetry Close Reading",
        ],
      },
      {
        title: "AP Computer Science (A & Principles)",
        topics: [
          "Object-Oriented Programming in Java",
          "Data Structures & Algorithms",
          "Recursion & Sorting",
          "Computing Innovations & Impact",
          "Create Task & Free-Response Strategies",
        ],
      },
    ],
    keyFeatures: [
      "Subject-specific expert tutors for each AP exam",
      "Full-length AP practice exams with detailed scoring rubrics",
      "Free-response question (FRQ) coaching and grading",
      "Multiple-choice strategy and time management",
      "Flexible online scheduling, including evenings and weekends",
      "Tutors who scored 5 on the exams they teach",
    ],
    pricingPlans: [
      {
        name: "Starter",
        price: "$1,599",
        sessions: "15 sessions",
        features: [
          "1-on-1 live tutoring",
          "Diagnostic assessment",
          "Personalized study plan",
          "Progress tracking dashboard",
          "Email support",
        ],
        highlighted: false,
      },
      {
        name: "Standard",
        price: "$2,199",
        sessions: "30 sessions",
        features: [
          "Everything in Starter",
          "AI-powered practice sets",
          "Weekly progress reports",
          "Parent check-in calls",
          "FRQ grading & feedback",
        ],
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$2,749",
        sessions: "45 sessions",
        features: [
          "Everything in Standard",
          "Extended session length",
          "Bonus practice materials",
          "Multi-subject bundle discount",
          "Dedicated advisor",
        ],
        highlighted: false,
      },
      {
        name: "Elite",
        price: "$3,299",
        sessions: "60 sessions",
        features: [
          "Everything in Premium",
          "Unlimited practice tests",
          "Full exam simulation sessions",
          "Score improvement guarantee",
          "24/7 tutor access",
        ],
        highlighted: false,
      },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getAllCourseIds(): string[] {
  return courses.map((c) => c.id);
}
