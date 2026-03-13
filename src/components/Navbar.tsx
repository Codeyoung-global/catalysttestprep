"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-heading">
          Catalyst<span className="text-green-primary">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm font-medium text-body hover:text-green-primary transition-colors">
            How It Works
          </a>
          <a href="#tutors" className="text-sm font-medium text-body hover:text-green-primary transition-colors">
            Tutors
          </a>
          <a href="#pricing" className="text-sm font-medium text-body hover:text-green-primary transition-colors">
            Pricing
          </a>
          <a href="https://blog.catalysttestprep.com" className="text-sm font-medium text-body hover:text-green-primary transition-colors">
            Blog
          </a>
        </div>

        {/* CTA Button — always visible */}
        <a
          href="#hero-form"
          className="hidden rounded-lg bg-green-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-dark md:inline-block"
        >
          Start Free SAT Prep Trial
        </a>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#hero-form"
            className="rounded-lg bg-green-primary px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-green-dark"
          >
            Start Free Trial
          </a>
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
            <a href="#how-it-works" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
            <a href="#tutors" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              Tutors
            </a>
            <a href="#pricing" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="https://blog.catalysttestprep.com" className="text-sm font-medium text-body" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
