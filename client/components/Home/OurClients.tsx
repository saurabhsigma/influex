import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const OurClients = () => {
  const clients = [
    {
      name: "Tapan Sweets & Bakery",
      description: "Complete digital marketing solution for premium bakery chain",
      icon: BuildingOfficeIcon
    },
    {
      name: "V-Mart Diwali Campaign",
      description: "Managed 50+ (57) Creators for successful festive campaign",
      icon: UserIcon
    },
    {
      name: "V-Mart Dusshera Campaign",
      description: "Partnership with Tiny Owl Media Agency for seasonal marketing",
      icon: UserIcon
    },
    {
      name: "Nasta Bakery",
      description: "Organized and managed successful influencers meet-up event",
      icon: BuildingOfficeIcon
    },
    {
      name: "Buzz & Razeunite",
      description: "Managed influencers meet with Razeunite Marketing Agency",
      icon: BuildingOfficeIcon
    },
    {
      name: "Giva Raksha Bandhan",
      description: "Managed 10 creators for festival jewelry campaign",
      icon: UserIcon
    },
    {
      name: "Brooklyn Burgers & Shakes",
      description: "Managed 30 creators & handled comprehensive review campaign",
      icon: BuildingOfficeIcon
    },
    {
      name: "Restaurant Partners",
      description: "Annapurna Restaurant, Sugarr & Spice Bakery marketing",
      icon: BuildingOfficeIcon
    },
    {
      name: "TopRankers Ranchi",
      description: "Marketing Manager role for educational institute",
      icon: BuildingOfficeIcon
    },
    {
      name: "Marquet Media Partners",
      description: "IRM for Mocha Rnc, McDonald's Ranchi, Engine Brand & Revolt",
      icon: UserIcon
    },
    {
      name: "Education Sector",
      description: "Afairs Education, Shresth Dakshin digital marketing",
      icon: BuildingOfficeIcon
    },
    {
      name: "Kefi Marketing Partners",
      description: "Nevertheless Bakery, Kadhi Patta brand management",
      icon: BuildingOfficeIcon
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've had the privilege of working with amazing brands and helping them achieve their digital marketing goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{client.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{client.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. Your brand deserves the best digital marketing strategy.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;