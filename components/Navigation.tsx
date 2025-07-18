'use client';

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const solutionsLinks = [
  { href: "/realestate", label: "Real Estate", icon: "🏠" },
  { href: "/hospital", label: "Healthcare", icon: "🏥" },
  { href: "/hospitality", label: "Hospitality", icon: "🏨" },
  { href: "/voice-ai", label: "Try It", icon: "🤖" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold flex items-center">
              Caller.Digital
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
                >
                  {link.label}
                </Link>
              ))}
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className="text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-1 font-bold"
                >
                  <span>Solutions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSolutionsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors font-bold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-40 pt-16">
          <div className="px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-indigo-400 transition-colors text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 