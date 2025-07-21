'use client';

import { motion } from 'framer-motion';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';
import Footer from '@/app/components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {
  // Settings for the testimonials slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
      name: "Sarah Johnson",
      role: "Customer Service Director",
      company: "TechCorp Solutions",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "Caller.Digital has revolutionized our customer service operations. The AI voice solutions have reduced our response time by 60% while maintaining high customer satisfaction levels.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Global Retail Inc.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "The multilingual capabilities of Caller.Digital's platform have allowed us to expand into new markets with confidence. Our customer engagement has improved significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Experience",
      company: "FinServ Group",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "Implementation was seamless, and the results were immediate. We've seen a 40% increase in customer satisfaction scores since partnering with Caller.Digital.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "IT Director",
      company: "Healthcare Solutions",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      content: "The scalability and reliability of the platform are outstanding. We handle thousands of patient inquiries daily without any hiccups.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "VP of Operations",
      company: "Retail Chain Corp",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      content: "Caller.Digital's AI voice solutions have transformed how we handle customer support. The automation has saved us countless hours while improving service quality.",
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Google_Cloud_Logo.svg"
    },
    {
      name: "Amazon Web Services",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg"
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    }
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
              Discover how businesses are transforming their customer service with our AI-powered solutions
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

      {/* Testimonials Section with enhanced cards */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from businesses that have transformed their customer service with Caller.Digital
            </p>
          </motion.div>

          <div className="testimonials-slider">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-[420px] hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-full animate-pulse" style={{ padding: '2px' }}>
                            <div className="w-full h-full bg-white rounded-full" />
                          </div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover relative z-10"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{testimonial.name}</h3>
                          <p className="text-violet-500 text-sm line-clamp-1">{testimonial.role}</p>
                          <p className="text-gray-500 text-sm line-clamp-1">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <RiDoubleQuotesL className="text-4xl text-violet-200 mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                        <p className="text-gray-600 leading-relaxed line-clamp-6">{testimonial.content}</p>
                      </div>
                      <div className="flex items-center pt-4 mt-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <RiStarFill className="text-yellow-400 w-5 h-5" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Trusted Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with industry leaders to deliver exceptional customer experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full h-32 flex items-center justify-center group">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-[120px] max-h-[60px] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "98%",
                label: "Client Satisfaction",
                description: "Average satisfaction rate across all clients"
              },
              {
                stat: "500+",
                label: "Active Clients",
                description: "Trusted by businesses worldwide"
              },
              {
                stat: "24/7",
                label: "Support Coverage",
                description: "Round-the-clock automated assistance"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 mb-4">
                  {item.stat}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced custom styles for Slick slider */}
      <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li button:before {
          color: #8b5cf6;
          opacity: 0.25;
          font-size: 8px;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          color: #8b5cf6;
          opacity: 1;
          transform: scale(1.5);
        }
        .testimonials-slider .slick-slide {
          padding: 1rem;
          height: auto;
          opacity: 0.5;
          transition: all 0.5s ease;
        }
        .testimonials-slider .slick-slide.slick-active {
          opacity: 1;
        }
        .testimonials-slider .slick-track {
          display: flex !important;
        }
        .testimonials-slider .slick-slide > div {
          height: 100%;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </main>
  );
} 