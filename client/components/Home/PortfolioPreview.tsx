import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Website',
      image: '/api/placeholder/400/300',
      description: 'Modern e-commerce solution with advanced features',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Design',
      image: '/api/placeholder/400/300',
      description: 'Complete brand identity for a tech startup',
      technologies: ['Figma', 'Illustrator', 'Photoshop']
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'Software',
      image: '/api/placeholder/400/300',
      description: 'Cross-platform mobile application',
      technologies: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 4,
      title: 'SEO Campaign',
      category: 'Marketing',
      image: '/api/placeholder/400/300',
      description: 'Increased organic traffic by 300%',
      technologies: ['SEO', 'Analytics', 'Content Strategy']
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent work and see how we've helped businesses 
            achieve their digital goals through innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-primary-300 opacity-50">
                      {item.category === 'Website' && '🌐'}
                      {item.category === 'Design' && '🎨'}
                      {item.category === 'Software' && '💻'}
                      {item.category === 'Marketing' && '📈'}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200"
                  >
                    View Project
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
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
            href="/portfolio"
            className="btn-primary inline-flex items-center"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;

