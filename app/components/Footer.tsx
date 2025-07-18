'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/caller.digital?igsh=cHYxaWI0Z3k1cGh3&utm_source=qr',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21h9c2.485 0 4.5-2.015 4.5-4.5v-9C21 5.015 18.985 3 16.5 3h-9C5.015 3 3 5.015 3 7.5v9C3 18.985 5.015 21 7.5 21z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.125 7.875a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 16.125a4.125 4.125 0 100-8.25 4.125 4.125 0 000 8.25z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/caller-digital/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 9v9M8 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 13.5v4.5M15.5 13.5c0-1.5 1-3 2.5-3s2.5 1.5 2.5 3v4.5M15.5 13.5V9" />
        </svg>
      ),
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8 mb-8">
          
          {/* Column 1: Logo, Description, Subscribe */}
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image 
                  src="/logo.jpeg" 
                  alt="Caller Digital Logo" 
                  width={36} 
                  height={36} 
                  className="rounded-lg shadow-sm" 
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Caller Digital
              </span>
            </div>
            
            <p className="text-gray-600 text-sm leading-5">
              Caller Digital provides multilingual AI voice agents to automate sales, support, and operations—delivering 24/7 service, boosting efficiency, and enhancing customer experience for modern businesses.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center bg-white rounded-xl shadow-inner p-1 border border-gray-300 focus-within:border-blue-500 transition-colors">
                <svg className="w-4 h-4 text-gray-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none" 
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Important Links */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">Important Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">Services</h4>
            <ul className="space-y-2">
              {[
                { href: '/services#ecommerce', label: 'E-commerce Support' },
                { href: '/services#healthcare', label: 'Healthcare Assistance' },
                { href: '/services#manufacturing', label: 'Manufacturing Support' },
                { href: '/services#financial', label: 'Financial Services' }
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm hover:underline underline-offset-2"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Social */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">Contact Us</h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="text-gray-600 text-sm leading-4">
                    803, Pegasus Tower, Block A, Sector 68,<br/>
                    Noida, Uttar Pradesh – 201307, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:hello@caller.digital" className="text-blue-600 hover:text-blue-700 hover:underline text-sm transition-colors duration-200 underline-offset-2">
                  hello@caller.digital
                </a>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm font-medium mb-2">Follow Us</p>
                <div className="flex space-x-3">
                  {socialLinks.map(link => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-blue-600 transition-all duration-200 transform hover:scale-110"
                      title={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 Caller Digital. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 hover:underline transition-colors duration-200 underline-offset-2">
                Terms & Conditions
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-700 hover:underline transition-colors duration-200 underline-offset-2">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 