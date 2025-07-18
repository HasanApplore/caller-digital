'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';
import Link from 'next/link';
// import ROICalculator from '../components/ROICalculator';

export default function AssistantPage() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [status, setStatus] = useState('Ready to start');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
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

  const startCall = async () => {
    try {
      setStatus('Starting call...');
      await vapiRef.current?.start("5b23c85b-1ee9-4acf-be45-d6e4e1f2888d");
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
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_1px,transparent_1px)] [background-size:16px_16px] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {typeof window !== 'undefined' && [...Array(20)].map((_, i) => {
            const seed = i * 0.1;
            const x = (Math.sin(seed) * 100); // -100 to 100 range
            const y = (Math.cos(seed) * 100); // -100 to 100 range
            const scale = 1 + (Math.sin(seed) * 0.5); // 0.5 to 1.5 range
            const duration = 10 + (Math.sin(seed) * 5); // 5-15 range
            const delay = Math.sin(seed) * 5; // 0-5 range
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
                initial={{
                  x: `${x}%`,
                  y: `${y}%`,
                  scale: scale,
                }}
                animate={{
                  y: [`${y}%`, `${y - 100}%`],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: delay,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-2xl border border-white/10"
          >
            <h1 className="text-4xl font-bold mb-8 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Talk to Our AI Assistant
            </h1>
            
            <div className="text-center mb-8">
              <motion.div
                className="inline-block mb-6"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <AnimatePresence>
                    {isSpeaking && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex space-x-1"
                      >
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1 h-6 bg-indigo-400 rounded-full"
                            animate={{
                              height: [6, 24, 6],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="text-xl font-medium text-gray-300">{status}</p>
                </div>
              </motion.div>

              {timeLeft !== null && (
                <div className="mb-6">
                  <div className="inline-block bg-gray-800/50 px-4 py-2 rounded-full">
                    <p className="text-gray-300 font-medium">
                      Time remaining: <span className="text-indigo-400">{formatTime(timeLeft)}</span>
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center space-x-4">
                {!isCallActive ? (
                  <motion.button
                    onClick={startCall}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-8 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <span className="relative z-10 flex items-center space-x-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m0 0a5 5 0 000 7.072m0-7.072a9 9 0 000 12.728" />
                      </svg>
                      <span className="text-lg font-semibold">Start Call</span>
                    </span>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={stopCall}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 px-8 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                    <span className="relative z-10 flex items-center space-x-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-lg font-semibold">End Call</span>
                    </span>
                  </motion.button>
                )}
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-white">Instructions</h2>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Click "Start Call" to begin your conversation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Allow microphone access when prompted</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Speak clearly into your microphone</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Call will automatically end after 5 minutes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Click "End Call" to manually end the conversation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ROI Calculator Section */}
          {/* (Section removed) */}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of AI voice solutions tailored to your needs. Let's discuss how we can help you achieve your goals.
            </p>
            <Link href="/contact">
              <motion.button
                className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Schedule a Demo</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 