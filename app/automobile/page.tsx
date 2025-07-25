'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '@/app/components/Footer';
import EnterpriseCTA from '@/app/components/EnterpriseCTA';

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
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
                  AI Solutions for Automobile
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center min-h-[320px] hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-violet-600 transition-colors duration-300">Key AI Features for Automotive</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>24/7 automated customer support for dealerships and service centers</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Instant appointment scheduling and reminders</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Real-time inventory and parts availability</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Automated follow-ups for service and sales</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Multilingual support for diverse customer bases</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Personalized marketing and lead nurturing</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Seamless integration with CRM and DMS systems</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-center min-h-[320px] hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-violet-600 transition-colors duration-300">Benefits for the Automobile Industry</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Reduce operational costs with automation</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Increase customer satisfaction and loyalty</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Accelerate sales cycles and service bookings</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Enhance data-driven decision making</li>
                  <li className="flex items-start"><span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 mr-3"></span>Improve after-sales support and retention</li>
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