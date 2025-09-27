import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Layout from '@/components/Layout/Layout';
import axios from 'axios';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  position: string;
  message: string;
  rating: number;
  avatar: string;
  service: string;
  featured: boolean;
}

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    fetchTestimonials();
    fetchServices();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('/api/testimonials');
      setTestimonials(response.data.testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/testimonials/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const getServiceName = (service: string) => {
    const serviceNames: { [key: string]: string } = {
      'poster-design': 'Poster Design',
      'website-building': 'Website Building',
      'software-development': 'Software Development',
      'seo-branding': 'SEO & Branding',
      'social-media': 'Social Media Marketing',
      'content-marketing': 'Content Marketing'
    };
    return serviceNames[service] || service;
  };

  const filteredTestimonials = selectedService === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.service === selectedService);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  if (loading) {
    return (
      <Layout title="Testimonials - Influex Agency">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Testimonials - Influex Agency">
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Client <span className="gradient-text">Testimonials</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients 
                have to say about working with us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section ref={ref} className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => setSelectedService('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedService === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                All Services
              </button>
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedService === service
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {getServiceName(service)}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Testimonials Carousel */}
        {filteredTestimonials.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Reviews</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Some of our most impactful client success stories
                </p>
              </motion.div>

              <div className="relative max-w-4xl mx-auto">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center"
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(filteredTestimonials[currentIndex]?.rating || 5)].map((_, i) => (
                      <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                    "{filteredTestimonials[currentIndex]?.message}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {filteredTestimonials[currentIndex]?.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-gray-900">
                        {filteredTestimonials[currentIndex]?.name}
                      </div>
                      <div className="text-primary-600 font-medium">
                        {filteredTestimonials[currentIndex]?.position}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {filteredTestimonials[currentIndex]?.company}
                      </div>
                      <div className="text-primary-500 text-sm font-medium">
                        {getServiceName(filteredTestimonials[currentIndex]?.service || '')}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Navigation Buttons */}
                {filteredTestimonials.length > 1 && (
                  <>
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
                  </>
                )}

                {/* Dots Indicator */}
                {filteredTestimonials.length > 1 && (
                  <div className="flex justify-center space-x-2 mt-8">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* All Testimonials Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">All Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read what our clients have to say about their experience working with us
              </p>
            </motion.div>

            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No testimonials found</h3>
                <p className="text-gray-600 mb-8">
                  {selectedService === 'all' 
                    ? 'We are currently updating our testimonials. Check back soon!'
                    : `No testimonials found for ${getServiceName(selectedService)}.`
                  }
                </p>
                <a href="/contact" className="btn-primary">
                  Work With Us
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{testimonial.message}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.position}</div>
                        <div className="text-sm text-primary-600">{testimonial.company}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {getServiceName(testimonial.service)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's work together to create your own success story. 
                Get in touch with our team today.
              </p>
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
              >
                Start Your Project
                <StarIcon className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TestimonialsPage;

