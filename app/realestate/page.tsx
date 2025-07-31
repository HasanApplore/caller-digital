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
      <section className="py-16 bg-white">
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