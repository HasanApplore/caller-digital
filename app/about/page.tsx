'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import CountUp from 'react-countup';
import { FaGlobe, FaUsers, FaTachometerAlt, FaCheckCircle, FaLinkedin } from 'react-icons/fa';
import EnterpriseCTA from '../components/EnterpriseCTA';

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

  const testimonials = [
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
    },
    {
      name: "Amelia Margaret",
      role: "Manager",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "The multilingual support helped us expand into new markets effortlessly. Caller.Digital is a true partner in our growth journey.",
      rating: 5
    },
    {
      name: "Sophia Jennifer",
      role: "Co-founder, XYZ",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      quote: "Outstanding platform with excellent support. The analytics and reporting features give us insights we never had before.",
      rating: 5
    },
    {
      name: "Daniel Thomas",
      role: "Manager",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      quote: "Reliable, scalable, and cost-effective. Caller.Digital has exceeded our expectations in every way possible.",
      rating: 5
    },
    {
      name: "Natalie Carter",
      role: "VP Operations",
      avatar: "https://randomuser.me/api/portraits/women/39.jpg",
      quote: "Our automation journey was accelerated thanks to Caller.Digital's voice AI. 10/10 experience.",
      rating: 5
    },
    {
      name: "Jacob Harris",
      role: "CTO, InnovateX",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      quote: "The API-first approach and scalability of Caller.Digital made it a no-brainer for our enterprise stack.",
      rating: 5
    },
    {
      name: "Ella Martinez",
      role: "Customer Experience Head",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      quote: "Everything just works — from voice quality to CRM integrations. Caller.Digital nailed it.",
      rating: 5
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading enterprises across industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
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
      <EnterpriseCTA />
    </main>
  );
} 