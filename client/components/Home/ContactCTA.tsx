import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const ContactCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-12">
            Let's discuss your project and see how we can help you achieve 
            your digital goals. Get in touch with our team today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center group"
            >
              Start Your Project
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
            >
              <PhoneIcon className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Call Us Now
            </a>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-primary-100">+91 96611 96066</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-primary-100">influexlab@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-primary-100">834001, Lalpur, Ranchi, Jharkhand, India</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

