'use client';

import { motion } from 'framer-motion';
import { RiVoiceprintFill, RiCustomerService2Fill, RiBarChartBoxFill, RiGlobalFill, RiRobot2Fill, RiHeadphoneFill, RiDashboardFill, RiPieChartFill } from 'react-icons/ri';
import Footer from '@/app/components/Footer';

export default function Product() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Product features data
  const features = [
    {
      title: "Multilingual AI Voice",
      description: "Support customers in multiple languages with natural-sounding AI voices that adapt to regional accents and dialects.",
      icon: <RiVoiceprintFill className="w-8 h-8" />,
      highlights: [
        "20+ languages supported",
        "Regional accent adaptation",
        "Natural language processing"
      ]
    },
    {
      title: "Human-like TTS",
      description: "Advanced text-to-speech technology that creates natural, engaging conversations with proper intonation and emotion.",
      icon: <RiRobot2Fill className="w-8 h-8" />,
      highlights: [
        "Emotional intelligence",
        "Natural intonation",
        "Context-aware responses"
      ]
    },
    {
      title: "Escalation to Live Agent",
      description: "Seamless handoff to human agents when needed, with full context transfer and intelligent routing.",
      icon: <RiCustomerService2Fill className="w-8 h-8" />,
      highlights: [
        "Smart escalation triggers",
        "Context preservation",
        "Priority routing"
      ]
    },
    {
      title: "Multi-channel Support",
      description: "Unified customer experience across voice, chat, WhatsApp, and email channels with consistent service quality.",
      icon: <RiHeadphoneFill className="w-8 h-8" />,
      highlights: [
        "Voice & Chat integration",
        "WhatsApp business API",
        "Email automation"
      ]
    }
  ];

  // Analytics features data
  const analyticsFeatures = [
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with real-time insights and customizable reporting.",
      icon: <RiDashboardFill className="w-8 h-8" />,
      metrics: [
        "Real-time monitoring",
        "Custom report builder",
        "Performance trends"
      ]
    },
    {
      title: "Live Call Reports",
      description: "Detailed call analytics with transcriptions, duration metrics, and interaction summaries.",
      icon: <RiBarChartBoxFill className="w-8 h-8" />,
      metrics: [
        "Call transcriptions",
        "Duration analytics",
        "Interaction patterns"
      ]
    },
    {
      title: "CSAT Scores & Feedback",
      description: "Track customer satisfaction with detailed feedback analysis and trend monitoring.",
      icon: <RiPieChartFill className="w-8 h-8" />,
      metrics: [
        "Satisfaction trends",
        "Feedback analysis",
        "improvement suggestions"
      ]
    },
    {
      title: "Voice Quality & Sentiment",
      description: "Advanced voice quality monitoring and real-time sentiment analysis for better service.",
      icon: <RiGlobalFill className="w-8 h-8" />,
      metrics: [
        "Quality metrics",
        "Sentiment tracking",
        "Emotion detection"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-2 mt-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
                AI-Powered Voice Solutions for
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Modern Customer Service
                </motion.span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Transform your customer experience with intelligent voice AI that understands, responds, and learns
            </motion.p>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full blur-2xl" />
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Product Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge features that set our solution apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-purple-400/10 group-hover:from-teal-400/20 group-hover:via-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300">
                    <div className="text-violet-500 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="mr-2 text-violet-500"
                      >
                        •
                      </motion.div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Analytics & Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful analytics tools to measure and improve performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-purple-400/10 group-hover:from-teal-400/20 group-hover:via-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300">
                    <div className="text-violet-500 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="mr-2 text-violet-500"
                      >
                        •
                      </motion.div>
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your Customer Service?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Experience the power of AI-driven voice solutions with a personalized demo
              </p>
              <a
                href="https://calendly.com/vaibhav_applore/voice-ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-teal-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Demo Now
              </a>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-blue-50/50 to-purple-50/50 opacity-50" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 