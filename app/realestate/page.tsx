'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '@/app/components/Footer';
import EnterpriseCTA from '@/app/components/EnterpriseCTA';
import Link from 'next/link';

const faqs = [
  {
    question: 'How does AI improve real estate operations?',
    answer: 'AI streamlines property management, automates customer inquiries, and provides instant responses to potential buyers and tenants, improving efficiency and customer satisfaction.'
  },
  {
    question: 'Is Caller.Digital secure for real estate transactions?',
    answer: 'Yes, Caller.Digital’s AI solutions are built with security in mind, supporting safe property inquiries and data privacy for real estate professionals and clients.'
  },
  {
    question: 'Can AI help with property management?',
    answer: 'Absolutely. AI can automate tenant communications, maintenance requests, and property inquiries, making property management more efficient and responsive.'
  }
];

export default function RealEstatePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Head>
        <title>AI for Real Estate Industry | Caller.Digital</title>
        <meta name="description" content="Transform real estate with AI voice bots and automation. Improve property management, customer service, and operations with Caller.Digital." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/ezgif.com-gif-maker-3-2-768x352.jpg" 
            alt="AI Voice Technology Digital Illustration" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[480px]">
            <div className="lg:col-span-1">
            {/* Left Section - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
                             <motion.div
                 initial={{ scale: 0.95 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 0.5 }}
               >
                 {/* Breadcrumb */}
               <motion.div 
                 className="text-xs text-gray-300 mb-6"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
               >
                 <Link href="/" className="hover:text-purple-400 transition-colors duration-200">
                   Home
                 </Link>
                 {' > '} 
                 <Link href="/" className="hover:text-purple-400 transition-colors duration-200">
                   Industries
                 </Link>
                 {' > '} Real Estate
               </motion.div>
                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white leading-tight">
                    Transform Real Estate Engagement with
                   <motion.span 
                     className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.3, duration: 0.5 }}
                   >
                     AI Voice Automation
                   </motion.span>
                 </h1>
               </motion.div>
               <motion.p 
                 className="text-base md:text-lg text-gray-200 mb-3 leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.6 }}
               >
                 Automate property lead calls, site visit confirmations, and follow-ups with human-like voice bots — available 24/7 in multiple languages.
               </motion.p>
               
              
               
               {/* Call to Action Buttons */}
               <motion.div 
                 className="flex flex-col sm:flex-row gap-3"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6, duration: 0.6 }}
               >
                 <motion.button 
                   className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-teal-400 hover:shadow-xl hover:scale-105"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                   Book a Demo
                 </motion.button>
                 <motion.button 
                   className="border-2 border-white text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:border-purple-400 hover:text-purple-400 hover:scale-105"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => {
                     // Add modal or video functionality here
                     console.log('Talk to Experts clicked');
                   }}
                 >
                   Talk to Experts
                 </motion.button>
               </motion.div>
            </motion.div>
            </div>
          </div>
        </div>

        {/* Subtle background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full blur-2xl" />
        </motion.div>
        
            
      </section>

      {/* Why Traditional Real Estate Engagement Fails Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Traditional Real Estate {' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">                    
                     Engagement Fails
                   </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
          </motion.div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Missed follow-ups due to overwhelmed sales teams</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Missed follow-ups due to overwhelmed sales teams</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">High lead leakage from portals</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">High lead leakage from portals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Manual effort in scheduling and verification</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Manual effort in scheduling and verification</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Delays in response time and site visit coordination</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Delays in response time and site visit coordination</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI That Works Like Your Smartest Sales Agent Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI That Works Like Your {' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
                Smartest Sales Agent
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Auto-call and qualify leads</h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">From 99acres, MagicBricks, etc.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Confirm & reschedule visits</h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Site visits coordination</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Collect buyer preferences</h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">In natural language</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Escalate hot leads</h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">To sales agents in real time</p>
              </motion.div>
            </div>

            {/* Right Side - Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <img 
                    src="/diverse-businesspeople-having-meeting.jpg" 
                    alt="Real Estate Team Meeting" 
                    className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative group"
                >
                  <img 
                    src="/automated_customer_service.jpg" 
                    alt="AI Customer Service" 
                    className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative group"
              >
                <img 
                  src="/omnichannel.jpg" 
                  alt="Omnichannel Communication" 
                  className="w-full h-32 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features for Real Estate Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features for Real Estate {' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
                Solutions
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">Multilingual voice bots</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm text-center">Support multiple languages and regional dialects to engage with diverse buyer demographics effectively.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">CRM Integration</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm text-center">Seamless integration with existing CRM systems and major property listing portals for unified data management.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">Sentiment analysis</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm text-center">Advanced AI analyzes conversation tone and sentiment to identify high-intent buyers and prioritize follow-ups.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">Call reports & CSAT</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm text-center">Comprehensive call analytics, customer satisfaction metrics, and detailed performance reports for continuous improvement.</p>
            </motion.div>
          </div>
        </div>
      </section>
 
       {/* Real-World Use Cases Section */}
       <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Real-World Use Cases {' '}
                <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block">
                  for Real Estate
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
            </motion.div>
            
            <div className="space-y-12">
              {/* Use Case 1: Inbound Lead Follow-up */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Inbound lead follow-up from property portals</h3>
                        <p className="text-teal-600 font-medium">Instant Response System</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Automatically engage with potential buyers who inquire through 99acres, MagicBricks, and other property portals with instant responses and qualification.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">24/7 Availability</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Multi-language Support</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border-l-4 border-teal-500">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-teal-700">Lead Response Time</span>
                        <span className="text-2xl font-bold text-teal-600">30s</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Qualification Rate</span>
                          <span className="font-semibold text-gray-900">85%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Portal Integration</span>
                          <span className="font-semibold text-gray-900">10+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Use Case 2: Auto-reminders for site visits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Auto-reminders for site visits</h3>
                        <p className="text-blue-600 font-medium">Smart Scheduling System</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Send automated reminders and confirmations for property visits, handle rescheduling requests, and ensure optimal coordination between buyers and agents.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Smart Notifications</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Reschedule Handling</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-blue-700">Visit Confirmation Rate</span>
                        <span className="text-2xl font-bold text-blue-600">92%</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">No-show Reduction</span>
                          <span className="font-semibold text-gray-900">60%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Agent Time Saved</span>
                          <span className="font-semibold text-gray-900">4hrs/day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Use Case 3: Pre-launch campaign calling */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Pre-launch campaign calling</h3>
                        <p className="text-purple-600 font-medium">Proactive Lead Generation</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Generate excitement and pre-qualify leads before property launches by proactively calling potential buyers and collecting their preferences.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Early Bird Offers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Preference Collection</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-l-4 border-purple-500">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-purple-700">Pre-launch Interest</span>
                        <span className="text-2xl font-bold text-purple-600">78%</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Early Bookings</span>
                          <span className="font-semibold text-gray-900">45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Campaign Reach</span>
                          <span className="font-semibold text-gray-900">10K+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Use Case 4: Post-visit feedback collection */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Post-visit feedback collection</h3>
                        <p className="text-green-600 font-medium">Continuous Improvement</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Automatically collect feedback and satisfaction scores after property visits to improve service quality and identify areas for enhancement.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Real-time Analytics</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Quality Insights</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-500">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-green-700">Customer Satisfaction</span>
                        <span className="text-2xl font-bold text-green-600">4.8/5</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Response Rate</span>
                          <span className="font-semibold text-gray-900">89%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Improvement Areas</span>
                          <span className="font-semibold text-gray-900">12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What Our{' '}
                <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Trusted by leading enterprises across industries
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Lacefield",
                  role: "Co-founder, XYZ",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                  quote: "Caller.Digital transformed our customer support operations. The AI voice bots are incredibly natural and our customer satisfaction scores have improved dramatically.",
                  rating: 5
                },
                {
                  name: "Harry Callum",
                  role: "Manager",
                  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote: "The automation capabilities are game-changing. We've scaled our support without increasing headcount, and the quality has never been better.",
                  rating: 5
                },
                {
                  name: "Mason Robert",
                  role: "Co-founder, XYZ",
                  avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                  quote: "Implementation was seamless and the results were immediate. Our team loves the new system and our customers appreciate the 24/7 availability.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 text-xs leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* User Profile */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-gray-600 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Snapshot Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full border border-teal-200/50 mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-teal-700">Live Analytics</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Analytics{' '}
                <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Snapshot
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real-time insights from our AI voice automation platform in the real estate industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Modern Analytics Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Calls Made Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Calls Made</h3>
                          <p className="text-xs text-gray-600">Total automated calls</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-teal-600">15,847</div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L12 10.586 14.586 8H12z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-semibold text-green-600">+12%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hot Leads Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Hot Leads</h3>
                          <p className="text-xs text-gray-600">High-intent prospects</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-red-600">2,341</div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L12 10.586 14.586 8H12z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-semibold text-green-600">+8%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Languages Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">12</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Languages</h3>
                          <p className="text-xs text-gray-600">Multilingual support</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-blue-600">12</div>
                      <div className="text-xs text-blue-600 font-medium">Regional dialects</div>
                    </div>
                  </div>
                </motion.div>

                {/* Conversion Rate Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Conversion Rate</h3>
                          <p className="text-xs text-gray-600">Lead to customer</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-bold text-purple-600">23.4%</div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L12 10.586 14.586 8H12z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-semibold text-green-600">+5%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Modern Chart */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl min-h-[600px] flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Overview</h3>
                    <p className="text-sm text-gray-600">Monthly comparison of key metrics</p>
                  </div>
                  
                  {/* Advanced Analytics Charts - Full Height Layout */}
                  <div className="flex-1 flex flex-col space-y-8">
                    {/* Bar Chart - Monthly Performance */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Monthly Performance</span>
                        <span className="text-xs text-gray-500">Last 6 months</span>
                      </div>
                      <div className="relative h-40 flex items-end justify-between space-x-3">
                        {[
                          { value: 65, color: "from-teal-400 to-teal-600", label: "Jan" },
                          { value: 78, color: "from-teal-400 to-teal-600", label: "Feb" },
                          { value: 85, color: "from-teal-400 to-teal-600", label: "Mar" },
                          { value: 92, color: "from-teal-400 to-teal-600", label: "Apr" },
                          { value: 88, color: "from-teal-400 to-teal-600", label: "May" },
                          { value: 95, color: "from-teal-400 to-teal-600", label: "Jun" }
                        ].map((bar, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${bar.value}%` }}
                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                            className={`w-10 bg-gradient-to-t ${bar.color} rounded-t-xl relative group cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg`}
                          >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-3 py-2 rounded-lg shadow-md">
                              {bar.value}%
                            </div>
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 font-medium">
                              {bar.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Line Chart - Lead Quality Trend with Axes */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Lead Quality Trend</span>
                        <span className="text-xs text-gray-500">Conversion rate</span>
                      </div>
                      <div className="relative h-36">
                        <svg className="w-full h-full" viewBox="0 0 300 144">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
                            </linearGradient>
                            <linearGradient id="lineGradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981"/>
                              <stop offset="100%" stopColor="#3b82f6"/>
                            </linearGradient>
                          </defs>
                          
                          {/* Y-axis */}
                          <line x1="25" y1="15" x2="25" y2="129" stroke="#e5e7eb" strokeWidth="1.5"/>
                          {/* X-axis */}
                          <line x1="25" y1="129" x2="275" y2="129" stroke="#e5e7eb" strokeWidth="1.5"/>
                          
                          {/* Y-axis labels */}
                          <text x="18" y="20" textAnchor="end" className="text-xs fill-gray-500 font-medium">100%</text>
                          <text x="18" y="52" textAnchor="end" className="text-xs fill-gray-500 font-medium">75%</text>
                          <text x="18" y="84" textAnchor="end" className="text-xs fill-gray-500 font-medium">50%</text>
                          <text x="18" y="116" textAnchor="end" className="text-xs fill-gray-500 font-medium">25%</text>
                          <text x="18" y="134" textAnchor="end" className="text-xs fill-gray-500 font-medium">0%</text>
                          
                          {/* Grid lines */}
                          <line x1="25" y1="52" x2="275" y2="52" stroke="#f3f4f6" strokeWidth="0.5"/>
                          <line x1="25" y1="84" x2="275" y2="84" stroke="#f3f4f6" strokeWidth="0.5"/>
                          <line x1="25" y1="116" x2="275" y2="116" stroke="#f3f4f6" strokeWidth="0.5"/>
                          
                          {/* Area fill */}
                          <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            d="M25,129 L65,90 L105,58 L145,45 L185,32 L225,23 L265,15 L275,10 L275,129 Z"
                            fill="url(#lineGradient)"
                            stroke="none"
                          />
                          
                          {/* Main line */}
                          <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.7 }}
                            d="M25,129 L65,90 L105,58 L145,45 L185,32 L225,23 L265,15 L275,10"
                            stroke="url(#lineGradientMain)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Data points */}
                          {[
                            { x: 25, y: 129 }, { x: 65, y: 90 }, { x: 105, y: 58 },
                            { x: 145, y: 45 }, { x: 185, y: 32 }, { x: 225, y: 23 },
                            { x: 265, y: 15 }, { x: 275, y: 10 }
                          ].map((point, index) => (
                            <motion.circle
                              key={index}
                              cx={point.x} cy={point.y} r="5"
                              fill="#10b981"
                              stroke="#ffffff"
                              strokeWidth="2"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                            />
                          ))}
                        </svg>
                        <div className="absolute top-3 right-3 text-sm font-semibold text-green-600 bg-green-100 px-4 py-2 rounded-full shadow-md">↑ 23.4%</div>
                      </div>
                    </div>

                    {/* Enhanced Donut Chart - Language Distribution */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700">Language Distribution</span>
                        <span className="text-xs text-gray-500">Top 4 languages</span>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="relative w-24 h-24">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8"/>
                            
                            {/* Language segments */}
                            <motion.circle
                              cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="8"
                              strokeDasharray="283" strokeDashoffset="283"
                              initial={{ strokeDashoffset: 283 }}
                              whileInView={{ strokeDashoffset: 155 }}
                              transition={{ duration: 1.5, delay: 1 }}
                              strokeLinecap="round"
                              transform="rotate(-90 50 50)"
                            />
                            <motion.circle
                              cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeWidth="8"
                              strokeDasharray="283" strokeDashoffset="283"
                              initial={{ strokeDashoffset: 283 }}
                              whileInView={{ strokeDashoffset: 198 }}
                              transition={{ duration: 1.5, delay: 1.2 }}
                              strokeLinecap="round"
                              transform="rotate(-90 50 50)"
                            />
                            <motion.circle
                              cx="50" cy="50" r="45" fill="none" stroke="#8b5cf6" strokeWidth="8"
                              strokeDasharray="283" strokeDashoffset="283"
                              initial={{ strokeDashoffset: 283 }}
                              whileInView={{ strokeDashoffset: 240 }}
                              transition={{ duration: 1.5, delay: 1.4 }}
                              strokeLinecap="round"
                              transform="rotate(-90 50 50)"
                            />
                            <motion.circle
                              cx="50" cy="50" r="45" fill="none" stroke="#6b7280" strokeWidth="8"
                              strokeDasharray="283" strokeDashoffset="283"
                              initial={{ strokeDashoffset: 283 }}
                              whileInView={{ strokeDashoffset: 255 }}
                              transition={{ duration: 1.5, delay: 1.6 }}
                              strokeLinecap="round"
                              transform="rotate(-90 50 50)"
                            />
                            
                            {/* Center text */}
                            <text x="50" y="50" textAnchor="middle" dy="0.3em" className="text-base font-bold fill-gray-700">12</text>
                            <text x="50" y="62" textAnchor="middle" className="text-xs fill-gray-500">Languages</text>
                          </svg>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between group">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-teal-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">English</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">45%</span>
                          </div>
                          <div className="flex items-center justify-between group">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Hindi</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">30%</span>
                          </div>
                          <div className="flex items-center justify-between group">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Spanish</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">15%</span>
                          </div>
                          <div className="flex items-center justify-between group">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-gray-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Others</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-2 mt-8"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
                  AI Solutions for Real Estate
                  <br />
                  <span className="bg-gradient-to-r from-[#3fd0b6] via-[#4f8efc] to-[#8f5cf6] bg-clip-text text-transparent block mt-2 font-extrabold" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
                    Modern Customer Service
                  </span>
                </h1>
              </motion.div>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                The real estate industry is leveraging AI to streamline property management, enhance customer service, and automate routine tasks. Caller.Digital’s AI voice bots and automation tools help real estate professionals improve efficiency and deliver better client experiences.
              </motion.p>
            </motion.div>
          </div>
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full blur-2xl" />
          </motion.div>
        </section>

        {/* Audio Recording Section */}
        <section className="pt-4 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mt-2 mb-10">
              <audio controls className="w-full max-w-md rounded-lg shadow-lg">
                <source src="/recordings/REAL_ESTATE.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="pt-4 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center min-h-[320px] hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-violet-600 transition-colors duration-300">Key AI Features for Real Estate</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>24/7 automated property inquiries and support</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Instant property information and availability</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Automated appointment scheduling and reminders</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Tenant and maintenance request management</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Property listing updates and notifications</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Seamless integration with CRM and property management systems</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Automated follow-ups and lead nurturing</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center min-h-[320px] hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-violet-600 transition-colors duration-300">Benefits for Real Estate</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Increase property inquiries and conversions</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Improve tenant satisfaction and retention</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Reduce manual workload and operational costs</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Enhance customer service and response times</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Boost agent productivity and efficiency</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

       

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl bg-white shadow-sm transition-all">
                  <button
                    className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none hover:bg-blue-50 transition-colors rounded-xl group"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="font-semibold text-lg text-indigo-700 select-none">{faq.question}</span>
                    <svg
                      className={`w-7 h-7 ml-4 transform transition-transform duration-200 text-indigo-400 group-hover:text-indigo-600 ${openIndex === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === idx && (
                    <div id={`faq-panel-${idx}`} className="px-8 pb-6 text-gray-700 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <EnterpriseCTA />
        <Footer />
      </main>
    </>
  );
} 