"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const courseLinks = [
  { label: "AP", href: "/courses/ap" },
  { label: "PSAT", href: "/courses/psat" },
  { label: "SAT", href: "/courses/sat" },
  { label: "ACT", href: "/courses/act" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/Catalyst_logo3.svg"
            alt="Catalyst Test Prep"
            width={200}
            height={36}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Courses Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-body transition-colors hover:text-green-primary">
              Courses
              <svg className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="min-w-[140px] rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                {courseLinks.map((course) => (
                  <Link
                    key={course.href}
                    href={course.href}
                    className="block px-4 py-2 text-sm font-medium text-body transition-colors hover:bg-gray-50 hover:text-green-primary"
                  >
                    {course.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/mentors" className="text-sm font-medium text-body transition-colors hover:text-green-primary">
            Mentors
          </Link>
          <Link href="/about" className="text-sm font-medium text-body transition-colors hover:text-green-primary">
            About Us
          </Link>
          <Link href="/calculator-tools" className="text-sm font-medium text-body transition-colors hover:text-green-primary">
            Calculator Tools
          </Link>
          <a href="#pricing" className="text-sm font-medium text-body transition-colors hover:text-green-primary">
            Pricing
          </a>
          <a
            href="https://blog.catalysttestprep.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-body transition-colors hover:text-green-primary"
          >
            Blog
          </a>
        </div>

        {/* CTA Button — desktop */}
        <Link
          href="/book-diagnostic"
          className="hidden rounded-lg bg-green-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-dark md:inline-block"
        >
          Book a Diagnostic
        </Link>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/book-diagnostic"
            className="rounded-lg bg-green-primary px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-green-dark"
          >
            Book a Diagnostic
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-heading"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {/* Courses Accordion */}
            <div>
              <button
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="flex w-full items-center justify-between text-sm font-medium text-body"
              >
                Courses
                <svg
                  className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {coursesOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {courseLinks.map((course) => (
                    <Link
                      key={course.href}
                      href={course.href}
                      className="text-sm text-body hover:text-green-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/mentors" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              Mentors
            </Link>
            <Link href="/about" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/calculator-tools" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              Calculator Tools
            </Link>
            <a href="#pricing" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a
              href="https://blog.catalysttestprep.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-body"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
