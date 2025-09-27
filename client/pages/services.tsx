import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { Icon } from '@iconify/react';
import { 
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      id: 'graphic-design-branding',
      icon: 'mdi:palette',
      title: 'Graphic Designing & Branding',
      description: 'Build a memorable brand identity with logos, brand guidelines, and cohesive visual systems.',
      features: [
        'Logo & identity design',
        'Brand guidelines',
        'Marketing collateral',
        'Packaging & print',
        'Creative direction'
      ],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      id: 'social-media-management',
      icon: 'mdi:account-group',
      title: 'Social Media Management',
      description: 'Grow reach and engagement with content calendars, storytelling, and community management.',
      features: [
        'Content strategy & calendars',
        'Creative production',
        'Community management',
        'Reporting & insights',
        'Platform optimization'
      ],
      color: 'from-sky-500 to-blue-500',
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-600'
    },
    {
      id: 'photoshoot-cinema',
      icon: 'mdi:camera',
      title: 'Photoshoot & Cinematography',
      description: 'Product shoots, reels, and brand films that bring your story to life.',
      features: [
        'Concept & storyboarding',
        'On-site production',
        'Editing & color grading',
        'Short-form reels',
        'Product & lifestyle shoots'
      ],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 'meta-google-ads',
      icon: 'mdi:google-ads',
      title: 'Meta & Google Ads',
      description: 'Full-funnel performance campaigns across Meta and Google to maximize ROAS.',
      features: [
        'Campaign strategy',
        'Creative & copy',
        'Conversion tracking',
        'A/B testing',
        'Optimization & scaling'
      ],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-600'
    },
    {
      id: 'website-designing',
      icon: 'mdi:web',
      title: 'Website Designing',
      description: 'Conversion-focused website UI/UX that’s fast, accessible, and on-brand.',
      features: [
        'UX research',
        'Wireframes & prototypes',
        'Design systems',
        'Responsive layouts',
        'Accessibility (a11y)'
      ],
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'app-development',
      icon: 'mdi:cellphone',
      title: 'App Development',
      description: 'Modern, scalable mobile apps tailored to your product vision and users.',
      features: [
        'iOS & Android',
        'Cross-platform',
        'API integration',
        'Analytics & crash reports',
        'App Store launch'
      ],
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'software-development',
      icon: 'mdi:application',
      title: 'Software Development',
      description: 'Custom platforms, dashboards, and integrations built for growth.',
      features: [
        'Scalable architecture',
        'Secure auth & roles',
        'Third-party integrations',
        'Data models & APIs',
        'Cloud deployment'
      ],
      color: 'from-lime-500 to-green-600',
      bgColor: 'bg-lime-50',
      iconColor: 'text-lime-600'
    },
    {
      id: 'influencer-ugc',
      icon: 'mdi:account-star-outline',
      title: 'Influencer Marketing & UGC',
      description: 'Leverage creators and UGC to scale trust and conversions across channels.',
      features: [
        'Creator sourcing',
        'Contracting & briefs',
        'UGC production',
        'Whitelisting',
        'Performance tracking'
      ],
      color: 'from-fuchsia-500 to-rose-500',
      bgColor: 'bg-fuchsia-50',
      iconColor: 'text-fuchsia-600'
    },
    {
      id: 'hoarding-billboards',
      icon: 'mdi:billboard',
      title: 'Hoarding & Billboards',
      description: 'High-impact outdoor ads—strategy, creative, placement, and execution.',
      features: [
        'Media planning',
        'Creative design',
        'Vendor coordination',
        'Compliance & permits',
        'On-ground execution'
      ],
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'news-media-pr',
      icon: 'mdi:newspaper-variant-multiple-outline',
      title: 'News Media & PR Coverage',
      description: 'Earned media, interviews, and PR campaigns to build brand authority.',
      features: [
        'Press releases',
        'Media liaison',
        'Interview placements',
        'Thought leadership',
        'Coverage reporting'
      ],
      color: 'from-slate-500 to-gray-700',
      bgColor: 'bg-slate-50',
      iconColor: 'text-slate-600'
    },
    {
      id: 'end-to-end-360',
      icon: 'mdi:orbit-variant',
      title: 'End-to-End 360 Campaigns',
      description: 'Integrated campaigns across touchpoints—from strategy and production to measurement.',
      features: [
        'Go-to-market strategy',
        'Omnichannel planning',
        'Creative & production',
        'Media & influencers',
        'Analytics & optimization'
      ],
      color: 'from-primary-600 to-secondary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a comprehensive strategy tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Our team creates and develops solutions using the latest technologies and best practices.'
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'We launch your project and continuously monitor and optimize for maximum performance.'
    }
  ];

  return (
    <Layout title="Our Services - Influex Agency">
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive digital marketing and development services 
                to help your business thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={ref} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div id={service.id} className={`${service.bgColor} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon icon={service.icon} className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckIcon className={`w-5 h-5 ${service.iconColor} flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className={`inline-flex items-center ${service.iconColor} hover:opacity-80 font-semibold group-hover:translate-x-1 transition-transform duration-200`}
                    >
                      Get Started
                      <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is delivered 
                on time, on budget, and exceeds your expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent transform translate-x-4"></div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help you achieve 
                your digital goals.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
              >
                Start Your Project
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;

