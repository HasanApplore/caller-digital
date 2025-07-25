'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { RiDoubleQuotesL, RiStarFill, RiArrowDownSLine } from 'react-icons/ri';
import { RiRobotFill, RiCustomerService2Fill, RiTranslate2, RiBarChartFill, RiDatabase2Fill, RiServerFill, RiBriefcase4Fill, RiBankFill, RiGraduationCapFill, RiHomeSmileFill, RiHospitalFill, RiShoppingBag3Fill, RiFlashlightFill, RiLineChartFill, RiShieldKeyholeFill, RiApps2Fill } from 'react-icons/ri';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from 'react';
import Footer from './components/Footer';
import EnterpriseCTA from './components/EnterpriseCTA';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<HTMLElement[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        rootMargin: '-100px 0px',
        threshold: 0.1,
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const addToObserver = (element: HTMLElement | null) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
      observerRef.current?.observe(element);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        {/* Subtle logo background accent */}
        <img src="/logo.jpeg" alt="Logo Accent" className="absolute left-1/2 top-0 -translate-x-1/2 opacity-10 w-[400px] h-[400px] pointer-events-none select-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8 flex flex-col items-center justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 text-blue-700 text-sm font-medium mb-4 shadow-sm">
                Omnichannel Customer Service Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
              Automate Conversations with Asia’s Most Advanced Voice <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2 inline-block">AI Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Caller Digital helps businesses automate sales, support, and operations with 
              multilingual AI voice agents that provide 24/7 assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="/voice-ai">
                <motion.button 
                  className="relative overflow-hidden  bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 focus:outline-none hover:from-purple-500 hover:to-teal-400 hover:shadow-blue-300/60 hover:ring-4 hover:ring-blue-200/40 hover:scale-105 active:scale-95"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="relative z-10">Book a Free Demo</span>
                </motion.button>
              </Link>
              <Link href="#video-section">
              <motion.button 
                  className="relative overflow-hidden bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 focus:outline-none hover:from-purple-500 hover:to-teal-400 hover:shadow-blue-300/60 hover:ring-4 hover:ring-blue-200/40 hover:scale-105 active:scale-95"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="relative z-10">Watch Video</span>
                </motion.button>
              </Link>
            </div>
            {/* Trust Section */}
            <section className="w-full mt-32 mb-16">
              <div className="max-w-6xl mx-auto px-2">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                  100+ businesses trust Caller Digital to automate their voice operations
                </h2>
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                  {/* Card 1 */}
                  <div className="flex-1 min-w-[220px] max-w-[270px] h-56 rounded-2xl bg-gradient-to-br from-teal-100 via-blue-50 to-purple-100 shadow-lg px-8 py-6 flex flex-col items-center text-center border border-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-300 justify-between">
                    <span className="text-3xl font-extrabold text-blue-600 mb-1">85%<sup className='text-base align-super'>↑</sup></span>
                    <span className="text-base font-semibold text-gray-900 mb-1">Reduction in Call Handling Time</span>
                    <span className="text-gray-600 text-xs">AI voice agents resolve queries faster with intelligent routing and automation.</span>
                  </div>
                  {/* Card 2 */}
                  <div className="flex-1 min-w-[220px] max-w-[270px] h-56 rounded-2xl bg-gradient-to-br from-blue-100 via-teal-50 to-purple-100 shadow-lg px-8 py-6 flex flex-col items-center text-center border border-teal-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-300 justify-between">
                    <span className="text-3xl font-extrabold text-teal-600 mb-1">70%<sup className='text-base align-super'>↑</sup></span>
                    <span className="text-base font-semibold text-gray-900 mb-1">Improved Lead Conversion Rate</span>
                    <span className="text-gray-600 text-xs">Automated follow-ups and multilingual outreach boost engagement.</span>
                  </div>
                  {/* Card 3 */}
                  <div className="flex-1 min-w-[220px] max-w-[270px] h-56 rounded-2xl bg-gradient-to-br from-purple-100 via-blue-50 to-teal-100 shadow-lg px-8 py-6 flex flex-col items-center text-center border border-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-300 justify-between">
                    <span className="text-3xl font-extrabold text-purple-600 mb-1">95%<sup className='text-base align-super'>↑</sup></span>
                    <span className="text-base font-semibold text-gray-900 mb-1">Customer Reachability</span>
                    <span className="text-gray-600 text-xs">Ensure round-the-clock connectivity with 24/7 AI calling in multiple languages.</span>
                  </div>
                  {/* Card 4 */}
                  <div className="flex-1 min-w-[220px] max-w-[270px] h-56 rounded-2xl bg-gradient-to-br from-teal-100 via-purple-50 to-blue-100 shadow-lg px-8 py-6 flex flex-col items-center text-center border border-blue-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-300 justify-between">
                    <span className="text-3xl font-extrabold text-teal-600 mb-1">60%<sup className='text-base align-super'>↓</sup></span>
                    <span className="text-base font-semibold text-gray-900 mb-1">Cost Per Acquisition</span>
                    <span className="text-gray-600 text-xs">Automate repetitive tasks and reduce operational overhead significantly.</span>
                  </div>
                  {/* Card 5 */}
                  <div className="flex-1 min-w-[220px] max-w-[270px] h-56 rounded-2xl bg-gradient-to-br from-purple-100 via-teal-50 to-blue-100 shadow-lg px-8 py-6 flex flex-col items-center text-center border border-purple-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-300 justify-between">
                    <span className="text-3xl font-extrabold text-purple-600 mb-1">50%<sup className='text-base align-super'>↑</sup></span>
                    <span className="text-base font-semibold text-gray-900 mb-1">Faster Onboarding for New Campaigns</span>
                    <span className="text-gray-600 text-xs">Launch voice automation at scale with easy API integration</span>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </section>

      {/* Why Caller.Digital Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Caller.Digital?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your customer support with AI-powered voice solutions that deliver exceptional experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                  icon: <RiRobotFill className="w-12 h-12 text-violet-500" />,
                title: "AI-Powered Voice Bots",
                description: "Advanced natural language processing for human-like conversations and intelligent responses."
              },
              {
                  icon: <RiCustomerService2Fill className="w-12 h-12 text-violet-500" />,
                title: "24/7 Availability",
                description: "Round-the-clock customer support without the overhead of maintaining large support teams."
              },
              {
                  icon: <RiTranslate2 className="w-12 h-12 text-violet-500" />,
                title: "Multilingual Support",
                description: "Serve customers in their preferred language with automatic translation capabilities."
              },
              {
                  icon: <RiBarChartFill className="w-12 h-12 text-violet-500" />,
                title: "Performance Analytics",
                description: "Comprehensive insights into call quality, customer satisfaction, and operational efficiency."
              },
              {
                  icon: <RiDatabase2Fill className="w-12 h-12 text-violet-500" />,
                title: "Seamless Integration",
                description: "Easy integration with your existing CRM, helpdesk, and business systems."
              },
              {
                  icon: <RiServerFill className="w-12 h-12 text-violet-500" />,
                title: "Enterprise Security",
                description: "Bank-level security with encryption, compliance, and data protection measures."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                {feature.icon}
              </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI voice solutions designed for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                  icon: <RiFlashlightFill className="w-8 h-8 text-violet-500" />,
                title: "Fast Response",
                description: "Instant customer support with sub-second response times"
              },
              {
                  icon: <RiLineChartFill className="w-8 h-8 text-violet-500" />,
                title: "Scalable",
                description: "Handle unlimited concurrent calls without performance degradation"
              },
              {
                  icon: <RiShieldKeyholeFill className="w-8 h-8 text-violet-500" />,
                title: "Secure",
                description: "Enterprise-grade security with end-to-end encryption"
              },
              {
                  icon: <RiApps2Fill className="w-8 h-8 text-violet-500" />,
                title: "Integrations",
                description: "Seamless integration with your existing business tools"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industry-Specific AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI voice automation for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                  icon: <RiBriefcase4Fill className="w-12 h-12 text-violet-500" />,
                title: "Manufacturing & Industrial",
                description: "Streamline production support, automate maintenance requests, and handle supplier inquiries with AI-powered voice solutions.",
                useCases: [
                  "24/7 Equipment Maintenance Support",
                  "Automated Quality Control Reports",
                  "Supply Chain Query Resolution"
                ]
              },
              {
                  icon: <RiBankFill className="w-12 h-12 text-violet-500" />,
                title: "Fintech & Banking",
                description: "Enhance customer support with AI agents handling account queries, fraud detection, and transaction processing.",
                useCases: [
                  "Automated Transaction Verification",
                  "24/7 Banking Support",
                  "Fraud Alert Management"
                ]
              },
              {
                  icon: <RiGraduationCapFill className="w-12 h-12 text-violet-500" />,
                title: "EdTech & Learning",
                description: "Transform educational support with AI-powered tutoring, enrollment assistance, and student services.",
                useCases: [
                  "24/7 Student Support Services",
                  "Automated Enrollment Assistance",
                  "Course Information & Guidance"
                ]
              },
              {
                  icon: <RiHomeSmileFill className="w-12 h-12 text-violet-500" />,
                title: "Real Estate",
                description: "Revolutionize property management with AI-powered leasing assistance, maintenance coordination, and tenant support.",
                useCases: [
                  "Automated Property Inquiries",
                  "24/7 Tenant Support",
                  "Maintenance Request Processing"
                ]
              },
              {
                  icon: <RiHospitalFill className="w-12 h-12 text-violet-500" />,
                title: "Healthcare",
                description: "Improve patient care with HIPAA-compliant AI solutions for appointment scheduling, follow-ups, and care coordination.",
                useCases: [
                  "Automated Appointment Scheduling",
                  "Patient Follow-up Calls",
                  "Medical Record Assistance"
                ]
              },
              {
                  icon: <RiShoppingBag3Fill className="w-12 h-12 text-violet-500" />,
                title: "E-commerce",
                description: "Enhance customer experience with AI-powered order tracking, returns processing, and product support.",
                useCases: [
                  "24/7 Order Status Updates",
                  "Automated Returns Processing",
                  "Product Information Support"
                ]
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div className="space-y-3">
                    {industry.useCases.map((useCase, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <RiFlashlightFill className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 pb-28 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how our AI solutions are transforming businesses across industries</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Slider 
              {...settings} 
              className="testimonial-slider"
              autoplay={true}
              autoplaySpeed={5000}
              pauseOnHover={true}
            >
              {[
                {
                  quote: "Caller.Digital's AI voice solutions completely transformed our customer support operations. Response times improved by 60% and customer satisfaction scores increased significantly across all departments.",
                  author: "John Smith",
                  position: "Customer Experience Director",
                  company: "Tech Solutions Inc",
                  rating: 5
                },
                {
                  quote: "The implementation of Caller.Digital's AI agents was seamless and efficient. We've seen a 45% reduction in support costs while maintaining excellent service quality throughout our organization.",
                  author: "Sarah Johnson",
                  position: "Operations Manager",
                  company: "Growth Startup",
                  rating: 5
                },
                {
                  quote: "As a healthcare provider, we needed a solution that was both efficient and compliant with regulations. Caller.Digital delivered beyond our expectations and improved patient communication.",
                  author: "Dr. Michael Chen",
                  position: "Medical Director",
                  company: "Healthcare Innovations",
                  rating: 5
                },
                {
                  quote: "The multilingual support capabilities have been a complete game-changer for our global operations. Our international customers are thrilled with the personalized service experience.",
                  author: "Emma Davis",
                  position: "Global Support Lead",
                  company: "International Corp",
                  rating: 5
                },
                {
                  quote: "Caller.Digital's AI voice technology has revolutionized our manufacturing support operations. Technical issues are now resolved 40% faster with improved accuracy and efficiency.",
                  author: "Robert Wilson",
                  position: "Technical Support Head",
                  company: "Industrial Solutions",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 bg-gray-50 rounded-2xl shadow-md border border-gray-100 relative flex flex-col items-start h-80"
                  >
                    <RiDoubleQuotesL className="absolute top-5 left-5 text-blue-200 w-6 h-6" />
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500 flex items-center justify-center mr-3">
                        <span className="text-xl font-bold text-white">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                        <p className="text-gray-500 text-xs">{testimonial.position}</p>
                        <p className="text-blue-500 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-base mb-4 text-gray-700 pl-6 flex-grow leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-end w-full mt-auto pt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <RiStarFill key={i} className="text-yellow-400 w-5 h-5" />
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our omnichannel customer service solutions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is omnichannel customer service?",
                answer: "Omnichannel customer service is a support approach that provides seamless customer experiences across all communication channels - phone, chat, email, social media, and more. Our platform ensures consistent service quality regardless of how customers reach out."
              },
              {
                question: "How do AI voice bots improve customer service?",
                answer: "AI voice bots provide instant, 24/7 customer support with natural language understanding. They can handle routine inquiries, route complex issues to human agents, and learn from interactions to continuously improve service quality."
              },
              {
                question: "How can automated customer service reduce costs?",
                answer: "Automated customer service reduces costs by handling up to 80% of routine inquiries without human intervention. This allows your team to focus on complex issues while maintaining high customer satisfaction scores."
              },
              {
                question: "What makes your omnichannel support platform different?",
                answer: "Our omnichannel customer service platform integrates AI voice bots, intelligent routing, and real-time analytics to provide a unified customer experience. We offer enterprise-grade security, multilingual support, and seamless integration with existing systems."
              },
              {
                question: "How do you measure and improve CSAT scores?",
                answer: "We improve CSAT scores through intelligent routing, personalized responses, and proactive issue resolution. Our platform provides real-time analytics to identify pain points and optimize customer interactions for better satisfaction."
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
                  <RiArrowDownSLine className={`ml-4 w-5 h-5 text-blue-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
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

      {/* CTA Section */}
      <EnterpriseCTA />

      {/* Remove the hardcoded footer and use the Footer component */}
      
      <Footer />
    </main>
  );
}
