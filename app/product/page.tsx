'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { RiVoiceprintFill, RiCustomerService2Fill, RiBarChartBoxFill, RiGlobalFill, RiRobot2Fill, RiHeadphoneFill, RiDashboardFill, RiPieChartFill, RiTimeLine, RiShieldCheckLine, RiBrainLine, RiBarChartLine, RiCustomerServiceLine, RiGlobalLine } from 'react-icons/ri';
import Footer from '@/app/components/Footer';
import EnterpriseCTA from '@/app/components/EnterpriseCTA';

export default function Product() {
  // State for FAQ and Blog
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState<any>(null);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Product features data
  const features = [
    {
      title: "Multilingual AI Voice Bots",
      description: "Engage in regional and global languages with hyper-realistic speech synthesis.",
      icon: <RiVoiceprintFill className="w-8 h-8" />,
      highlights: [
        "20+ languages supported",
        "Regional accent adaptation",
        "Natural language processing"
      ]
    },
    {
      title: "Human-Like Text-to-Speech (TTS)",
      description: "Speak naturally with tonal modulation, pause control, and emotional intelligence.",
      icon: <RiRobot2Fill className="w-8 h-8" />,
      highlights: [
        "Emotional intelligence",
        "Natural intonation",
        "Context-aware responses"
      ]
    },
    {
      title: "Smart Escalation to Live Agents",
      description: "Seamlessly shift to human reps when complexity increases, preserving context.",
      icon: <RiCustomerService2Fill className="w-8 h-8" />,
      highlights: [
        "Smart escalation triggers",
        "Context preservation",
        "Priority routing"
      ]
    },
    {
      title: "Intent Detection & Workflow Automation",
      description: "Trigger actions, follow-ups, and routing based on voice input in real-time.",
      icon: <RiHeadphoneFill className="w-8 h-8" />,
      highlights: [
        "Real-time intent recognition",
        "Automated workflow triggers",
        "Smart action routing"
      ]
    },
    {
      title: "Omnichannel Communication Engine",
      description: "Integrate voice, WhatsApp, chat, and email for unified customer experiences.",
      icon: <RiGlobalLine className="w-8 h-8" />,
      highlights: [
        "Voice & Chat integration",
        "WhatsApp business API",
        "Email automation"
      ]
    },
    {
      title: "Conversational Analytics Suite",
      description: "Track CSAT, sentiment, voice quality, and feedback in real time.",
      icon: <RiBarChartLine className="w-8 h-8" />,
      highlights: [
        "Real-time CSAT tracking",
        "Sentiment analysis",
        "Voice quality metrics"
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
      <section className="relative py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/ezgif.com-gif-maker-3-2-768x352.jpg" 
            alt="AI Voice Technology Digital Illustration" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[480px]">
            <div className="lg:col-span-1">
            {/* Left Section - Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
                             <motion.div
                 initial={{ scale: 0.95 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 0.5 }}
               >
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                   AI-Powered Voice Automation
                   <br />
                   <motion.span 
                     className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.3, duration: 0.5 }}
                   >
                     Platform Built for Scale
                   </motion.span>
                 </h1>
               </motion.div>
               <motion.p 
                 className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.6 }}
               >
                 Caller Digital empowers businesses with intelligent voice bots that automate customer interactions across channels. Automate support, boost efficiency, and scale effortlessly with our multilingual voice AI platform — trusted by leading industries, with no hidden costs and full scalability.
               </motion.p>
               
               {/* Breadcrumb */}
               <motion.div 
                 className="text-sm text-gray-300 mb-8"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
               >
                 <Link href="/" className="hover:text-purple-400 transition-colors duration-200">
                   Home
                 </Link>
                 {' > '} Product
               </motion.div>
               
               {/* Call to Action Buttons */}
               <motion.div 
                 className="flex flex-col sm:flex-row gap-4"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6, duration: 0.6 }}
               >
                 <motion.button 
                   className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-teal-400 hover:shadow-xl hover:scale-105"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                 >
                   Book a Demo
                 </motion.button>
                 <motion.button 
                   className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:border-purple-400 hover:text-purple-400 hover:scale-105"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => {
                     // Add modal or video functionality here
                     console.log('Talk to Experts clicked');
                   }}
                 >
                   Talk to Experts
                 </motion.button>
               </motion.div>
            </motion.div>
            </div>
          </div>
        </div>

        {/* Subtle background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full blur-2xl" />
        </motion.div>
      </section>

          {/* What is Caller Digital? */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              What is{' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Caller Digital?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing customer experience through intelligent voice AI and automation
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Main Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/automated_customer_service.jpg" 
                  alt="AI Voice Automation Platform"
                  className="w-full h-64 md:h-80 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/voice_bot.jpg"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold">🤖 AI-Powered Voice Platform</div>
                  <div className="text-sm opacity-90">Intelligent automation for modern businesses</div>
                </div>
              </div>

              {/* Description Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Core Purpose</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-900">Caller Digital</span> is an AI-powered voice automation platform that streamlines customer interactions across voice, chat, WhatsApp, and email. With multilingual support and human-like TTS, it enables 24/7 support and intelligent escalation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Problem Solver</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Traditional customer service struggles with high costs and slow response times. Caller Digital solves this by automating voice workflows, reducing agent load, and improving customer satisfaction using AI-driven voice bots.
                  </p>
                </motion.div>
              </div>

            </motion.div>

            {/* Right Column - Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Features List */}
              <div className="bg-white rounded-2xl p-8 py-12 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">🚀</span>
                  </div>
                  Key Features
                </h3>
                <ul className="space-y-6 ">
                  {[
                    "Multilingual AI voice bots with natural speech",
                    "Human-like Text-to-Speech (TTS)",
                    "Smart routing & escalation to live agents",
                    "Multi-channel automation: Voice, WhatsApp, Chat, Email",
                    "Real-time analytics: CSAT, call tracking, sentiment"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start text-gray-700 group"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                      <span className="text-base font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Trust Statement - Full Width Across All Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100 mt-12"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Trusted by Industry Leaders</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <span className="font-semibold text-gray-900">Caller Digital</span> is trusted by businesses in real estate, BFSI, healthcare, retail, and more — helping them automate lead qualification, customer support, feedback collection, and payment reminders at scale.
            </p>
          </motion.div>
        </div>
      </section>

           {/* Caller Digital in Action Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Caller Digital in Action:{' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Voice Platform Highlights
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI voice platform empowers businesses to automate, scale, and optimize customer service experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r  from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Descriptions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Caller Digital delivers intelligent voice automation that empowers businesses to scale support, reduce operational costs, and enhance customer engagement — without increasing headcount.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Built to handle over <strong>200K+ minutes/month</strong>, the platform combines powerful voice AI, real-time analytics, and multi-language support.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether for lead qualification, customer surveys, or support tickets — every voice interaction is fast, smart, and measurable.
              </p>
            </motion.div>

            {/* Right Column - Highlight Tiles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <RiBarChartLine className="w-8 h-8" />,
                  title: "200K+ Minutes/Month",
                  subtitle: "Handles large-scale voice traffic effortlessly."
                },
                {
                  icon: <RiGlobalLine className="w-8 h-8" />,
                  title: "Omnichannel Support",
                  subtitle: "Voice, WhatsApp, Chat, Email — all integrated."
                },
                {
                  icon: <RiTimeLine className="w-8 h-8" />,
                  title: "24/7 Customer Engagement",
                  subtitle: "Always-on AI support across time zones."
                },
                {
                  icon: <RiDashboardFill className="w-8 h-8" />,
                  title: "Analytics Dashboard",
                  subtitle: "Real-time insights & reporting for optimization."
                },
                {
                  icon: <RiShieldCheckLine className="w-8 h-8" />,
                  title: "Fully Secure & Compliant",
                  subtitle: "GDPR-ready, no hidden charges, enterprise-safe."
                },
                {
                  icon: <RiBrainLine className="w-8 h-8" />,
                  title: "Smart Learning System",
                  subtitle: "AI that improves with every conversation."
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-purple-400/10 group-hover:from-teal-400/20 group-hover:via-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300">
                      <div className="text-violet-500 group-hover:scale-110 transition-transform duration-300">
                        {highlight.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{highlight.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Core Features That{' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Power Conversations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From smart routing to human-like speech, Caller Digital brings together powerful technologies to automate customer communication intelligently. Here's what drives it:
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
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

      {/* Analytics & Insights Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Smarter Decisions with{' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Real-Time Analytics
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Gain full visibility into every customer conversation with Caller Digital's advanced analytics suite. From live call tracking to sentiment analysis, our real-time dashboard helps you make smarter, faster decisions backed by actionable insights.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Live Call Reports",
                description: "Monitor ongoing and completed calls with data on duration, resolution time, and agent engagement — all updated in real time.",
                icon: <RiBarChartBoxFill className="w-8 h-8" />,
                highlights: [
                  "Real-time call monitoring",
                  "Duration & resolution tracking",
                  "Agent engagement metrics"
                ]
              },
              {
                title: "CSAT Scores & Customer Feedback",
                description: "Collect post-call satisfaction ratings and qualitative feedback to continuously improve agent and bot performance.",
                icon: <RiPieChartFill className="w-8 h-8" />,
                highlights: [
                  "Post-call satisfaction ratings",
                  "Qualitative feedback collection",
                  "Performance improvement insights"
                ]
              },
              {
                title: "Sentiment Analysis",
                description: "Automatically detect customer emotions and tone using AI to identify friction points and optimize responses.",
                icon: <RiGlobalFill className="w-8 h-8" />,
                highlights: [
                  "AI-powered emotion detection",
                  "Tone analysis",
                  "Friction point identification"
                ]
              },
              {
                title: "Voice Quality Monitoring",
                description: "Track audio clarity, background noise levels, and TTS performance to ensure smooth, high-quality experiences.",
                icon: <RiVoiceprintFill className="w-8 h-8" />,
                highlights: [
                  "Audio clarity tracking",
                  "Background noise analysis",
                  "TTS performance monitoring"
                ]
              },
              {
                title: "Conversation History & Intent Logs",
                description: "Access complete transcripts and intent recognition logs to analyze workflows and refine automation flows.",
                icon: <RiDashboardFill className="w-8 h-8" />,
                highlights: [
                  "Complete conversation transcripts",
                  "Intent recognition logs",
                  "Workflow analysis tools"
                ]
              },
              {
                title: "Custom Dashboards & Exportable Reports",
                description: "Tailor analytics views by campaign, region, or use case — and export reports for internal insights and presentations.",
                icon: <RiBarChartLine className="w-8 h-8" />,
                highlights: [
                  "Customizable dashboard views",
                  "Campaign-specific analytics",
                  "Exportable report generation"
                ]
              }
            ].map((feature, index) => (
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
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              What Our{' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading enterprises across industries
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Lacefield",
                role: "Co-founder, XYZ",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "Caller.Digital transformed our customer support operations. The AI voice bots are incredibly natural and our customer satisfaction scores have improved dramatically.",
                rating: 5
              },
              {
                name: "Harry Callum",
                role: "Manager",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                quote: "The automation capabilities are game-changing. We've scaled our support without increasing headcount, and the quality has never been better.",
                rating: 5
              },
              {
                name: "Mason Robert",
                role: "Co-founder, XYZ",
                avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                quote: "Implementation was seamless and the results were immediate. Our team loves the new system and our customers appreciate the 24/7 availability.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* User Profile */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Security & Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Caller Digital is built with enterprise-grade security protocols to protect your data, ensure privacy, and maintain full compliance with industry standards. From encryption to certifications, we ensure your conversations are always safe and compliant.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Security Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="relative">
                  <img 
                    src="/diverse-businesspeople-having-meeting.jpg" 
                    alt="Enterprise Security & Compliance Team"
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    onError={(e) => {
                      e.currentTarget.src = "/automated_customer_service.jpg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">🔒 Enterprise Security</div>
                    <div className="text-sm opacity-90">Bank-grade protection</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Security Badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                ✓ SOC 2 Type II
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                ✓ GDPR Compliant
              </motion.div>
            </motion.div>

            {/* Right Column - Security Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Security & Compliance Highlights:</h3>
              
              {[
                {
                  icon: "🔐",
                  title: "End-to-End Encryption",
                  description: "All data is encrypted in transit and at rest (TLS/SSL & AES-256)."
                },
                {
                  icon: "🌍",
                  title: "GDPR Compliant",
                  description: "Fully aligned with global data privacy regulations."
                },
                {
                  icon: "🏆",
                  title: "SOC 2 Type II Certified",
                  description: "Ensures rigorous internal controls and security standards."
                },
                {
                  icon: "⚡",
                  title: "99.99% Uptime Guarantee",
                  description: "Enterprise-level availability with cloud scalability."
                },
                {
                  icon: "👥",
                  title: "Role-Based Access Control (RBAC)",
                  description: "Secure user access and permissions management."
                },
                {
                  icon: "🔍",
                  title: "Regular Penetration Testing & Audits",
                  description: "Ongoing third-party testing and compliance checks."
                },
                {
                  icon: "🌐",
                  title: "Data Residency Options",
                  description: "Choose where your data lives (India, US, EU)."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400/10 via-blue-400/10 to-purple-400/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Security Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "256-bit", label: "AES Encryption" },
              { number: "99.99%", label: "Uptime SLA" },
              { number: "24/7", label: "Security Monitoring" },
              { number: "100%", label: "GDPR Compliant" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our AI voice automation platform</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is Caller Digital's AI voice platform?",
                answer: "Caller Digital is an AI-powered voice automation platform that helps businesses streamline customer interactions across voice, chat, WhatsApp, and email. With multilingual support and human-like TTS, it enables 24/7 support, lead engagement, and intelligent escalation to live agents."
              },
              {
                question: "How does the AI voice bot technology work?",
                answer: "Our AI voice bots use advanced natural language processing and text-to-speech technology to understand customer queries, provide intelligent responses, and handle complex conversations. They can escalate to human agents when needed while maintaining context."
              },
              {
                question: "What industries does Caller Digital serve?",
                answer: "We serve BFSI, retail, hospitality, healthcare, real estate, manufacturing, travel & tourism, and more—anywhere customer communication matters. Our platform is designed to scale across diverse industry requirements."
              },
              {
                question: "How secure is the platform for enterprise use?",
                answer: "Caller Digital is built with enterprise-grade security protocols including end-to-end encryption, GDPR compliance, SOC 2 Type II certification, and 99.99% uptime guarantee. We ensure your conversations are always safe and compliant."
              },
              {
                question: "Can Caller Digital integrate with our existing systems?",
                answer: "Yes, our platform offers seamless integration with CRM systems, databases, and business applications through APIs. We provide comprehensive integration support to ensure smooth deployment with your existing infrastructure."
              },
              {
                question: "How quickly can we implement Caller Digital?",
                answer: "Most clients are up and running within days. Our onboarding process is fast and fully supported, with dedicated implementation teams to ensure smooth deployment and quick time-to-value."
              },
              {
                question: "What languages does the platform support?",
                answer: "Our platform supports 20+ languages with regional accent adaptation. We provide natural language processing capabilities that understand context and deliver human-like conversations in multiple languages."
              },
              {
                question: "How do you measure and improve performance?",
                answer: "We provide comprehensive analytics including CSAT scores, call tracking, sentiment analysis, and real-time reporting. Our dashboard gives you insights to optimize customer interactions and improve service quality."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 mb-0">{faq.question}</h3>
                  <svg className={`ml-4 w-5 h-5 text-blue-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 mt-4' : 'max-h-0 mt-0'}`}
                  style={{ maxHeight: openFaq === index ? '500px' : '0px' }}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, customer service, and industry trends
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" id="blog-scroll">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'How AI Voice Bots Are Changing Customer Service',
                  excerpt: 'Discover how AI-powered voice bots are revolutionizing the way businesses interact with customers, driving efficiency and satisfaction.',
                  body: 'AI voice bots are transforming customer service by providing instant, 24/7 support. They handle routine inquiries, free up human agents, and deliver consistent experiences across channels. Businesses adopting voice AI see improved CSAT scores, reduced costs, and greater scalability.'
                },
                {
                  image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Scaling Support: The Power of Automation',
                  excerpt: 'Learn how automation enables companies to scale support operations without sacrificing quality or increasing costs.',
                  body: 'Automation empowers support teams to handle higher volumes with ease. By automating repetitive tasks, companies can focus on complex issues, improve response times, and deliver better customer experiences.'
                },
                {
                  image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Omnichannel Engagement Strategies',
                  excerpt: 'Explore best practices for engaging customers across voice, chat, email, and more, using a unified AI platform.',
                  body: 'Omnichannel engagement means meeting customers where they are. With AI, businesses can provide seamless, personalized experiences across all channels, increasing loyalty and satisfaction.'
                },
                {
                  image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Data-Driven Insights for Better CX',
                  excerpt: 'See how real-time analytics and reporting help businesses optimize every customer interaction.',
                  body: 'Data-driven insights allow companies to identify pain points, track performance, and continuously improve customer experience. Real-time analytics are essential for modern support operations.'
                },
                {
                  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'The Future of Customer Support',
                  excerpt: 'Explore emerging trends and technologies that will shape the future of customer service automation.',
                  body: 'The future of customer support lies in intelligent automation, predictive analytics, and seamless omnichannel experiences. AI will continue to evolve, providing more personalized and efficient customer interactions.'
                },
                {
                  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Multilingual AI: Breaking Language Barriers',
                  excerpt: 'How AI technology is helping businesses serve customers in their preferred languages worldwide.',
                  body: 'Multilingual AI is breaking down language barriers in customer service. Businesses can now serve global customers in their native languages, improving satisfaction and expanding market reach.'
                }
              ].map((blog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex-shrink-0 w-80 cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => { setActiveBlog(blog); setModalOpen(true); }}
                >
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{blog.excerpt}</p>
                    <span className="text-blue-500 font-medium mt-auto">Read More</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Button */}
            <button 
              onClick={() => {
                const scrollContainer = document.getElementById('blog-scroll');
                if (scrollContainer) {
                  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Modal */}
          {modalOpen && activeBlog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{activeBlog.title}</h3>
                <img src={activeBlog.image} alt={activeBlog.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <p className="text-gray-700 text-base whitespace-pre-line">{activeBlog.body}</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Custom CSS for scrollbar hiding */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <EnterpriseCTA />

      <Footer />
    </main>
  );
} 