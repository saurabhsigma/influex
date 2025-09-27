import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Our clients consistently rate us highly for quality and service'
    },
    {
      number: '50+',
      label: 'Team Members',
      description: 'Expert designers, developers, and marketers working together'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock support to ensure your success'
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

