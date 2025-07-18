'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

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
  { href: "/automobile", label: "Automobile", icon: "🚗" },
  { href: "/bfsi", label: "BFSI", icon: "🏦" },
  { href: "/insurance", label: "Insurance", icon: "🛡️" },
  { href: "/manufacturing", label: "Manufacturing", icon: "🏭" },
  { href: "/retail", label: "Retail", icon: "🛍️" },
  { href: "/travel-tourism", label: "Travel & Tourism", icon: "✈️" },
  { href: "/voice-ai", label: "Try It", icon: "🤖" },
];

const blogLinks = [
  { href: "/solutions/omnichannel-customer-service", label: "Omnichannel Customer Service" },
  { href: "/solutions/automated-customer-service", label: "Automated Customer Service" },
  { href: "/solutions/ai-voice-bots", label: "AI Voice Bots" },
  { href: "/solutions/how-to-improve-csat", label: "How to Improve CSAT" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);
  const solutionsTimeout = useRef<NodeJS.Timeout | null>(null);
  const blogsTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <>
      <nav className="bg-white text-gray-900 fixed w-full top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpeg" alt="Caller.Digital Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Caller.Digital</span>
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
                onMouseEnter={() => {
                  if (solutionsTimeout.current) clearTimeout(solutionsTimeout.current);
                  setIsSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  solutionsTimeout.current = setTimeout(() => setIsSolutionsOpen(false), 200);
                }}
              >
                <button
                  className="text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-1 font-bold focus:outline-none"
                  onClick={() => setIsSolutionsOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={isSolutionsOpen}
                  tabIndex={0}
                  onFocus={() => setIsSolutionsOpen(true)}
                  onBlur={() => solutionsTimeout.current = setTimeout(() => setIsSolutionsOpen(false), 200)}
                >
                  <span>Solutions</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSolutionsOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 divide-y divide-gray-200"
                    onMouseEnter={() => {
                      if (solutionsTimeout.current) clearTimeout(solutionsTimeout.current);
                      setIsSolutionsOpen(true);
                    }}
                    onMouseLeave={() => {
                      solutionsTimeout.current = setTimeout(() => setIsSolutionsOpen(false), 200);
                    }}
                  >
                    {solutionsLinks.map((link, idx) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-6 py-4 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors font-bold flex items-center space-x-3 text-base rounded-md focus:bg-blue-50 focus:text-blue-500"
                        tabIndex={0}
                        style={{ minWidth: 200 }}
                      >
                        <span>{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Blogs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (blogsTimeout.current) clearTimeout(blogsTimeout.current);
                  setIsBlogsOpen(true);
                }}
                onMouseLeave={() => {
                  blogsTimeout.current = setTimeout(() => setIsBlogsOpen(false), 200);
                }}
              >
                <button
                  className="text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-1 font-bold focus:outline-none"
                  onClick={() => setIsBlogsOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={isBlogsOpen}
                  tabIndex={0}
                  onFocus={() => setIsBlogsOpen(true)}
                  onBlur={() => blogsTimeout.current = setTimeout(() => setIsBlogsOpen(false), 200)}
                >
                  <span>Blogs</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isBlogsOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 divide-y divide-gray-200"
                    onMouseEnter={() => {
                      if (blogsTimeout.current) clearTimeout(blogsTimeout.current);
                      setIsBlogsOpen(true);
                    }}
                    onMouseLeave={() => {
                      blogsTimeout.current = setTimeout(() => setIsBlogsOpen(false), 200);
                    }}
                  >
                    {blogLinks.map((link, idx) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-6 py-4 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors font-bold whitespace-pre-line break-words text-base rounded-md focus:bg-blue-50 focus:text-blue-500"
                        tabIndex={0}
                        style={{ minWidth: 200 }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Book Demo Button */}
              <a
                href="https://calendly.com/vaibhav_applore/voice-ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-bold hover:from-teal-500 hover:to-purple-600 transition-all duration-300 shadow-md"
              >
                Book Demo
              </a>
            </div>
            {/* Mobile menu button - always visible in mobile view */}
            <div className="md:hidden fixed top-4 right-4 z-[100]">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:text-blue-500 focus:outline-none transition-colors"
                aria-label="Open menu"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 z-40 pt-16">
          <div className="px-4 py-8 flex flex-col min-h-screen w-full max-w-sm mx-auto">
            <nav className="w-full">
              <ul className="space-y-1">
              {navLinks.map((link) => (
                  <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-lg text-lg font-bold transition-colors"
                >
                  {link.label}
                </Link>
                  </li>
              ))}
              </ul>
              {/* Book Demo Button for Mobile */}
              <div className="my-4">
                <a
                  href="https://calendly.com/vaibhav_applore/voice-ai-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg text-lg font-bold text-center hover:from-teal-500 hover:to-purple-600 transition-all duration-300 shadow-md"
                >
                  Book Demo
                </a>
              </div>
              <div className="my-4 border-t border-blue-100" />
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-blue-700 text-xs font-semibold uppercase tracking-wider focus:outline-none"
                onClick={() => setMobileSolutionsOpen((open) => !open)}
                aria-expanded={mobileSolutionsOpen}
                aria-controls="mobile-solutions-list"
              >
                <span>Solutions</span>
                {mobileSolutionsOpen ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>
              <ul
                id="mobile-solutions-list"
                className={`space-y-1 transition-all duration-200 ease-in-out overflow-hidden ${mobileSolutionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
              >
                {solutionsLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg text-base font-semibold transition-colors"
                    >
                      <span>{link.label}</span>
                      <FaChevronRight className="ml-2 w-4 h-4 text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="my-4 border-t border-blue-100" />
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-blue-700 text-xs font-semibold uppercase tracking-wider focus:outline-none"
                onClick={() => setMobileBlogsOpen((open) => !open)}
                aria-expanded={mobileBlogsOpen}
                aria-controls="mobile-blogs-list"
              >
                <span>Blogs</span>
                {mobileBlogsOpen ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>
              <ul
                id="mobile-blogs-list"
                className={`space-y-1 mb-8 transition-all duration-200 ease-in-out overflow-hidden ${mobileBlogsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
              >
                {blogLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg text-base font-semibold transition-colors"
                    >
                      <span>{link.label}</span>
                      <FaChevronRight className="ml-2 w-4 h-4 text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
} 