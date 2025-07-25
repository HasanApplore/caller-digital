'use client';

import { motion } from 'framer-motion';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';
import Footer from '@/app/components/Footer';
import EnterpriseCTA from '@/app/components/EnterpriseCTA';

export default function Testimonials() {
  // Animation variants for sections
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Testimonial data
  const testimonials = [
    {
      name: 'Michael Lacefield',
      role: 'Co-founder, XYZ',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'Caller.Digital transformed our customer support operations. The AI voice bots are incredibly natural and our customer satisfaction scores have improved dramatically.',
      rating: 5
    },
    {
      name: 'Harry Callum',
      role: 'Manager',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'The automation capabilities are game-changing. We have scaled our support without increasing headcount, and the quality has never been better.',
      rating: 5
    },
    {
      name: 'Mason Robert',
      role: 'Co-founder, XYZ',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
      quote: 'Implementation was seamless and the results were immediate. Our team loves the new system and our customers appreciate the 24/7 availability.',
      rating: 4
    },
      {
        name: 'Amelia Margaret',
        role: 'Manager',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        content: "The multilingual support helped us expand into new markets effortlessly. Caller.Digital is a true partner in our growth journey. We saw increased engagement and improved communication efficiency across geographies.",
        rating: 5,
      },
      {
        name: 'Sophia Jennifer',
        role: 'Co-founder, XYZ',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        content: 'Outstanding platform with excellent support. The analytics and reporting features give us insights we never had before. Caller.Digital’s ability to integrate with our tech stack made adoption seamless.',
        rating: 5,
      },
      {
        name: 'Daniel Thomas',
        role: 'Manager',
        avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
        content: 'Reliable, scalable, and cost-effective. Caller.Digital has exceeded our expectations in every way possible. Our support operations have become leaner while handling more requests.',
        rating: 5,
      },
      {
        name: 'Natalie Carter',
        role: 'VP Operations',
        avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
        content: 'Our automation journey was accelerated thanks to Caller.Digital\'s voice AI. 10/10 experience. The voice accuracy, natural tone, and integration with our CRM saved hours weekly.',
        rating: 5,
      },
      {
        name: 'Jacob Harris',
        role: 'CTO, InnovateX',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        content: 'The API-first approach and scalability of Caller.Digital made it a no-brainer for our enterprise stack. Their team collaborated closely with us during onboarding and rollout.',
        rating: 5,
      },
      {
        name: 'Ella Martinez',
        role: 'Customer Experience Head',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        content: 'Everything just works — from voice quality to CRM integrations. Caller.Digital nailed it. Our team noticed a drop in manual queries and a smoother customer resolution rate.',
        rating: 5,
      },

  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      {/* Hero Section with enhanced animation */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4 mt-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
                Client Success Stories
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  and Testimonials
                </motion.span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Real experiences from businesses that have transformed their customer service with Caller.Digital
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

      {/* Testimonials Section with 3x3 Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-[420px] hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with avatar and name */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-full animate-pulse" style={{ padding: '2px' }}>
                        <div className="w-full h-full bg-white rounded-full" />
                      </div>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover relative z-10"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-violet-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote content */}
                  <div className="flex-grow">
                    <RiDoubleQuotesL className="text-4xl text-violet-200 mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                    <p className="text-gray-600 leading-relaxed line-clamp-6">"{testimonial.content || testimonial.quote}"</p>
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center pt-4 mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <RiStarFill className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <br / >
      {/*Client section*/}

     {/* Client Logos Section with Moving Ticker */}
     <section className="w-full bg-white py-16 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies that trust Caller.Digital for their customer service automation
            </p>
          </div>
          
          {/* First Moving Row */}
          <div className="relative mb-16">
            <div className="flex animate-scroll-left">
              {/* First set of clients */}
              <div className="flex items-center" style={{ gap: '0' }}>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/express-logistics.png" alt="Express Logistics" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector (1).jpg" alt="Health Care" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/hyundai-motor-company-logo-png-transparent-0.png" alt="Hyundai Motor" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/Logistics-Express-para-FONDO-BLANCO-RGB.png" alt="Logistics Express" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/man-cross-health-care-logo-vector.jpg" alt="Health Care Services" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/pngimg.com - red_bull_PNG8.png" alt="Red Bull" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/unnamed.jpg" alt="Express Healthcare" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector.jpg" alt="Healthcare Solutions" className="max-h-16 max-w-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center" style={{ gap: '0' }}>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/express-logistics.png" alt="Express Logistics" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector (1).jpg" alt="Health Care" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/hyundai-motor-company-logo-png-transparent-0.png" alt="Hyundai Motor" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/Logistics-Express-para-FONDO-BLANCO-RGB.png" alt="Logistics Express" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/man-cross-health-care-logo-vector.jpg" alt="Health Care Services" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/pngimg.com - red_bull_PNG8.png" alt="Red Bull" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/unnamed.jpg" alt="Express Healthcare" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector.jpg" alt="Healthcare Solutions" className="max-h-16 max-w-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Moving Row (opposite direction) */}
          <div className="relative">
            <div className="flex animate-scroll-right">
              {/* First set of clients */}
              <div className="flex items-center" style={{ gap: '0' }}>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/hyundai-motor-company-logo-png-transparent-0.png" alt="Hyundai Motor" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/express-logistics.png" alt="Express Logistics" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector.jpg" alt="Healthcare Solutions" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/pngimg.com - red_bull_PNG8.png" alt="Red Bull" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/Logistics-Express-para-FONDO-BLANCO-RGB.png" alt="Logistics Express" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/man-cross-health-care-logo-vector.jpg" alt="Health Care Services" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector (1).jpg" alt="Health Care" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/unnamed.jpg" alt="Express Healthcare" className="max-h-16 max-w-full object-contain" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center" style={{ gap: '0' }}>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/hyundai-motor-company-logo-png-transparent-0.png" alt="Hyundai Motor" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/express-logistics.png" alt="Express Logistics" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector.jpg" alt="Healthcare Solutions" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/pngimg.com - red_bull_PNG8.png" alt="Red Bull" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/Logistics-Express-para-FONDO-BLANCO-RGB.png" alt="Logistics Express" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/man-cross-health-care-logo-vector.jpg" alt="Health Care Services" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/health-care-logo-free-vector (1).jpg" alt="Health Care" className="max-h-16 max-w-full object-contain" />
                </div>
                <div className="w-40 h-20 flex items-center justify-center">
                  <img src="/unnamed.jpg" alt="Express Healthcare" className="max-h-16 max-w-full object-contain" />
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
            
      {/* Footer */}
      <EnterpriseCTA />
      <Footer />
    </main>
  );
} 