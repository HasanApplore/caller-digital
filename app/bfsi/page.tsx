'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const faqs = [
  {
    question: 'How does AI improve customer experience in BFSI?',
    answer: 'AI enables instant query resolution, personalized financial advice, and 24/7 support, enhancing customer satisfaction and engagement in banking, financial services, and insurance.'
  },
  {
    question: 'Is Caller.Digital compliant with financial regulations?',
    answer: 'Yes, Caller.Digital’s AI solutions are designed with security and compliance in mind, supporting regulatory requirements such as KYC, AML, and data privacy.'
  },
  {
    question: 'Can AI help detect fraud in BFSI?',
    answer: 'Absolutely. AI-powered systems can monitor transactions in real time, flag suspicious activities, and help prevent fraud, reducing risk for both institutions and customers.'
  }
];

export default function BFSIPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>AI for BFSI Industry | Caller.Digital</title>
        <meta name="description" content="Transform banking, financial services, and insurance with AI voice bots and automation. Enhance compliance, customer service, and fraud detection with Caller.Digital." />
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
                BFSI Industry AI Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 max-w-2xl mx-auto"
              >
                The BFSI sector is embracing AI to deliver secure, compliant, and customer-centric services. Caller.Digital’s AI voice bots and automation tools empower banks, insurers, and financial institutions to streamline operations, improve compliance, and provide 24/7 support for clients and policyholders.
              </motion.p>
            </div>

            {/* Audio Recording */}
            <div className="flex justify-center mt-2 mb-10">
              <audio controls className="w-full max-w-md rounded-lg shadow-lg">
                <source src="/recordings/BFSI.m4a" type="audio/mp4" />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key AI Features for BFSI</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>24/7 automated customer support for banking and insurance</li>
                  <li>Instant account balance, transaction, and policy info</li>
                  <li>Automated loan, credit, and claim applications</li>
                  <li>Fraud detection and risk monitoring</li>
                  <li>Regulatory compliance and reporting automation</li>
                  <li>Personalized financial advice and product recommendations</li>
                  <li>Seamless integration with core banking and insurance systems</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-center min-h-[320px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits for BFSI Organizations</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>Enhance customer trust and satisfaction</li>
                  <li>Reduce operational costs and manual workload</li>
                  <li>Accelerate onboarding and claims processing</li>
                  <li>Improve compliance and reduce regulatory risk</li>
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