'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const faqs = [
  {
    question: 'How does AI improve insurance customer service?',
    answer: 'AI voice bots provide instant policy information, automate claims processing, and offer 24/7 support, improving customer satisfaction and operational efficiency for insurers.'
  },
  {
    question: 'Is Caller.Digital secure and compliant for insurance data?',
    answer: 'Yes, Caller.Digital’s AI solutions are built with security and compliance in mind, supporting data privacy and regulatory requirements for the insurance industry.'
  },
  {
    question: 'Can AI help with claims processing?',
    answer: 'Absolutely. AI can automate claim intake, status updates, and document verification, reducing manual workload and speeding up the claims process for both customers and insurers.'
  }
];

export default function InsurancePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>AI for Insurance Industry | Caller.Digital</title>
        <meta name="description" content="Revolutionize insurance with AI voice bots and automation. Improve claims processing, customer service, and compliance with Caller.Digital." />
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
                Insurance Industry AI Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 max-w-2xl mx-auto"
              >
                The insurance industry is being transformed by AI-powered automation. Caller.Digital’s voice bots help insurers deliver fast, accurate, and personalized service, from policy information to claims processing, while ensuring compliance and data security.
              </motion.p>
            </div>

            {/* Audio Recording */}
            <div className="flex justify-center mt-2 mb-10">
              <audio controls className="w-full max-w-md rounded-lg shadow-lg">
                <source src="/recordings/INSURANCE.m4a" type="audio/mp4" />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key AI Features for Insurance</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>24/7 automated customer support for policyholders</li>
                  <li>Instant policy information and document delivery</li>
                  <li>Automated claims intake and status updates</li>
                  <li>Fraud detection and risk assessment</li>
                  <li>Regulatory compliance and reporting automation</li>
                  <li>Personalized product recommendations</li>
                  <li>Seamless integration with insurance management systems</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-center min-h-[320px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits for Insurers</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>Reduce operational costs and manual workload</li>
                  <li>Accelerate claims processing and policy issuance</li>
                  <li>Enhance customer satisfaction and retention</li>
                  <li>Improve compliance and data security</li>
                  <li>Boost cross-sell and upsell opportunities</li>
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