import React from "react";

const EnterpriseCTA = () => (
 
<section className="w-full bg-gradient-to-br from-teal-400 via-blue-400 to-purple-400 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/80 backdrop-blur-md rounded-3xl px-8 py-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Left Side - Text */}
      <div className="text-center lg:text-left flex-1">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
          Let AI Handle Your Customer Support
        </h2>
        <p className="text-gray-700 text-lg">
          Join 50+ enterprises that trust <strong>CallerDigital</strong> for automation
        </p>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://calendly.com/vaibhav_applore/voice-ai-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
        >
          Book a demo
        </a>
        <a
          href="#contact"
          className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
        >
          Talk to Experts
        </a>
      </div>

    </div>
  </div>
</section>

);

export default EnterpriseCTA; 