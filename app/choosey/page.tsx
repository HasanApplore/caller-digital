'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';
import Head from 'next/head';
import UserDetailsModal from '../components/UserDetailsModal';
import Footer from '../components/Footer';

export default function ChooseyPage() {
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
      await vapiRef.current?.start("7b5bc3ee-ff90-4860-9423-1cb828050008");
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <Head>
        <title>Choosey Demo - AI Voice Assistant | Caller.Digital</title>
        <meta name="description" content="Experience our AI voice assistant for Choosey. Real-time voice interaction with advanced AI technology." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

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
                Choosey Demo
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700"
              >
                Experience our AI-powered Choosey assistant
              </motion.p>
            </div>

            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${isCallActive ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
                  <span className="text-lg font-medium text-gray-700">{status}</span>
                </div>
                
                {timeLeft !== null && (
                  <div className="text-2xl font-bold text-blue-600">
                    {formatTime(timeLeft)}
                  </div>
                )}

                {isSpeaking && (
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-8 bg-blue-500 rounded animate-pulse"></div>
                      <div className="w-2 h-6 bg-blue-400 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-10 bg-blue-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-7 bg-blue-400 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      <div className="w-2 h-9 bg-blue-500 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-4"
              >
                {!isCallActive ? (
                  <button
                    onClick={handleStartCallClick}
                    disabled={status === 'Starting call...'}
                    className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-teal-500 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'Starting call...' ? 'Starting...' : 'Start Call'}
                  </button>
                ) : (
                  <button
                    onClick={stopCall}
                    className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-red-600 transition-all duration-300"
                  >
                    End Call
                  </button>
                )}
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time voice conversation</li>
                  <li>• Natural language processing</li>
                  <li>• Instant AI responses</li>
                  <li>• 5-minute demo session</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">📞 How to Use</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>Click "Start Call" to begin</li>
                  <li>Speak naturally with the AI</li>
                  <li>Get instant voice responses</li>
                  <li>Conversation continues for 5 minutes</li>
                  <li>Click "End Call" to finish</li>
                </ul>
              </motion.div>
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