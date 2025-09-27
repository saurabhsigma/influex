import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const TestimonialsCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      position: 'CEO',
      message: 'Influex transformed our digital presence completely. Their team delivered exceptional results and exceeded our expectations in every way.',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      position: 'Marketing Director',
      message: 'The website they built for us increased our conversion rate by 150%. Their attention to detail and user experience is outstanding.',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      position: 'Founder',
      message: 'Working with Influex was a game-changer. Their creative approach and technical expertise helped us stand out in a crowded market.',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Finance Corp',
      position: 'CTO',
      message: 'Their software development team delivered a robust solution that scaled perfectly with our business growth. Highly recommended!',
      rating: 5,
      avatar: '/api/placeholder/80/80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].message}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/testimonials"
            className="btn-secondary inline-flex items-center"
          >
            Read More Testimonials
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

