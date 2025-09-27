import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Layout from '@/components/Layout/Layout';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await axios.post('/api/inquiries', data);
      toast.success('Thank you! Your message has been sent successfully.');
      reset();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'poster-design', label: 'Poster Design' },
    { value: 'website-building', label: 'Website Building' },
    { value: 'software-development', label: 'Software Development' },
    { value: 'seo-branding', label: 'SEO & Branding' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'content-marketing', label: 'Content Marketing' },
    { value: 'other', label: 'Other' }
  ];

  const budgets = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' }
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  return (
    <Layout title="Contact Us - Influex Agency">
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Let's Work Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 max-w-3xl mx-auto"
            >
              Ready to transform your digital presence? Get in touch with our team 
              and let's discuss how we can help your business grow.
            </motion.p>
          </div>
        </section>

        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      {...register('timeline')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      {...register('subject', { required: 'Subject is required' })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Brief description of your project"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us more about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="spinner mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 96611 96066</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">influexlab@gmail.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-600">
                        834001, Lalpur, Ranchi, Jharkhand, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>500+ successful projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>98% client satisfaction rate</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>24/7 support available</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Free consultation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

