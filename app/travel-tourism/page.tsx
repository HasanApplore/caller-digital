'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '@/app/components/Footer';
import EnterpriseCTA from '@/app/components/EnterpriseCTA';

const faqs = [
  {
    question: 'How does AI improve travel and tourism experiences?',
    answer: 'AI enables instant booking, personalized recommendations, and 24/7 support, making travel planning and customer service seamless and efficient.'
  },
  {
    question: 'Is Caller.Digital secure for travel bookings?',
    answer: 'Yes, Caller.Digital’s AI solutions are built with security in mind, supporting safe transactions and data privacy for travelers and agencies.'
  },
  {
    question: 'Can AI help with itinerary management?',
    answer: 'Absolutely. AI can automate itinerary updates, send reminders, and provide real-time travel information, enhancing the overall travel experience.'
  }
];

export default function TravelTourismPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>AI for Travel & Tourism Industry | Caller.Digital</title>
        <meta name="description" content="Transform travel and tourism with AI voice bots and automation. Improve bookings, support, and experiences with Caller.Digital." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-full space-y-16">
            {/* SEO Intro */}
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
                  AI Solutions for Travel & Tourism
                  <br />
                  <span className="bg-gradient-to-r from-[#3fd0b6] via-[#4f8efc] to-[#8f5cf6] bg-clip-text text-transparent block mt-2 font-extrabold" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
                    Modern Customer Service
                  </span>
                </h1>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 max-w-2xl mx-auto"
              >
                The travel and tourism industry is embracing AI to deliver personalized journeys, instant bookings, and 24/7 support. Caller.Digital’s AI voice bots and automation tools help agencies, hotels, and operators enhance guest experiences and streamline operations.
              </motion.p>
            </div>

            {/* Audio Recording */}
            <div className="flex justify-center mt-2 mb-10">
              <audio controls className="w-full max-w-md rounded-lg shadow-lg">
                <source src="/recordings/TRAVEL_TOURISM.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* Expanded Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center min-h-[320px] hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-violet-600 transition-colors duration-300">Key AI Features for Travel & Tourism</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>24/7 automated support for travelers and guests</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Instant booking and itinerary management</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Personalized travel recommendations</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Real-time travel updates and alerts</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Multilingual support for global travelers</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Seamless integration with booking and CRM systems</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Automated feedback and review collection</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center min-h-[320px] hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-violet-600 transition-colors duration-300">Benefits for Travel & Tourism</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Enhance guest satisfaction and loyalty</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Increase bookings and revenue</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Reduce operational costs and manual workload</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Improve support and communication</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Boost brand reputation and online reviews</li>
                </ul>
              </motion.div>
            </div>

            {/* Collapsible FAQ Section */}
            <div className="mt-20 mb-8">
              <h2 className="text-2xl font-bold mb-10 text-gray-900">Frequently Asked Questions</h2>
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
          </div>
        </div>
      </main>
      <EnterpriseCTA />
      <Footer />
    </>
  );
} 