'use client';


import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import toast, { Toaster } from 'react-hot-toast';
import 'react-phone-number-input/style.css';
import Footer from '../components/Footer';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/caller.digital?igsh=cHYxaWI0Z3k1cGh3&utm_source=qr",
      icon: "📸",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/caller-digital/",
      icon: "💼",
    }
  ];

  const contactInfo = [
    {
      title: "Email",
      value: "hello@caller.digital",
      icon: "✉️",
      link: "mailto:hello@caller.digital"
    },
    {
      title: "Schedule a Call",
      value: "Book a Consultation",
      icon: "📅",
      link: "https://calendly.com/vaibhav_applore/voice-ai-consultation"
    },
    {
      title: "Address",
      value: "803 Pegasus Tower, Noida, India",
      icon: "📍"
    }
  ];

  const validateForm = () => {
    const errors = [];
    
    if (formData.name.length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone_number || formData.phone_number.length < 10) {
      errors.push('Please enter a valid phone number');
    }
    
    if (formData.message.length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }
    
    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      toast.success('Message sent successfully!', { id: loadingToast });
      setFormData({ name: '', email: '', phone_number: '', message: '' });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to send message',
        { id: loadingToast }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            background: '#1F2937',
            color: '#fff',
            border: '1px solid #374151',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#1F2937',
            },
            style: {
              background: '#1F2937',
              color: '#fff',
              border: '1px solid #10B981',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#1F2937',
            },
            style: {
              background: '#1F2937',
              color: '#fff',
              border: '1px solid #EF4444',
            },
          },
          loading: {
            iconTheme: {
              primary: '#6366F1',
              secondary: '#1F2937',
            },
            style: {
              background: '#1F2937',
              color: '#fff',
              border: '1px solid #6366F1',
            },
          },
        }}
      />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg"
            >
              <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                    name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                    name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone_number" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <PhoneInput
                    international
                    defaultCountry="US"
                      value={formData.phone_number}
                    onChange={value => setFormData(prev => ({ ...prev, phone_number: value || '' }))}
                    className="w-full rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                    name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-teal-500 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <div className={`text-gray-400 text-sm font-semibold ${info.link ? '' : 'opacity-60'}`}>{info.title}</div>
                        {info.title === 'Address' ? (
                          <a
                            href="https://maps.app.goo.gl/e5J6LUrUAyWsrnj7A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-blue-500 transition-colors underline font-medium"
                          >
                            {info.value}
                          </a>
                        ) : info.link ? (
                          <a 
                            href={info.link}
                            className="text-blue-500 hover:underline font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Connect With Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white border border-gray-200 shadow px-4 py-3 rounded-xl text-lg font-medium text-gray-700 hover:shadow-lg hover:text-blue-500 transition-all"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 