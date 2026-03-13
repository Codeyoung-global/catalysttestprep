import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catalyst Test Prep | 1-on-1 SAT Prep — 150+ Point Guarantee",
  description:
    "Get personalized 1-on-1 SAT prep with Ivy-level tutors. Add 150+ points guaranteed or your money back. Book a free trial class today.",
  openGraph: {
    title: "Catalyst Test Prep | 1-on-1 SAT Prep — 150+ Point Guarantee",
    description:
      "Get personalized 1-on-1 SAT prep with Ivy-level tutors. Add 150+ points guaranteed or your money back. Book a free trial class today.",
    type: "website",
    url: "https://catalysttestprep.com",
    siteName: "Catalyst Test Prep",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst Test Prep | 1-on-1 SAT Prep — 150+ Point Guarantee",
    description:
      "Get personalized 1-on-1 SAT prep with Ivy-level tutors. Add 150+ points guaranteed or your money back.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://catalysttestprep.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
