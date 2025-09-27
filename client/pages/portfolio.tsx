import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Layout from '@/components/Layout/Layout';
import axios from 'axios';
import { 
  EyeIcon, 
  CodeBracketIcon, 
  PaintBrushIcon,
  ChartBarIcon,
  ShareIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  images: Array<{
    url: string;
    alt: string;
    isMain: boolean;
  }>;
  technologies: string[];
  client: {
    name: string;
    company: string;
  };
  projectUrl: string;
  completedAt: string;
  tags: string[];
}

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    fetchPortfolio();
    fetchCategories();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get('/api/portfolio');
      setPortfolio(response.data.portfolio);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/portfolio/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'design': return PaintBrushIcon;
      case 'website': return EyeIcon;
      case 'software': return CodeBracketIcon;
      case 'seo': return ChartBarIcon;
      case 'social-media': return ShareIcon;
      case 'content': return DocumentTextIcon;
      default: return EyeIcon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'design': return 'from-pink-500 to-rose-500';
      case 'website': return 'from-blue-500 to-cyan-500';
      case 'software': return 'from-green-500 to-emerald-500';
      case 'seo': return 'from-purple-500 to-violet-500';
      case 'social-media': return 'from-orange-500 to-red-500';
      case 'content': return 'from-indigo-500 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  if (loading) {
    return (
      <Layout title="Portfolio - Influex Agency">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Portfolio - Influex Agency">
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
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our recent work and see how we've helped businesses 
                achieve their digital goals through innovative solutions.
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
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                All Projects
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 capitalize ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {category.replace('-', ' ')}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPortfolio.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <EyeIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
                <p className="text-gray-600 mb-8">
                  {selectedCategory === 'all' 
                    ? 'We are currently updating our portfolio. Check back soon!'
                    : `No projects found in the ${selectedCategory.replace('-', ' ')} category.`
                  }
                </p>
                <a href="/contact" className="btn-primary">
                  Start Your Project
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPortfolio.map((item, index) => {
                  const CategoryIcon = getCategoryIcon(item.category);
                  const categoryColor = getCategoryColor(item.category);
                  
                  return (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        {/* Image Placeholder */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-16 h-16 bg-gradient-to-r ${categoryColor} rounded-xl flex items-center justify-center`}>
                              <CategoryIcon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                              {item.category.replace('-', ' ')}
                            </span>
                          </div>
                          {item.projectUrl && (
                            <div className="absolute top-4 right-4">
                              <a
                                href={item.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-50 transition-colors duration-200"
                              >
                                <EyeIcon className="w-5 h-5 text-gray-600" />
                              </a>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                            {item.technologies.length > 3 && (
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                +{item.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{item.client.name}</span>
                            <span>{new Date(item.completedAt).getFullYear()}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch with our team 
                to discuss your project requirements.
              </p>
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
              >
                Start Your Project
                <EyeIcon className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

