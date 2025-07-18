'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';
import Head from 'next/head';
import UserDetailsModal from '../components/UserDetailsModal';
import Footer from '../components/Footer';

export default function FoodDeliveryDemoPage() {
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
        
        // Re-setup event listeners if needed
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
      await vapiRef.current.start("3b898f39-ac36-4593-9df7-5f2837125db2");
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
        <title>Food Delivery AI Demo | Caller.Digital</title>
        <meta name="description" content="Experience Food Delivery AI assistant demo with voice interaction capabilities for order management and customer support." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-5xl w-full space-y-16">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
              >
                Food Delivery AI Demo
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-700 max-w-2xl mx-auto"
              >
                Experience our Food Delivery AI assistant with natural voice interaction capabilities. Place orders, track deliveries, and get instant support through intelligent conversation.
              </motion.p>
            </div>

            {/* Call Controls */}
            <div className="flex flex-col items-center space-y-8">
              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg max-w-md w-full"
              >
                <div className="text-center space-y-4">
                  <div className="text-2xl font-semibold text-gray-900">Status: {status}</div>
                  {timeLeft !== null && (
                    <div className="text-lg text-gray-600">Time remaining: {formatTime(timeLeft)}</div>
                  )}
                  {isSpeaking && (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <span className="text-green-600 font-medium">Speaking...</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Control Buttons */}
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
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-center min-h-[320px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Food Delivery AI Features</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>Order placement and management</li>
                  <li>Real-time delivery tracking</li>
                  <li>Restaurant recommendations</li>
                  <li>Payment processing assistance</li>
                  <li>Customer support automation</li>
                  <li>Menu browsing and selection</li>
                  <li>24/7 order support</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-center min-h-[320px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">How It Works</h3>
                <ul className="space-y-4 text-gray-700 text-base">
                  <li>Click "Start Call" to begin</li>
                  <li>Ask about restaurants or place orders</li>
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