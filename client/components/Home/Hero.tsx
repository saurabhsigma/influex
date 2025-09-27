import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your{' '}
              <span className="gradient-text">Digital Presence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We help businesses grow through innovative design, development, 
              and marketing strategies. From stunning websites to powerful 
              digital campaigns, we bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Get Started Today
                <ChevronRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button className="btn-secondary inline-flex items-center justify-center group">
                <PlayIcon className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Our Work
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-primary-200 rounded w-2/3"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full opacity-80"
              ></motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-500 rounded-full opacity-80"
              ></motion.div>
            </div>

            {/* Background Blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur-3xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
