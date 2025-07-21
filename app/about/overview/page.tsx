'use client';

import { motion } from 'framer-motion';
import { RiRocketFill, RiEyeFill, RiBarChartBoxFill, RiShieldCheckFill, RiScales3Fill, RiLineChartFill } from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../../components/Footer';

export default function Overview() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
              Transforming Customer Service with
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2 inline-block">
                <TypeAnimation
                  sequence={[
                    'AI Innovation',
                    2000,
                    'Voice Intelligence',
                    2000,
                    'Smart Automation',
                    2000,
                  ]}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize how businesses connect with their customers through cutting-edge AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <RiRocketFill className="w-12 h-12 text-violet-500" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with intelligent voice solutions that transform customer interactions, drive efficiency, and deliver exceptional experiences at scale.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <RiEyeFill className="w-12 h-12 text-violet-500" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in AI-powered voice solutions, setting new standards in customer service automation and multilingual communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving meaningful change in customer service through innovation and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <RiBarChartBoxFill className="w-16 h-16 text-violet-500" />,
                stat: "200K+",
                label: "Minutes of Conversations",
                description: "Processed monthly across various industries and languages"
              },
              {
                icon: <RiShieldCheckFill className="w-16 h-16 text-violet-500" />,
                stat: "98%",
                label: "Customer Satisfaction",
                description: "Maintaining high standards of service quality"
              },
              {
                icon: <RiScales3Fill className="w-16 h-16 text-violet-500" />,
                stat: "60%",
                label: "Cost Reduction",
                description: "Average savings in customer service operations"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-violet-500 mb-4">{item.label}</div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Caller.Digital Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Caller.Digital?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology combined with transparent pricing and unlimited scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <RiShieldCheckFill className="w-12 h-12 text-violet-500" />,
                title: "No Hidden Costs",
                description: "Transparent pricing with no surprise fees. Pay only for what you use with our flexible pricing model.",
                features: [
                  "Clear pricing structure",
                  "No setup fees",
                  "Pay-as-you-go model"
                ]
              },
              {
                icon: <RiLineChartFill className="w-12 h-12 text-violet-500" />,
                title: "High Scalability",
                description: "Scale your operations seamlessly from hundreds to millions of calls without performance degradation.",
                features: [
                  "Unlimited concurrent calls",
                  "Auto-scaling infrastructure",
                  "99.9% uptime guarantee"
                ]
              },
              {
                icon: <RiBarChartBoxFill className="w-12 h-12 text-violet-500" />,
                title: "Proven Capacity",
                description: "Handle over 200K+ minutes of conversations monthly with consistent quality and reliability.",
                features: [
                  "High-volume processing",
                  "Real-time analytics",
                  "Performance monitoring"
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <RiShieldCheckFill className="w-5 h-5 text-violet-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionaries and experts committed to revolutionizing customer service through AI innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Vaibhav Singh",
                role: "Cofounder & CEO",
                image: "/vaibhav.jpeg",
                bio: "Serial entrepreneur with successful AI and SaaS exits. Driving innovation in customer service through AI technology.",
                linkedin: "https://www.linkedin.com/in/vaibhavsingh1/",
                highlights: [
                  "Innovation Leadership",
                  "Strategic Growth"
                ]
              },
              {
                name: "Abhinav Rathor",
                role: "Cofounder & CTO",
                image: "/IMG_8070 (1).jpg",
                bio: "Technology visionary leading the development of cutting-edge AI and cloud solutions for enterprise scalability.",
                linkedin: "https://www.linkedin.com/in/abhinav-rathor/",
                highlights: [
                  "AI Development",
                  "Cloud Architecture"
                ]
              },
              {
                name: "Vividha Singh",
                role: "Product Head",
                image: "/vividha.jpeg",
                bio: "Product strategist focused on creating intuitive, market-driven solutions that transform customer experiences.",
                linkedin: "https://www.linkedin.com/in/vividha-singh-15448020/",
                highlights: [
                  "Product Strategy",
                  "UX Design"
                ]
              },
              {
                name: "Ravgun Singh",
                role: "Business Head",
                image: "/ravgun.jpeg",
                bio: "Strategic leader driving business growth through operational excellence and innovative go-to-market strategies.",
                linkedin: "https://www.linkedin.com/in/ravgun-singh-664297119/",
                highlights: [
                  "Business Development",
                  "Operations Excellence"
                ]
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                                 <div className="relative z-10 flex flex-col flex-grow">
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <div className="relative w-32 h-32">
                        {/* Gradient border circle */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-1 transform group-hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-0 right-0 translate-x-2 translate-y-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-violet-500 font-medium">{member.role}</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 text-center">
                    {member.bio}
                  </p>

                  <div className="flex flex-col items-center gap-2 mt-4">
                    {member.highlights.map((highlight: string, i: number) => (
                      <span
                        key={i}
                        className="px-6 py-2 bg-gradient-to-r from-teal-50 to-violet-50 text-violet-600 text-sm font-medium rounded-full border border-violet-100 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-fit"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
} 