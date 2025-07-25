'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import CountUp from 'react-countup';
import { FaGlobe, FaUsers, FaTachometerAlt, FaCheckCircle, FaRobot, FaPhoneAlt, FaChartLine, FaDatabase, FaHeadset, FaIndustry, FaHospital, FaShoppingCart } from 'react-icons/fa';
import { useEffect } from 'react';
import React from 'react'; // Added missing import for React
import EnterpriseCTA from '../components/EnterpriseCTA';

export default function Services() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const useCases = [
    {
      id: "ecommerce",
      title: "E-commerce Support",
      description: "24/7 AI-powered customer support for online retailers",
      icon: <FaShoppingCart className="w-8 h-8 text-indigo-400 mb-4" />,
      metrics: [
        { label: "Response Time", value: "<30s", improvement: "85%" },
        { label: "Order Resolution", value: "92%", improvement: "First Contact" },
        { label: "Customer Satisfaction", value: "4.8/5", improvement: "Rating" }
      ],
      features: ["Order Tracking", "Returns Processing", "Product Queries", "Payment Support"]
    },
    {
      id: "healthcare",
      title: "Healthcare Assistance",
      description: "Intelligent patient support and appointment management",
      icon: <FaHospital className="w-8 h-8 text-indigo-400 mb-4" />,
      metrics: [
        { label: "Appointment Scheduling", value: "95%", improvement: "Automation Rate" },
        { label: "Patient Queries", value: "88%", improvement: "Resolution Rate" },
        { label: "Staff Efficiency", value: "40%", improvement: "Time Saved" }
      ],
      features: ["Appointment Booking", "Insurance Verification", "Prescription Refills", "Patient Education"]
    },
    {
      id: "manufacturing",
      title: "Manufacturing Support",
      description: "AI-driven technical support for manufacturing operations",
      icon: <FaIndustry className="w-8 h-8 text-indigo-400 mb-4" />,
      metrics: [
        { label: "Downtime Reduction", value: "35%", improvement: "Efficiency" },
        { label: "Issue Resolution", value: "90%", improvement: "Success Rate" },
        { label: "Cost Savings", value: "25%", improvement: "Per Incident" }
      ],
      features: ["Equipment Troubleshooting", "Maintenance Scheduling", "Parts Ordering", "Technical Documentation"]
    },
    {
      id: "financial",
      title: "Financial Services",
      description: "Secure and compliant financial support automation",
      icon: <FaChartLine className="w-8 h-8 text-indigo-400 mb-4" />,
      metrics: [
        { label: "Transaction Support", value: "98%", improvement: "Accuracy" },
        { label: "Compliance Rate", value: "100%", improvement: "Adherence" },
        { label: "Query Resolution", value: "94%", improvement: "Success Rate" }
      ],
      features: ["Account Management", "Transaction Support", "Fraud Prevention", "Compliance Assistance"]
    }
  ];

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Empowering businesses with AI-driven support solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-between">
            {[
              {
                icon: <FaUsers className="w-8 h-8 text-blue-400 mb-4" />,
                value: 108,
                suffix: "K+",
                label: "Customers"
              },
              {
                icon: <FaGlobe className="w-8 h-8 text-blue-400 mb-4" />,
                value: 8,
                suffix: "+",
                label: "Countries"
              },
              {
                icon: <FaTachometerAlt className="w-8 h-8 text-blue-400 mb-4" />,
                value: 1,
                prefix: "<",
                suffix: " sec",
                label: "Latency"
              },
              {
                icon: <FaCheckCircle className="w-8 h-8 text-blue-400 mb-4" />,
                value: 98.91,
                suffix: "%",
                label: "Success Rate"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md text-center flex-1 min-w-[200px]"
              >
                {metric.icon}
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {metric.prefix && <span>{metric.prefix}</span>}
                  <CountUp
                    end={metric.value}
                    decimals={metric.value === 98.91 ? 2 : 0}
                  />
                  {metric.suffix && <span>{metric.suffix}</span>}
                </div>
                <p className="text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Industry Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tailored AI solutions for specific industry needs with proven results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                id={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md transition-all duration-300 scroll-mt-20 group hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    {React.cloneElement(useCase.icon, { className: 'w-8 h-8 text-blue-400 mb-4' })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-500 transition-colors">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {useCase.metrics.map((metric, mIndex) => (
                    <motion.div 
                      key={mIndex} 
                      className="text-center p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-extrabold text-blue-500 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                      <div className="text-xs text-green-500">{metric.improvement}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  {useCase.features.map((feature, fIndex) => (
                    <motion.div 
                      key={fIndex} 
                      className="flex items-center text-gray-700 hover:text-blue-500 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-blue-400 group-hover:text-blue-500 mr-2 transition-colors">•</span>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EnterpriseCTA />
    </main>
  );
} 