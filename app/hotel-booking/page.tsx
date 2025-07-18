'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';

export default function HotelBookingPage() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [status, setStatus] = useState('Ready to start');
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_KEY || "");

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
      await vapiRef.current?.start("a981fb09-1235-4c92-a94f-41bf87b5cb3d"); // Hotel Booking assistant ID
    } catch (error) {
      setStatus('Failed to start call');
    }
  };

  const stopCall = () => {
    try {
      setStatus('Ending call...');
      vapiRef.current?.stop();
    } catch (error) {
      setStatus('Error ending call');
    }
  };

  return (
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
              Hospitality Demo
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700"
            >
              Experience our AI-powered Hospitality assistant
            </motion.p>
          </div>
          {/* Remove any status card and replace the Try button/call controls with: */}
          <div className="flex justify-center mt-8">
            <audio controls className="w-full max-w-md rounded-lg shadow-lg">
              <source src="/recordings/HOSPITALITY.m4a" type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Assistance</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Room availability and rates
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Booking and cancellation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Special requests
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 booking assistance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Refund and complaint handling
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Live chat support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 