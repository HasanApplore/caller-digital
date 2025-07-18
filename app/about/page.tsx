'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import CountUp from 'react-countup';
import { FaGlobe, FaUsers, FaTachometerAlt, FaCheckCircle, FaLinkedin } from 'react-icons/fa';

export default function About() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  const team = [
    {
      name: "Vaibhav Singh",
      role: "Cofounder & CEO",
      image: "/vaibhav.jpeg",
      bio: "Serial entrepreneur with successful AI and SaaS exits",
      linkedin: "https://www.linkedin.com/in/vaibhavsingh1/"
    },
    {
      name: "Abhinav Rathor",
      role: "Cofounder & CTO",
      image: "/IMG_8070 (1).jpg",
      bio: "Technology visionary with expertise in AI, cloud architecture, and scalable systems",
      linkedin: "https://www.linkedin.com/in/abhinav-rathor/"
    },
    {
      name: "Vividha Singh",
      role: "Product Head",
      image: "/vividha.jpeg",
      bio: "Product strategist with deep expertise in user experience design and market-driven product development",
      linkedin: "https://www.linkedin.com/in/vividha-singh-15448020/"
    },
    {
      name: "Ravgun Singh",
      role: "Business Head",
      image: "/ravgun.jpeg",
      bio: "Strategic business leader with proven track record in scaling operations and driving revenue growth",
      linkedin: "https://www.linkedin.com/in/ravgun-singh-664297119/"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 p-8 mb-16 shadow-md"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              At Caller.Digital, we believe in harnessing the power of artificial intelligence to transform how businesses connect with their customers. Our mission is to make exceptional customer support accessible to companies of all sizes through innovative AI solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md"
              >
                {stat.icon}
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUp
                    end={stat.value}
                    decimals={stat.value === 98.91 ? 2 : 0}
                  />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-md"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-blue-400"
                />
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us today to learn more about our services</p>
            <motion.button 
              onClick={handleContactClick}
              className="relative overflow-hidden bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:from-teal-500 hover:to-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Us</span>
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
} 