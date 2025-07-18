'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaRobot, FaPhoneAlt, FaChartLine, FaUsers, FaClock, FaShieldAlt, 
  FaCogs, FaHeadset, FaCheckCircle, FaBrain, FaMicrophone, FaGlobe, 
  FaHeart 
} from 'react-icons/fa';
import { BsLightningChargeFill, BsGraphUp } from 'react-icons/bs';
import ROICalculator from '../app/components/ROICalculator';
import Image from 'next/image';

interface SolutionPageProps {
  solution: any;
}

const iconMap: { [key: string]: any } = {
  FaRobot,
  FaPhoneAlt,
  FaChartLine,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaCogs,
  FaHeadset,
  FaCheckCircle,
  FaBrain,
  FaMicrophone,
  FaGlobe,
  FaHeart,
  BsLightningChargeFill,
  BsGraphUp
};

export default function SolutionPage({ solution }: SolutionPageProps) {
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case 'what-is':
        return (
          <section key={index} className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{section.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{section.content}</p>
                <p className="text-lg text-gray-600 mb-8">{section.subContent}</p>
                <div className="space-y-4 mb-8">
                  {section.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                {section.benefits && section.benefits.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {section.benefits.map((benefit: any, i: number) => (
                      <div key={i} className="flex items-start space-x-4 p-8 bg-white rounded-2xl border border-gray-100 shadow-md">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {renderIcon(benefit.icon)}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>
        );

      case 'benefits':
        return (
          <section key={index} className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{section.title}</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.items.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-4 text-blue-400">{renderIcon(item.icon)}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'features':
        return (
          <section key={index} className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{section.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.subtitle}</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-4 text-blue-400">{renderIcon(item.icon)}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'use-cases':
        return (
          <section key={index} className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{section.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.subtitle}</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{item.industry}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <div className="space-y-3">
                      {item.metrics.map((metric: string, j: number) => (
                        <div key={j} className="flex items-center text-gray-600">
                          <BsLightningChargeFill className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'roi':
        return (
          <section key={index} className="py-20 bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{section.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{section.content}</p>
                  <div className="space-y-6">
                    {section.metrics.map((metric: any, i: number) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-md">
                        <div>
                          <div className="text-gray-600">{metric.label}</div>
                          <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                        </div>
                        <div className="text-green-500 font-semibold">{metric.improvement}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md flex flex-col justify-center items-center"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Calculate Your ROI</h3>
                  <p className="text-gray-600 mb-8 text-center">
                    Use the calculator below to estimate your potential savings and return on investment with our AI-powered solutions.
                  </p>
                  <div className="w-full">
                    <ROICalculator />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      {/* Hero Image */}
      {solution.hero && solution.hero.heroImage && (
        <div className="max-w-5xl mx-auto px-4 pt-8">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={solution.hero.heroImage}
              alt={solution.title}
              width={1200}
              height={340}
              className="w-full h-[340px] object-cover object-center"
              priority
            />
          </div>
        </div>
      )}
      {/* Render all sections except FAQ */}
      {solution.sections.filter((section: any) => section.type !== 'faq').map((section: any, index: number) => renderSection(section, index))}
      {/* Remove the CTA Section at the bottom */}
    </main>
  );
} 