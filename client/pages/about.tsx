import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Layout from '@/components/Layout/Layout';
import { 
  CheckIcon, 
  UsersIcon, 
  LightBulbIcon, 
  HeartIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We are passionate about what we do and committed to delivering exceptional results for our clients.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners to achieve shared success.'
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: 'With over 10 years in digital marketing, Sarah leads our strategic vision and client relationships.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Michael is a full-stack developer with expertise in modern web technologies and cloud architecture.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      image: '/api/placeholder/300/300',
      bio: 'Emily brings creative vision to life through stunning designs and compelling visual storytelling.'
    },
    {
      name: 'David Thompson',
      role: 'Marketing Strategist',
      image: '/api/placeholder/300/300',
      bio: 'David develops data-driven marketing strategies that drive growth and maximize ROI for our clients.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <Layout title="About Us - Influex Agency">
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
                About <span className="gradient-text">Influex</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a passionate team of designers, developers, and marketers 
                dedicated to helping businesses thrive in the digital world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={ref} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting value in an ever-evolving 
                  digital landscape.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that every business deserves access to world-class digital 
                  services, regardless of size or industry. Our mission is to make 
                  cutting-edge technology and creative excellence accessible to all.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg mb-6">
                  To be the leading digital agency that transforms how businesses 
                  connect with their customers through innovative technology and 
                  creative excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-6 h-6 text-green-300" />
                    <span>Global reach with local expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-6 h-6 text-green-300" />
                    <span>Sustainable and ethical practices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-6 h-6 text-green-300" />
                    <span>Continuous innovation and learning</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture, 
                relationships, and approach to work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together creativity, technical 
                expertise, and business acumen to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <StarIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Impact</h2>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-primary-100">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;

