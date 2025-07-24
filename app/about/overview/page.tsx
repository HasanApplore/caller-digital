'use client';

import { motion } from 'framer-motion';
import { RiRocketFill, RiEyeFill, RiBarChartBoxFill, RiShieldCheckFill, RiScales3Fill, RiLineChartFill } from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../../components/Footer';
import { useState } from 'react';

// Blog type
interface Blog {
  image: string;
  title: string;
  excerpt: string;
  body: string;
}

// BlogSection component for blog grid and modal
function BlogSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);
  const blogs: Blog[] = [
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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Latest from Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => { setActiveBlog(blog); setModalOpen(true); }}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{blog.excerpt}</p>
                <span className="text-blue-500 font-medium mt-auto">Read More</span>
              </div>
            </div>
          ))}
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
    </section>
  );
}

export default function Overview() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      {/* Banner Section */}
      <section
        className="w-full relative min-h-[60vh] flex items-center justify-center bg-cover bg-center border-b border-gray-100"
        style={{ backgroundImage: "url('/diverse-businesspeople-having-meeting.jpg')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center items-start text-left w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Company Overview</h1>
            <p className="text-lg md:text-2xl text-gray-100 mb-6 max-w-xl drop-shadow-lg">Revolutionizing customer experience through voice AI and automation</p>
            <nav className="text-sm text-gray-200" aria-label="Breadcrumb">
              <ol className="list-reset flex items-center">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><span className="mx-2">&gt;</span></li>
                <li className="text-gray-100">Company Overview</li>
              </ol>
            </nav>
          </div>
          {/* Right: Empty for spacing on desktop */}
          <div className="flex-1 hidden md:block" />
        </div>
      </section>

       {/* Split Section: About Us */}
       <section className="w-full bg-white py-12 md:py-20 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 gap-10 md:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center w-full md:w-1/2">
            {/* Badge */}
            <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
              <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z"/><circle cx="10" cy="10" r="3"/></svg>
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Caller.Digital: Built for Scale, Powered by AI</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">Caller.Digital is a next-gen AI-powered customer service platform that helps businesses automate support, enhance engagement, and scale communication efficiently across channels. We specialize in voice bots, chat automation, and omnichannel solutions tailored for enterprise needs.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-800 text-base mb-2 w-full max-w-lg">
              <li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-500 align-middle"><svg id="glyph" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><path d="m16 2c-7.72998 0-14.02002 6.27997-14.02002 14 .77004 18.57275 27.27283 18.56734 28.04007-.00011-.00003-7.71993-6.29007-13.99989-14.02005-13.99989zm7.03998 10.94-10.29999 7.71997c-.24275.17572-.54909.24552-.83002.16998-.28998-.06995-.52997-.25995-.66998-.51996l-2.58002-5.15002c-.56949-1.18745 1.17055-2.07195 1.79006-.89992-.00002-.00004 2.04997 4.07992 2.04997 4.07992l9.34998-7c1.05474-.76788 2.24849.79833 1.19 1.60004z"/></svg></span>AI-Powered Voice Bots</li>
              <li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-500 align-middle"><svg id="glyph" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><path d="m16 2c-7.72998 0-14.02002 6.27997-14.02002 14 .77004 18.57275 27.27283 18.56734 28.04007-.00011-.00003-7.71993-6.29007-13.99989-14.02005-13.99989zm7.03998 10.94-10.29999 7.71997c-.24275.17572-.54909.24552-.83002.16998-.28998-.06995-.52997-.25995-.66998-.51996l-2.58002-5.15002c-.56949-1.18745 1.17055-2.07195 1.79006-.89992-.00002-.00004 2.04997 4.07992 2.04997 4.07992l9.34998-7c1.05474-.76788 2.24849.79833 1.19 1.60004z"/></svg></span>Multilingual Support</li>
              <li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-500 align-middle"><svg id="glyph" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><path d="m16 2c-7.72998 0-14.02002 6.27997-14.02002 14 .77004 18.57275 27.27283 18.56734 28.04007-.00011-.00003-7.71993-6.29007-13.99989-14.02005-13.99989zm7.03998 10.94-10.29999 7.71997c-.24275.17572-.54909.24552-.83002.16998-.28998-.06995-.52997-.25995-.66998-.51996l-2.58002-5.15002c-.56949-1.18745 1.17055-2.07195 1.79006-.89992-.00002-.00004 2.04997 4.07992 2.04997 4.07992l9.34998-7c1.05474-.76788 2.24849.79833 1.19 1.60004z"/></svg></span>Omnichannel Integration</li>
              <li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-500 align-middle"><svg id="glyph" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><path d="m16 2c-7.72998 0-14.02002 6.27997-14.02002 14 .77004 18.57275 27.27283 18.56734 28.04007-.00011-.00003-7.71993-6.29007-13.99989-14.02005-13.99989zm7.03998 10.94-10.29999 7.71997c-.24275.17572-.54909.24552-.83002.16998-.28998-.06995-.52997-.25995-.66998-.51996l-2.58002-5.15002c-.56949-1.18745 1.17055-2.07195 1.79006-.89992-.00002-.00004 2.04997 4.07992 2.04997 4.07992l9.34998-7c1.05474-.76788 2.24849.79833 1.19 1.60004z"/></svg></span>Real-time Analytics</li>
              <li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-500 align-middle"><svg id="glyph" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><path d="m16 2c-7.72998 0-14.02002 6.27997-14.02002 14 .77004 18.57275 27.27283 18.56734 28.04007-.00011-.00003-7.71993-6.29007-13.99989-14.02005-13.99989zm7.03998 10.94-10.29999 7.71997c-.24275.17572-.54909.24552-.83002.16998-.28998-.06995-.52997-.25995-.66998-.51996l-2.58002-5.15002c-.56949-1.18745 1.17055-2.07195 1.79006-.89992-.00002-.00004 2.04997 4.07992 2.04997 4.07992l9.34998-7c1.05474-.76788 2.24849.79833 1.19 1.60004z"/></svg></span>Scalable Infrastructure</li>
              <li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-500 align-middle"><svg id="glyph" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current"><path d="m16 2c-7.72998 0-14.02002 6.27997-14.02002 14 .77004 18.57275 27.27283 18.56734 28.04007-.00011-.00003-7.71993-6.29007-13.99989-14.02005-13.99989zm7.03998 10.94-10.29999 7.71997c-.24275.17572-.54909.24552-.83002.16998-.28998-.06995-.52997-.25995-.66998-.51996l-2.58002-5.15002c-.56949-1.18745 1.17055-2.07195 1.79006-.89992-.00002-.00004 2.04997 4.07992 2.04997 4.07992l9.34998-7c1.05474-.76788 2.24849.79833 1.19 1.60004z"/></svg></span>CRM & IVR Ready</li>
            </ul>
          </div>
          {/* Right Column: Image */}
          <div className="flex-1 flex justify-center md:justify-end w-full md:w-1/2">
            <div className=" md:p-4 flex items-center justify-center w-full max-w-xs md:max-w-sm lg:max-w-md h-64 md:h-80 lg:h-96">
              <img
                src="/diverse-businesspeople-having-meeting.jpg"
                alt="About Caller.Digital"
                className="rounded-xl object-cover w-full h-full shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="w-full bg-white py-12 md:py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {/* Top Row: Main Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">200K+</div>
              <div className="text-base md:text-lg text-gray-600">Voice Minutes Processed/Month</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">99.9%</div>
              <div className="text-base md:text-lg text-gray-600">Platform Uptime & Reliability</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">50+</div>
              <div className="text-base md:text-lg text-gray-600">Enterprise Clients Served</div>
            </div>
          </div>

          {/* Mission & Vision Section */}
           {/* Mission & Vision Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <RiRocketFill className="w-10 h-10 text-violet-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with intelligent voice solutions that transform customer interactions, drive efficiency, and deliver exceptional experiences at scale.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <RiEyeFill className="w-10 h-10 text-violet-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in AI-powered voice solutions, setting new standards in customer service automation and multilingual communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
        </div>
          {/* Bottom Row: Circular Stats
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            <div className="flex flex-col items-center ">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white mb-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">68M</span>
              </div>
              <span className="text-xs md:text-sm text-gray-500 font-medium text-center">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white mb-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">16K</span>
              </div>
              <span className="text-xs md:text-sm text-gray-500 font-medium text-center">Creative Minds</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white mb-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">62M</span>
              </div>
              <span className="text-xs md:text-sm text-gray-500 font-medium text-center">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white mb-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">7K</span>
              </div>
              <span className="text-xs md:text-sm text-gray-500 font-medium text-center">Innovative Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white mb-2">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">38M</span>
              </div>
              <span className="text-xs md:text-sm text-gray-500 font-medium text-center">Collaborative Team</span>
            </div>
          </div>
        </div> */}
      </section>

      {/* Message from Founder & CEO Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-0 px-10 sm:px-6 lg:px-8 min-h-[350px] md:min-h-[400px]">
          {/* Left: CEO Image (4/10) */}
          <div className="flex-[4] flex-shrink-0 flex items-center justify-center">
            <div className="rounded-l-2xl rounded-r-none overflow-hidden border-4 border-blue-100 bg-blue-50 shadow-md flex items-center justify-center">
              <img
                src="/vaibhav.jpeg"
                alt="Vaibhav Singh, Founder & CEO"
                className="object-cover max-h-80 w-auto"
              />
            </div>
          </div>
          {/* Right: Text Content (6/10) */}
          <div className="flex-[6] flex flex-col justify-center items-start text-left w-full px-0 md:px-12 py-8 md:py-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Message from Our Founder & CEO</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              At Caller.Digital, we’re not just building AI for automation — we’re building it for connection. Every conversation matters, and with our voice AI, we ensure businesses are always heard. Our mission is to humanize automation at scale — and we’re just getting started.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="font-bold text-gray-900 text-base md:text-lg">Vaibhav Singh</span>
              <span className="text-gray-500 text-sm">Founder & CEO</span>
              <a href="https://www.linkedin.com/in/vaibhavsingh1/" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Caller.Digital Section */}
      <section className="w-full bg-white py-12 md:py-16 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-4 sm:px-6 lg:px-8 items-center">
          {/* Left: Text and Feature Cards */}
          <div className="flex-[6] flex flex-col items-start justify-center w-full">
            <span className="uppercase tracking-wider text-3xl font-extrabold text-blue-600 mb-2">WHY CALLER.DIGITAL</span>
            <p className='text-xl text-black font-medium md:text-xl mt-2 mb-6'>Trusted by leading brands, Caller.Digital combines powerful AI with real-time analytics and seamless integrations. No hidden fees. No tech headaches. Just voice AI that works.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-2xl">
              {/* Card 1 */}
              <div className="bg-gray-50 rounded-xl shadow-sm p-5 flex flex-col items-start">
                <div className="w-10 h-10 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* LockClosed Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7a4.5 4.5 0 10-9 0v3.5M5.25 10.5h13.5M6.75 10.5v7.25A2.25 2.25 0 009 20h6a2.25 2.25 0 002.25-2.25V10.5" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900 mb-1">No Hidden Costs</div>
                <div className="text-gray-600 text-sm">Transparent pricing with no surprise charges</div>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-50 rounded-xl shadow-sm p-5 flex flex-col items-start">
                <div className="w-10 h-10 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* ChartBar Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m0 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900 mb-1">High Scalability</div>
                <div className="text-gray-600 text-sm">Supports 200K+ minutes/month per client</div>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-50 rounded-xl shadow-sm p-5 flex flex-col items-start">
                <div className="w-10 h-10 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* GlobeAlt Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900 mb-1">Multilingual Voice AI</div>
                <div className="text-gray-600 text-sm">20+ language support built-in</div>
              </div>
              {/* Card 4 */}
              <div className="bg-gray-50 rounded-xl shadow-sm p-5 flex flex-col items-start">
                <div className="w-10 h-10 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* Plug Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v6.75m10.5-6.75v6.75M4.5 21h15M4.5 21a2.25 2.25 0 01-2.25-2.25V15a2.25 2.25 0 012.25-2.25h15A2.25 2.25 0 0121 15v3.75A2.25 2.25 0 0118.75 21H4.5z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900 mb-1">Easy Integration</div>
                <div className="text-gray-600 text-sm">Works with CRMs, WhatsApp, IVR, and more</div>
              </div>
              {/* Card 5 */}
              <div className="bg-gray-50 rounded-xl shadow-sm p-5 flex flex-col items-start">
                <div className="w-10 h-10 mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* ChartPie Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 3v8.25H3m8.25 0A8.25 8.25 0 1021 12a8.25 8.25 0 00-8.25-8.25z" />
                  </svg>
                </div>
                <div className="font-bold text-gray-900 mb-1">Enterprise-Grade Analytics</div>
                <div className="text-gray-600 text-sm">Custom reporting and dashboards</div>
              </div>
            </div>
          </div>
          {/* Right: AI Themed Image Collage */}
          <div className="flex-[4] flex justify-center md:justify-end w-full">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-end">
              {/* Large vertical image */}
              <img src="/voice_bot.jpg" alt="AI Voice Bot" className="rounded-2xl shadow-lg w-40 h-64 md:w-48 md:h-80 object-cover" />
              <div className="flex flex-row md:flex-col gap-4 md:gap-6">
                {/* Small square image 1 */}
                <img src="/automated_customer_service.jpg" alt="Automated Customer Service" className="rounded-xl shadow-md w-24 h-24 md:w-28 md:h-28 object-cover rotate-2" />
                {/* Small square image 2 */}
                <img src="/omnichannel.jpg" alt="Omnichannel" className="rounded-xl shadow-md w-24 h-24 md:w-28 md:h-28 object-cover -rotate-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="w-full bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="uppercase text-xs text-gray-400 tracking-wider font-semibold">Trusted by</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 1" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
            <img src="https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 2" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 3" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
            <img src="https://images.unsplash.com/photo-1519340333755-c8921d7a7e78?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 4" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 5" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 6" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 7" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=80&h=80&q=80" alt="Client 8" className="h-12 w-auto grayscale opacity-80 hover:opacity-100 transition rounded" />
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
                linkedin: "https://www.linkedin.com/in/vaibhavsingh1/"
              },
              {
                name: "Abhinav Rathor",
                role: "Cofounder & CTO",
                image: "/abhinav.png",
                linkedin: "https://www.linkedin.com/in/abhinav-rathor/"
              },
              {
                name: "Vividha Singh",
                role: "Product Head",
                image: "/vividha.jpeg",
                linkedin: "https://www.linkedin.com/in/vividha-singh-15448020/"
              },
              {
                name: "Ravgun Singh",
                role: "Business Head",
                image: "/ravgun.jpeg",
                linkedin: "https://www.linkedin.com/in/ravgun-singh-664297119/"
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

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-violet-500 font-medium">{member.role}</p>
                  </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                quote: "Outstanding platform with excellent support. The analytics and reporting features give us insights we never had before.",
                rating: 5
              },
              {
                name: "Daniel Thomas",
                role: "Manager",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                quote: "Reliable, scalable, and cost-effective. Caller.Digital has exceeded our expectations in every way possible.",
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What industries does Caller.Digital serve?",
                answer: "We serve BFSI, retail, hospitality, healthcare, real estate, and more—anywhere customer communication matters."
              },
              {
                question: "Is Caller.Digital secure and compliant?",
                answer: "Yes, we follow industry best practices for security and compliance, including data encryption and privacy standards."
              },
              {
                question: "How quickly can we get started?",
                answer: "Most clients are up and running within days. Our onboarding is fast and fully supported."
              },
              {
                question: "Can Caller.Digital integrate with our CRM?",
                answer: "Absolutely. We offer seamless integrations with popular CRMs, IVR, WhatsApp, and more."
              }
            ].map((faq, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />


      {/* Full-Width Enterprise CTA Section */}
      <section className="w-full bg-gradient-to-br from-teal-400 via-blue-400 to-purple-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left">
              
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                Let AI Handle Your Customer Support
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-8">
                Join 50+ enterprises that trust Caller.Digital for automation</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-teal-400 hover:shadow-lg transition-all duration-300 shadow-md">
                  Book a demo
                </button>
                <button className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-teal-400 hover:shadow-lg transition-all duration-300 shadow-md">
                  Talk to Experts 
                </button>
              </div>

            
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <Footer />
    </main>
  );
} 