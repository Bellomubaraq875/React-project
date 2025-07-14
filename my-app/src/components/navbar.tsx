"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu"; // Update the path if needed

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b text-white border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6 flex justify-center">
          <div className="flex h-16 w-full items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-9 w-9 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold whitespace-nowrap">
                Safe Report
              </span>
            </Link>

            {/* Links - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/submit-report-page"
                className="text-sm text-zinc-400 hover:text-white">
                Submit Report
              </Link>
              <Link
                href="/track-report"
                className="text-sm text-zinc-400 hover:text-white">
                Track Report
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-zinc-400 hover:text-white">
                How it Works
              </Link>
              <Link
                href="/resources"
                className="text-sm text-zinc-400 hover:text-white">
                Resources
              </Link>
              <Link
                href="/contact"
                className="text-sm text-zinc-400 hover:text-white">
                Contact
              </Link>
            </div>

            {/* Emergency + Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 font-medium text-red-500 ring-1 ring-red-500/20 hover:bg-red-500/40">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span>Emergency: 809</span>
              </button>

              {/* Hamburger Icon */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-white hover:text-red-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Render */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
