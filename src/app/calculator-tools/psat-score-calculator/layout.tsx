import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PSAT/NMSQT Score Calculator — Free National Merit Estimator | Catalyst Test Prep",
  description:
    "Calculate your PSAT/NMSQT total score and Selection Index instantly. Find out if you qualify for National Merit Commended Scholar or Semifinalist status with our free calculator.",
  openGraph: {
    title:
      "PSAT/NMSQT Score Calculator — Free National Merit Estimator | Catalyst Test Prep",
    description:
      "Calculate your PSAT/NMSQT total score and Selection Index instantly. Find out if you qualify for National Merit Commended Scholar or Semifinalist status with our free calculator.",
    type: "website",
    url: "/calculator-tools/psat-score-calculator",
  },
};

export default function PsatScoreCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
