import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Graphic Designing & Branding', href: '/services#graphic-design-branding' },
    { name: 'Social Media Management', href: '/services#social-media-management' },
    { name: 'Photoshoot & Cinematography', href: '/services#photoshoot-cinema' },
    { name: 'Meta & Google Ads', href: '/services#meta-google-ads' },
    { name: 'Website Designing', href: '/services#website-designing' },
    { name: 'App Development', href: '/services#app-development' },
    { name: 'Software Development', href: '/services#software-development' },
    { name: 'Influencer Marketing & UGC', href: '/services#influencer-ugc' },
    { name: 'Hoarding & Billboards', href: '/services#hoarding-billboards' },
    { name: 'News Media & PR Coverage', href: '/services#news-media-pr' },
    { name: 'End-to-End 360 Campaigns', href: '/services#end-to-end-360' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold gradient-text"
            >
              Influex
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are a full-service digital marketing agency helping businesses 
              grow their online presence through innovative design, development, 
              and marketing strategies.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/influexlab?igsh=cmV0bXM2anFtNmIw',
                  icon: 'mdi:instagram',
                  external: true,
                },
                {
                  name: 'Gmail',
                  href: 'mailto:influexlab@gmail.com',
                  icon: 'mdi:gmail',
                  external: false,
                },
                {
                  name: 'WhatsApp',
                  href: 'https://wa.me/919661196066',
                  icon: 'mdi:whatsapp',
                  external: true,
                },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={item.name}
                >
                  <Icon icon={item.icon} className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>834001, Lalpur, Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>influexlab@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.01 1.01l-1.5 2.5a1 1 0 01-.8.4H2a1 1 0 01-1-1V3z" />
                  <path d="M4 6h2.5l1.5 2.5L7 8.5H4V6z" />
                </svg>
                <span>+91 96611 96066</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Influex Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

