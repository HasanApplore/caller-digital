'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

interface NavLink {
  href: string;
  label: string;
  badge?: string;
  optional?: boolean;
}

const navLinks: NavLink[] = [];

const aboutLinks = [
  { href: "/about/overview", label: "Overview" },
  { href: "/about/testimonials", label: "Testimonials" },
  { href: "/about/case-studies", label: "Case Studies" },
];

const solutionsByIndustry = [
  { href: "/realestate", label: "Real Estate" },
  { href: "/hospital", label: "Hospital" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/automobile", label: "Automobile" },
  { href: "/bfsi", label: "BFSI" },
  { href: "/insurance", label: "Insurance" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/retail", label: "Retail" },
  { href: "/travel-tourism", label: "Travel And Tourism" },
];

const solutionsByUseCase = [
  { href: "/solutions/customer-acquisition", label: "Customer Acquisition & Engagement" },
  { href: "/solutions/retention-operations", label: "Retention, Feedback & Operations" },
];

const integrationsLinks = [
  { href: "/integrations/crm", label: "CRM Integrations" },
  { href: "/integrations/telephony", label: "Telephony Integrations" },
];

const resourcesLinks = [
  { href: "/resources/blog", label: "Blog" },
  { href: "/resources/webinars", label: "Webinars", badge: "Coming Soon" },
  { href: "/resources/product-guides", label: "Product Guides", optional: true },
  { href: "/resources/whitepapers", label: "Whitepapers", optional: true },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIntegrationsOpen, setMobileIntegrationsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const aboutTimeout = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeout = useRef<NodeJS.Timeout | null>(null);
  const integrationsTimeout = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <>
      <nav className="bg-white text-gray-900 fixed w-full top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.jpeg" alt="Caller.Digital Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Caller.Digital</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {/* Simple nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* About Caller Digital Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (aboutTimeout.current) clearTimeout(aboutTimeout.current);
                  setIsAboutOpen(true);
                }}
                onMouseLeave={() => {
                  aboutTimeout.current = setTimeout(() => setIsAboutOpen(false), 200);
                }}
              >
                <button
                  className="text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-1 font-bold focus:outline-none"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <span>About Caller Digital</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>
                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-all font-semibold text-sm rounded-lg"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Link */}
              <Link
                href="/product"
                className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
              >
                Product
              </Link>

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
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  <span>Solutions</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 py-6 z-50">
                    <div className="grid grid-cols-2 gap-6 px-6">
                      {/* By Industries */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-3">By Industries</h3>
                        <div className="space-y-1">
                          {solutionsByIndustry.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-4 py-2.5 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-all font-semibold text-sm rounded-lg"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* By Use Cases */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-3">By Use Cases</h3>
                        <div className="space-y-1">
                          {solutionsByUseCase.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-4 py-2.5 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-all font-semibold text-sm rounded-lg"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-b-xl"></div>
                  </div>
                )}
              </div>

              {/* Integrations Dropdown */}
              <div
                className="relative"
                    onMouseEnter={() => {
                  if (integrationsTimeout.current) clearTimeout(integrationsTimeout.current);
                  setIsIntegrationsOpen(true);
                    }}
                    onMouseLeave={() => {
                  integrationsTimeout.current = setTimeout(() => setIsIntegrationsOpen(false), 200);
                    }}
                  >
                <button
                  className="text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-1 font-bold focus:outline-none"
                  onClick={() => setIsIntegrationsOpen(!isIntegrationsOpen)}
                >
                  <span>Integrations</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>
                {isIntegrationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                    {integrationsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-all font-semibold text-sm rounded-lg"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (resourcesTimeout.current) clearTimeout(resourcesTimeout.current);
                  setIsResourcesOpen(true);
                }}
                onMouseLeave={() => {
                  resourcesTimeout.current = setTimeout(() => setIsResourcesOpen(false), 200);
                }}
              >
                <button
                  className="text-gray-700 hover:text-blue-500 transition-colors flex items-center space-x-1 font-bold focus:outline-none"
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                >
                  <span>Resources</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-4 py-2.5 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-all font-semibold text-sm rounded-lg"
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-xs bg-gradient-to-r from-teal-400 to-blue-500 text-white px-1.5 py-0.5 rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-500 transition-colors font-bold"
              >
                Contact Us
              </Link>

              {/* Book Demo Button */}
              <a
                href="https://calendly.com/vaibhav_applore/voice-ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-5 py-2.5 rounded-lg font-bold hover:from-teal-500 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book A Demo
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
                {/* About Caller Digital */}
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-blue-700 text-xs font-semibold uppercase tracking-wider focus:outline-none"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  aria-expanded={mobileAboutOpen}
                >
                  <span>About Caller Digital</span>
                  {mobileAboutOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                </button>
                <ul className={`space-y-1 transition-all duration-200 ease-in-out overflow-hidden ${mobileAboutOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                  {aboutLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg text-base font-semibold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Product */}
                <li>
                  <Link
                    href="/product"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-blue-700 hover:bg-blue-50 rounded-lg text-lg font-bold transition-colors"
                  >
                    Product
                  </Link>
                </li>
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
                  Book A Demo
                </a>
              </div>
              
              <div className="my-4 border-t border-blue-100" />
              
              {/* Solutions */}
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-blue-700 text-xs font-semibold uppercase tracking-wider focus:outline-none"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Solutions</span>
                {mobileSolutionsOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
              </button>
              <ul className={`space-y-1 transition-all duration-200 ease-in-out overflow-hidden ${mobileSolutionsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <li className="px-4 py-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">By Industries</p>
                  {solutionsByIndustry.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-2 py-2 text-gray-700 hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors mb-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </li>
                <li className="px-4 py-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">By Use Cases</p>
                  {solutionsByUseCase.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-2 py-2 text-gray-700 hover:bg-blue-50 rounded-lg text-sm font-medium transition-colors mb-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </li>
              </ul>
              
              <div className="my-4 border-t border-blue-100" />
              
              {/* Integrations */}
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-blue-700 text-xs font-semibold uppercase tracking-wider focus:outline-none"
                onClick={() => setMobileIntegrationsOpen(!mobileIntegrationsOpen)}
                aria-expanded={mobileIntegrationsOpen}
              >
                <span>Integrations</span>
                {mobileIntegrationsOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
              </button>
              <ul className={`space-y-1 transition-all duration-200 ease-in-out overflow-hidden ${mobileIntegrationsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                {integrationsLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg text-base font-semibold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="my-4 border-t border-blue-100" />
              
              {/* Resources */}
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-blue-700 text-xs font-semibold uppercase tracking-wider focus:outline-none"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                aria-expanded={mobileResourcesOpen}
              >
                <span>Resources</span>
                {mobileResourcesOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
              </button>
              <ul className={`space-y-1 mb-8 transition-all duration-200 ease-in-out overflow-hidden ${mobileResourcesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                {resourcesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg text-base font-semibold transition-colors"
                    >
                      <div className="flex items-center">
                      <span>{link.label}</span>
                        {link.badge && (
                          <span className="ml-2 text-xs bg-gradient-to-r from-teal-400 to-blue-500 text-white px-1.5 py-0.5 rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </div>
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