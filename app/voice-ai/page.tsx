'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';
import Link from 'next/link';
import UserDetailsModal from '../components/UserDetailsModal';
import Footer from '../components/Footer';

export default function DemoPage() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [status, setStatus] = useState('Ready to start');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize Vapi with your public key
    vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_KEY || "");

    // Set up event listeners
    vapiRef.current.on('call-start', () => {
      setStatus('Call connected');
      setIsCallActive(true);
      // Start 5-minute timer
      setTimeLeft(300); // 5 minutes in seconds
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === null || prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            stopCall();
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    });

    vapiRef.current.on('call-end', () => {
      setStatus('Call ended');
      setIsCallActive(false);
      setIsSpeaking(false);
      setTimeLeft(null);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    });

    vapiRef.current.on('speech-start', () => {
      setIsSpeaking(true);
    });

    vapiRef.current.on('speech-end', () => {
      setIsSpeaking(false);
    });

    vapiRef.current.on('error', (error) => {
      console.error('Vapi error:', error);
      setStatus('Error occurred');
      setIsSpeaking(false);
      setTimeLeft(null);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    });

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleStartCallClick = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (userData: { name: string; email: string; phone_number: string }) => {
    try {
      setIsLoading(true);
      
      // Store user details in database
      const response = await fetch('/api/demo-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to save user details');
      }

      // Close modal and start call
      setIsModalOpen(false);
      await startCall();
    } catch (error) {
      console.error('Error saving user details:', error);
      setStatus('Failed to save user details');
    } finally {
      setIsLoading(false);
    }
  };

  const startCall = async () => {
    try {
      setStatus('Starting call...');
      
      // Ensure Vapi is initialized
      if (!vapiRef.current) {
        console.log('Initializing Vapi...');
        vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_KEY || "");
        
        // Re-setup event listeners
        vapiRef.current.on('call-start', () => {
          setStatus('Call connected');
          setIsCallActive(true);
          setTimeLeft(300);
          timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
              if (prev === null || prev <= 1) {
                if (timerRef.current) clearInterval(timerRef.current);
                stopCall();
                return null;
              }
              return prev - 1;
            });
          }, 1000);
        });

        vapiRef.current.on('call-end', () => {
          setStatus('Call ended');
          setIsCallActive(false);
          setIsSpeaking(false);
          setTimeLeft(null);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        });

        vapiRef.current.on('speech-start', () => {
          setIsSpeaking(true);
        });

        vapiRef.current.on('speech-end', () => {
          setIsSpeaking(false);
        });

        vapiRef.current.on('error', (error) => {
          console.error('Vapi error:', error);
          setStatus('Error occurred');
          setIsSpeaking(false);
          setTimeLeft(null);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        });
      }
      
      console.log('Starting Vapi call...');
      await vapiRef.current.start("5b23c85b-1ee9-4acf-be45-d6e4e1f2888d");
    } catch (error) {
      console.error('Error starting call:', error);
      setStatus('Failed to start call');
    }
  };

  const stopCall = () => {
    try {
      setStatus('Ending call...');
      vapiRef.current?.stop();
    } catch (error) {
      console.error('Error ending call:', error);
      setStatus('Error ending call');
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
            >
              AI Assistant Demo
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700"
            >
              Experience our AI-powered virtual assistant
            </motion.p>
          </div>

          {/* Call Status */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
            <div className="text-center space-y-4">
              <div className="text-lg text-gray-700">
                Status: <span className="text-indigo-500 font-semibold">{status}</span>
              </div>
              {timeLeft !== null && (
                <div className="text-lg text-gray-700">
                  Time Remaining: <span className="text-indigo-500 font-semibold">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
                </div>
              )}
              {isSpeaking && (
                <div className="flex justify-center">
                  <div className="animate-pulse text-indigo-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call Controls */}
          <div className="flex justify-center space-x-4">
            {!isCallActive ? (
              <motion.button
                onClick={handleStartCallClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl hover:from-teal-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 group text-lg font-semibold"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Start Call</span>
                </span>
              </motion.button>
            ) : (
              <motion.button
                onClick={stopCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 px-8 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 group text-lg font-semibold"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>End Call</span>
                </span>
              </motion.button>
            )}
          </div>

          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Natural conversation flow
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Contextual understanding
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time responses
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Capabilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-turn conversations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent task handling
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized assistance
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Integrations Section */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CRM */}
              <div>
                <svg className="w-5 h-5 text-blue-400 inline-block mr-2 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 3v4m0 0a4 4 0 01-4 4H4m8-4a4 4 0 004 4h4" /></svg>
                <span className="text-lg font-semibold text-blue-700">CRM</span>
                <p className="text-gray-600 text-sm mt-2 mb-2">Integrate your AI voice assistant with leading CRM platforms like Hubspot, Leadsquared, and Salesforce to automate lead management, track customer interactions, and deliver personalized customer experiences. CRM integrations enable seamless sales automation, real-time data sync, and improved customer support workflows for enterprises.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Hubspot</li>
                  <li>Leadsquared</li>
                  <li>Salesforce</li>
                </ul>
              </div>
              {/* ERP */}
              <div>
                <svg className="w-5 h-5 text-purple-400 inline-block mr-2 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>
                <span className="text-lg font-semibold text-purple-700">ERP</span>
                <p className="text-gray-600 text-sm mt-2 mb-2">Connect your AI platform to top ERP systems like SAP, Oracle, and Salesforce to automate business processes, synchronize enterprise data, and streamline operations. ERP integrations empower organizations with real-time analytics, inventory management, and financial automation for digital transformation.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>SAP</li>
                  <li>Oracle</li>
                  <li>Salesforce</li>
                </ul>
              </div>
              {/* Data Sources */}
              <div>
                <svg className="w-5 h-5 text-green-400 inline-block mr-2 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                <span className="text-lg font-semibold text-green-700">Data Sources</span>
                <p className="text-gray-600 text-sm mt-2 mb-2">Leverage integrations with Databricks, SQL databases, MongoDB, and Amazon S3 to power your AI voice assistant with real-time data, advanced analytics, and scalable storage. Data source integrations enable intelligent automation, reporting, and personalized responses based on up-to-date business information.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Databricks</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>S3</li>
                </ul>
              </div>
              {/* Telephony */}
              <div>
                <svg className="w-5 h-5 text-teal-400 inline-block mr-2 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-lg font-semibold text-teal-700">Telephony</span>
                <p className="text-gray-600 text-sm mt-2 mb-2">Integrate with leading telephony providers like Plivo, Telnyx, and Twilio to enable AI-powered voice calls, SMS automation, and omnichannel customer engagement. Telephony integrations ensure reliable communication, call routing, and scalable voice bot deployments for enterprises.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Plivo</li>
                  <li>Telnyx</li>
                  <li>Twilio</li>
                </ul>
              </div>
              {/* Email */}
              <div>
                <svg className="w-5 h-5 text-pink-400 inline-block mr-2 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4" /></svg>
                <span className="text-lg font-semibold text-pink-700">Email</span>
                <p className="text-gray-600 text-sm mt-2 mb-2">Connect your AI assistant to Gmail and Outlook for automated email processing, smart notifications, and seamless workflow integration. Email integrations help streamline communication, automate responses, and improve productivity for support and sales teams.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Gmail</li>
                  <li>Outlook</li>
                </ul>
              </div>
              {/* Knowledge Base */}
              <div>
                <svg className="w-5 h-5 text-yellow-400 inline-block mr-2 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /></svg>
                <span className="text-lg font-semibold text-yellow-700">Knowledge Base</span>
                <p className="text-gray-600 text-sm mt-2 mb-2">Empower your AI voice assistant with knowledge base integrations for PDF, CSV, and TXT files. Instantly access, search, and extract information from documents to provide accurate answers, automate support, and enhance self-service for customers and employees.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>PDF</li>
                  <li>CSV</li>
                  <li>TXT</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Details Modal */}
      <UserDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
                  isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  );
} 