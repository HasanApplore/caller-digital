'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

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

  return (
    <>
      <Head>
        <title>AI for Real Estate Industry | Caller.Digital</title>
        <meta name="description" content="Transform real estate with AI voice bots and automation. Improve property management, customer service, and operations with Caller.Digital." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-full space-y-16">
            {/* SEO Intro */}
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
              >
                Real Estate Industry AI Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 max-w-2xl mx-auto"
              >
                The real estate industry is leveraging AI to streamline property management, enhance customer service, and automate routine tasks. Caller.Digital’s AI voice bots and automation tools help real estate professionals improve efficiency and deliver better client experiences.
              </motion.p>
            </div>

            {/* Audio Recording */}
            <div className="flex justify-center mt-2 mb-10">
              <audio controls className="w-full max-w-md rounded-lg shadow-lg">
                <source src="/recordings/REAL_ESTATE.m4a" type="audio/mp4" />
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* Expanded Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-center min-h-[320px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key AI Features for Real Estate</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>24/7 automated property inquiries and support</li>
                  <li>Instant property information and availability</li>
                  <li>Automated appointment scheduling and reminders</li>
                  <li>Tenant and maintenance request management</li>
                  <li>Property listing updates and notifications</li>
                  <li>Seamless integration with CRM and property management systems</li>
                  <li>Automated follow-ups and lead nurturing</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-center min-h-[320px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits for Real Estate</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>Increase property inquiries and conversions</li>
                  <li>Improve tenant satisfaction and retention</li>
                  <li>Reduce manual workload and operational costs</li>
                  <li>Enhance customer service and response times</li>
                  <li>Boost agent productivity and efficiency</li>
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
    </>
  );
} 