import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProvenAdvantage from "@/components/ProvenAdvantage";
import TrustBar from "@/components/TrustBar";
import IntroParagraph from "@/components/IntroParagraph";
import TrialBenefits from "@/components/TrialBenefits";
import TestimonialSlider from "@/components/TestimonialSlider";
import GettingStarted from "@/components/GettingStarted";
import WhyCatalyst from "@/components/WhyCatalyst";
import MeetTutors from "@/components/MeetTutors";
import Methodology from "@/components/Methodology";
import ScoreGuarantee from "@/components/ScoreGuarantee";
import ClassGlimpse from "@/components/ClassGlimpse";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import BookDiagnosticCTA from "@/components/BookDiagnosticCTA";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

// FAQ Schema JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in the free SAT prep trial class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your free trial includes a full diagnostic assessment to identify your strengths and weaknesses, a personalized learning profile analysis, and a live 1-on-1 session with one of our expert tutors. You'll walk away with a clear understanding of where you stand and a roadmap for improvement.",
      },
    },
    {
      "@type": "Question",
      name: "How does the SAT score improvement guarantee work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We guarantee that you'll score 1400+ on the SAT or add at least 150 points to your starting score, depending on your baseline. If you complete your full program and don't reach your target, you'll receive a full refund.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifications do your SAT tutors have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All Catalyst tutors are graduates of top-tier universities including Ivy League schools. They've scored in the 99th percentile on the SAT and have multiple years of tutoring experience.",
      },
    },
    {
      "@type": "Question",
      name: "How is Catalyst different from group SAT prep courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike group classes where everyone follows the same pace, Catalyst provides fully personalized 1-on-1 sessions. Your tutor builds a custom curriculum around your specific weak areas using our AI-powered diagnostic tools.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI-powered curriculum work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our proprietary AI engine analyzes your performance on every practice question to identify patterns in your mistakes. It then adapts your study plan in real-time, selecting questions that target the exact concepts where you lose the most points.",
      },
    },
    {
      "@type": "Question",
      name: "Can I schedule sessions at flexible times?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All sessions are conducted online, and you can schedule them at times that work best for you, including evenings and weekends. Sessions can be rescheduled with 24 hours notice.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical SAT prep program last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Program length depends on your starting score and target. Most students see significant improvement within 8–12 weeks. Our plans range from 20 to 80 sessions.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Catalyst Test Prep",
  description:
    "Personalized 1-on-1 online SAT preparation with Ivy-level tutors and a score improvement guarantee.",
  url: "https://catalysttestprep.com",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Navbar />
      <Hero />
      <ProvenAdvantage />
      <IntroParagraph />
      <TrialBenefits />
      <TestimonialSlider />
      <GettingStarted />
      <WhyCatalyst />
      <ScoreGuarantee />
      <MeetTutors />
      <ClassGlimpse />
      <Methodology />
      <BookDiagnosticCTA />
      <Pricing />
      <WhatsAppCTA />
      <FAQ />
      <BottomCTA />
      <Footer />
    </>
  );
}
