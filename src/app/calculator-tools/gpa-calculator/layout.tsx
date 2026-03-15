import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPA Calculator — Free Weighted & Unweighted | Catalyst Test Prep",
  description:
    "Calculate your unweighted and weighted GPA instantly. Add AP, Honors, and regular courses to see where you stand and get tips to improve your grades.",
  openGraph: {
    title: "GPA Calculator — Free Weighted & Unweighted | Catalyst Test Prep",
    description:
      "Calculate your unweighted and weighted GPA instantly. Add AP, Honors, and regular courses to see where you stand and get tips to improve your grades.",
    type: "website",
    url: "/calculator-tools/gpa-calculator",
  },
};

export default function GpaCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
