import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: 'mdi:palette',
      title: 'Graphic Designing & Branding',
      description: 'Build a memorable brand identity with logos, guidelines, and visual systems.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'mdi:account-group',
      title: 'Social Media Management',
      description: 'Grow and engage your audience with strategy, content calendars, and community management.',
      color: 'from-sky-500 to-blue-500'
    },
    {
      icon: 'mdi:camera',
      title: 'Photoshoot & Cinematography',
      description: 'High-quality product shoots, reels, and brand films to elevate your storytelling.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: 'mdi:google-ads',
      title: 'Meta & Google Ads',
      description: 'Performance-driven campaigns across Meta and Google to maximize ROI.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: 'mdi:web',
      title: 'Website Designing',
      description: 'Conversion-focused website UI/UX that’s fast, accessible, and on-brand.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: 'mdi:cellphone',
      title: 'App Development',
      description: 'Modern, scalable mobile apps tailored to your product vision and users.',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: 'mdi:application',
      title: 'Software Development',
      description: 'Custom platforms, dashboards, and integrations built for growth.',
      color: 'from-lime-500 to-green-600'
    },
    {
      icon: 'mdi:account-star-outline',
      title: 'Influencer Marketing & UGC',
      description: 'Scale trust with creators and UGC that converts across channels.',
      color: 'from-fuchsia-500 to-rose-500'
    },
    {
      icon: 'mdi:billboard',
      title: 'Hoarding & Billboards',
      description: 'High-impact outdoor ads—strategy, design, placement, and execution.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: 'mdi:newspaper-variant-multiple-outline',
      title: 'News Media & PR Coverage',
      description: 'Earned media, press releases, and PR campaigns for brand authority.',
      color: 'from-slate-500 to-gray-700'
    },
    {
      icon: 'mdi:orbit-variant',
      title: 'End-to-End 360 Campaigns',
      description: 'Integrated campaigns across touchpoints—from strategy to measurement.',
      color: 'from-primary-600 to-secondary-600'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing and development services 
            to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform duration-200"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="btn-primary inline-flex items-center"
          >
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;

