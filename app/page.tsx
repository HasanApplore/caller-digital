'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { RiDoubleQuotesL, RiStarFill, RiArrowDownSLine } from 'react-icons/ri';
import { RiRobotFill, RiCustomerService2Fill, RiTranslate2, RiBarChartFill, RiDatabase2Fill, RiServerFill, RiBriefcase4Fill, RiBankFill, RiGraduationCapFill, RiHomeSmileFill, RiHospitalFill, RiShoppingBag3Fill, RiFlashlightFill, RiLineChartFill, RiShieldKeyholeFill, RiApps2Fill, RiCarFill, RiShieldCheckFill, RiPlaneFill } from 'react-icons/ri';
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
                  className="relative overflow-hidden bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 focus:outline-none hover:from-purple-500 hover:to-teal-400 hover:shadow-blue-300/60 hover:ring-4 hover:ring-blue-200/40 hover:scale-105 active:scale-95"
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
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-transparent"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6) border-box'
                }}
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

      {/* Client Logos Section with Moving Ticker */}
      <section className="w-full bg-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies that trust Caller.Digital for their customer service automation
            </p>
          </div>
          
          {/* Single Moving Row */}
          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* First set of clients */}
              <div className="flex items-center gap-12">
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/untitled-1_160.png" alt="KALYAN JEWELLERS" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/talent carriage.jpg" alt="Talent Carriage" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/INDIAMART.NS_BIG-467a563d.png" alt="Indiamart" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/circlepe_logo.jpg" alt="CircleP=" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/dehaat.png" alt="DeHaat Seeds to Market" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/jk_tyres.jpeg" alt="JK TYRE" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/logo-300x70.png" alt="Indorewala ENT Hospital" className="max-h-16 max-w-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12">
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/untitled-1_160.png" alt="KALYAN JEWELLERS" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/talent carriage.jpg" alt="Talent Carriage" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/INDIAMART.NS_BIG-467a563d.png" alt="Indiamart" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/circlepe_logo.jpg" alt="CircleP=" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/dehaat.png" alt="DeHaat Seeds to Market" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/jk_tyres.jpeg" alt="JK TYRE" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/logo-300x70.png" alt="Indorewala ENT Hospital" className="max-h-16 max-w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          
          .animate-scroll-left {
            animation: scroll-left 45s linear infinite;
          }
          
          .animate-scroll-right {
            animation: scroll-right 45s linear infinite;
          }
          
          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
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
                className="text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-transparent"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6) border-box'
                }}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <RiBankFill className="w-8 h-8 text-white" />,
                title: "BFSI",
                description: "AI-powered banking support with secure transaction handling.",
                link: "https://www.caller.digital/industries/bfsi"
              },
              {
                icon: <RiShoppingBag3Fill className="w-8 h-8 text-white" />,
                title: "Retail & Ecommerce",
                description: "Automated customer service for seamless shopping experiences.",
                link: "https://www.caller.digital/industries/retail-ecommerce"
              },
              {
                icon: <RiGraduationCapFill className="w-8 h-8 text-white" />,
                title: "Education (EdTech)",
                description: "AI-driven learning support and student engagement solutions.",
                link: "https://www.caller.digital/industry/education-edtech"
              },
              {
                icon: <RiHomeSmileFill className="w-8 h-8 text-white" />,
                title: "Real Estate",
                description: "AI-powered property management and client support.",
                link: "https://www.caller.digital/industries/real-estate"
              },
              {
                icon: <RiHospitalFill className="w-8 h-8 text-white" />,
                title: "Healthcare",
                description: "HIPAA-compliant patient care and appointment automation.",
                link: "https://www.caller.digital/industries/healthcare"
              },
              {
                icon: <RiShieldCheckFill className="w-8 h-8 text-white" />,
                title: "Insurance",
                description: "Automated claims processing and policy support.",
                link: "https://www.caller.digital/industries/insurance"
              },
              {
                icon: <RiPlaneFill className="w-8 h-8 text-white" />,
                title: "Travel & Tourism",
                description: "24/7 travel assistance and booking automation.",
                link: "https://www.caller.digital/industry/travel-and-tourism"
              },
              {
                icon: <RiCustomerService2Fill className="w-8 h-8 text-white" />,
                title: "Hospitality",
                description: "Enhanced guest services with AI booking assistance.",
                link: "https://www.caller.digital/industry/hospitality"
              },
              {
                icon: <RiApps2Fill className="w-8 h-8 text-white" />,
                title: "Telecom",
                description: "AI-powered customer support and network management solutions.",
                link: "https://www.caller.digital/industry/telecom"
              },
              {
                icon: <RiCarFill className="w-8 h-8 text-white" />,
                title: "Logistics & Delivery",
                description: "Automated delivery tracking and customer service solutions.",
                link: "https://www.caller.digital/industries/logistics-and-delivery"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 h-56 border-2 border-gray-100 hover:border-transparent"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6) border-box'
                }}
              >
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center mb-3 shadow-lg">
                    {industry.icon}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold mb-2 text-purple-900">{industry.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{industry.description}</p>
                  </div>
                  <Link href={industry.link} className="inline-flex items-center bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent font-semibold text-sm mt-2">
                    Learn more
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading enterprises across industries
            </p>
          </div>
          
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
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
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
              </div>
            ))}
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
                  date: 'Dec 15, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Scaling Support: The Power of Automation',
                  excerpt: 'Learn how automation enables companies to scale support operations without sacrificing quality or increasing costs.',
                  date: 'Dec 12, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Omnichannel Engagement Strategies',
                  excerpt: 'Explore best practices for engaging customers across voice, chat, email, and more, using a unified AI platform.',
                  date: 'Dec 10, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Data-Driven Insights for Better CX',
                  excerpt: 'See how real-time analytics and reporting help businesses optimize every customer interaction.',
                  date: 'Dec 8, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'The Future of Customer Support',
                  excerpt: 'Explore emerging trends and technologies that will shape the future of customer service automation.',
                  date: 'Dec 5, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Multilingual AI: Breaking Language Barriers',
                  excerpt: 'How AI technology is helping businesses serve customers in their preferred languages worldwide.',
                  date: 'Dec 3, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Building Trust with AI-Powered Support',
                  excerpt: 'Strategies for building customer trust and confidence through intelligent automation solutions.',
                  date: 'Nov 30, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'ROI of Customer Service Automation',
                  excerpt: 'Understanding the return on investment and cost savings from implementing AI customer service solutions.',
                  date: 'Nov 28, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Security in AI Customer Service',
                  excerpt: 'Best practices for ensuring data security and privacy in AI-powered customer service platforms.',
                  date: 'Nov 25, 2024'
                },
                {
                  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=facearea&w=400&h=250&q=80',
                  title: 'Integration Strategies for Modern Businesses',
                  excerpt: 'How to seamlessly integrate AI customer service with existing business systems and workflows.',
                  date: 'Nov 22, 2024'
                }
              ].map((blog, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex-shrink-0 w-80 cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
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

      {/* Remove the hardcoded footer and use the Footer component */}
      
      <Footer />
    </main>
  );
}
