import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AP Score Calculator & Predictor — Free Tool | Catalyst Test Prep",
  description:
    "Predict your AP exam score (1–5) for Calculus, Physics, English, CS, History, and more. Enter your multiple-choice and free-response scores to see where you stand — plus tips to improve.",
  openGraph: {
    title:
      "AP Score Calculator & Predictor — Free Tool | Catalyst Test Prep",
    description:
      "Predict your AP exam score (1–5) for Calculus, Physics, English, CS, History, and more. Enter your multiple-choice and free-response scores to see where you stand — plus tips to improve.",
    type: "website",
    url: "/calculator-tools/ap-score-calculator",
  },
};

export default function ApScoreCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
