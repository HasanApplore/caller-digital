'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      <div className="text-center p-10 bg-white/80 rounded-2xl shadow-md border border-gray-100 max-w-lg w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4"
        >
          404
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold text-gray-800 mb-4"
        >
          Oops! This page could not be found.
        </motion.p>
        <p className="text-gray-600 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href="/">
          <motion.button 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Homepage
          </motion.button>
        </Link>
      </div>
    </main>
  );
} 