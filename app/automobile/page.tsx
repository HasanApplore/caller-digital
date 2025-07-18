'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const faqs = [
  {
    question: 'How can AI improve dealership customer service?',
    answer: 'AI voice bots provide instant responses to customer queries, automate appointment bookings, and offer personalized recommendations, ensuring a seamless and efficient customer experience at every touchpoint.'
  },
  {
    question: 'What are the benefits of automated appointment scheduling in automotive?',
    answer: 'Automated scheduling reduces manual workload, minimizes missed appointments, and improves customer satisfaction by offering 24/7 self-service options for test drives, servicing, and consultations.'
  },
  {
    question: 'Can Caller.Digital integrate with my existing CRM or DMS?',
    answer: 'Yes, Caller.Digital’s AI solutions are designed for seamless integration with popular CRM and Dealer Management Systems, ensuring smooth data flow and enhanced operational efficiency.'
  }
];

export default function AutomobilePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>AI for Automobile Industry | Caller.Digital</title>
        <meta name="description" content="Discover how AI voice bots and automation are transforming the automobile industry. Improve customer service, streamline bookings, and boost satisfaction with Caller.Digital." />
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
                Automobile Industry AI Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 max-w-2xl mx-auto"
              >
                The automobile industry is rapidly evolving with the integration of AI-powered solutions. Caller.Digital’s voice bots and automation tools help dealerships, service centers, and manufacturers deliver seamless customer experiences, from booking test drives to handling service inquiries. Boost efficiency, customer satisfaction, and sales with our advanced AI technology tailored for automotive businesses.
              </motion.p>
            </div>

            {/* Audio Recording */}
            <div className="flex justify-center mt-2 mb-10">
              <audio controls className="w-full max-w-md rounded-lg shadow-lg">
                <source src="/recordings/AUTOMOBILE.m4a" type="audio/mp4" />
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key AI Features for Automotive</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>24/7 automated customer support for dealerships and service centers</li>
                  <li>Instant appointment scheduling and reminders</li>
                  <li>Real-time inventory and parts availability</li>
                  <li>Automated follow-ups for service and sales</li>
                  <li>Multilingual support for diverse customer bases</li>
                  <li>Personalized marketing and lead nurturing</li>
                  <li>Seamless integration with CRM and DMS systems</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-center min-h-[320px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits for the Automobile Industry</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>Reduce operational costs with automation</li>
                  <li>Increase customer satisfaction and loyalty</li>
                  <li>Accelerate sales cycles and service bookings</li>
                  <li>Enhance data-driven decision making</li>
                  <li>Improve after-sales support and retention</li>
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