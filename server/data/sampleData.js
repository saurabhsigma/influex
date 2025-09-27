const mongoose = require('mongoose');
const Portfolio = require('../models/Portfolio');
const Testimonial = require('../models/Testimonial');

const samplePortfolio = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.',
    category: 'website',
    images: [
      {
        url: '/api/placeholder/800/600',
        alt: 'E-commerce Platform Screenshot',
        isMain: true
      }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    client: {
      name: 'TechStart Inc.',
      company: 'TechStart Inc.'
    },
    projectUrl: 'https://example.com',
    completedAt: new Date('2023-10-15'),
    featured: true,
    tags: ['ecommerce', 'react', 'nodejs', 'mongodb']
  },
  {
    title: 'Brand Identity Design',
    description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines.',
    category: 'design',
    images: [
      {
        url: '/api/placeholder/800/600',
        alt: 'Brand Identity Design',
        isMain: true
      }
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    client: {
      name: 'Creative Agency',
      company: 'Creative Agency'
    },
    projectUrl: '',
    completedAt: new Date('2023-09-20'),
    featured: true,
    tags: ['branding', 'logo', 'design', 'identity']
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile application for task management with real-time synchronization and offline support.',
    category: 'software',
    images: [
      {
        url: '/api/placeholder/800/600',
        alt: 'Mobile App Screenshots',
        isMain: true
      }
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    client: {
      name: 'Productivity Corp',
      company: 'Productivity Corp'
    },
    projectUrl: 'https://apps.apple.com/example',
    completedAt: new Date('2023-11-05'),
    featured: true,
    tags: ['mobile', 'react-native', 'firebase', 'typescript']
  },
  {
    title: 'SEO Campaign',
    description: 'Comprehensive SEO strategy that increased organic traffic by 300% and improved search rankings.',
    category: 'seo',
    images: [
      {
        url: '/api/placeholder/800/600',
        alt: 'SEO Analytics Dashboard',
        isMain: true
      }
    ],
    technologies: ['SEO', 'Google Analytics', 'Search Console', 'Content Strategy'],
    client: {
      name: 'Finance Corp',
      company: 'Finance Corp'
    },
    projectUrl: '',
    completedAt: new Date('2023-08-30'),
    featured: false,
    tags: ['seo', 'analytics', 'content', 'marketing']
  },
  {
    title: 'Social Media Campaign',
    description: 'Engaging social media strategy that built a community of 50K+ followers and increased engagement by 250%.',
    category: 'social-media',
    images: [
      {
        url: '/api/placeholder/800/600',
        alt: 'Social Media Campaign',
        isMain: true
      }
    ],
    technologies: ['Instagram', 'Facebook', 'Twitter', 'Content Creation'],
    client: {
      name: 'Fashion Brand',
      company: 'Fashion Brand'
    },
    projectUrl: 'https://instagram.com/example',
    completedAt: new Date('2023-07-15'),
    featured: false,
    tags: ['social-media', 'instagram', 'content', 'community']
  },
  {
    title: 'Content Marketing Strategy',
    description: 'Data-driven content marketing approach that generated 10K+ leads and established thought leadership.',
    category: 'content',
    images: [
      {
        url: '/api/placeholder/800/600',
        alt: 'Content Marketing Strategy',
        isMain: true
      }
    ],
    technologies: ['Content Strategy', 'Blog Writing', 'Email Marketing', 'Analytics'],
    client: {
      name: 'B2B SaaS Company',
      company: 'B2B SaaS Company'
    },
    projectUrl: 'https://blog.example.com',
    completedAt: new Date('2023-06-10'),
    featured: false,
    tags: ['content', 'blog', 'email', 'b2b']
  }
];

const sampleTestimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    position: 'CEO',
    message: 'Influex transformed our digital presence completely. Their team delivered exceptional results and exceeded our expectations in every way. The website they built increased our conversion rate by 150%.',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'website-building',
    featured: true
  },
  {
    name: 'Michael Chen',
    company: 'E-commerce Solutions',
    position: 'Marketing Director',
    message: 'The website they built for us increased our conversion rate by 150%. Their attention to detail and user experience is outstanding. We highly recommend their services.',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'website-building',
    featured: true
  },
  {
    name: 'Emily Rodriguez',
    company: 'Creative Agency',
    position: 'Founder',
    message: 'Working with Influex was a game-changer. Their creative approach and technical expertise helped us stand out in a crowded market. The brand identity they created perfectly represents our vision.',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'seo-branding',
    featured: true
  },
  {
    name: 'David Thompson',
    company: 'Finance Corp',
    position: 'CTO',
    message: 'Their software development team delivered a robust solution that scaled perfectly with our business growth. The mobile app they built has been downloaded over 100K times. Highly recommended!',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'software-development',
    featured: true
  },
  {
    name: 'Lisa Wang',
    company: 'Fashion Brand',
    position: 'Marketing Manager',
    message: 'The social media campaign they created for us was phenomenal. We gained 50K+ followers and our engagement increased by 250%. Their content strategy is top-notch.',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'social-media',
    featured: false
  },
  {
    name: 'James Wilson',
    company: 'B2B SaaS Company',
    position: 'VP of Marketing',
    message: 'Their content marketing strategy generated over 10K leads for us. The blog content they created established us as thought leaders in our industry. Excellent work!',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'content-marketing',
    featured: false
  },
  {
    name: 'Maria Garcia',
    company: 'Productivity Corp',
    position: 'Product Manager',
    message: 'The mobile app they developed exceeded all our expectations. The user interface is intuitive and the performance is outstanding. Our users love it!',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'software-development',
    featured: false
  },
  {
    name: 'Robert Kim',
    company: 'Digital Agency',
    position: 'Creative Director',
    message: 'Influex helped us redesign our entire brand identity. The logo and visual elements they created perfectly capture our company values. Professional and creative team!',
    rating: 5,
    avatar: '/api/placeholder/80/80',
    service: 'seo-branding',
    featured: false
  }
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Portfolio.deleteMany({});
    await Testimonial.deleteMany({});

    // Insert sample data
    await Portfolio.insertMany(samplePortfolio);
    await Testimonial.insertMany(sampleTestimonials);

    console.log('Sample data seeded successfully!');
    console.log(`Inserted ${samplePortfolio.length} portfolio items`);
    console.log(`Inserted ${sampleTestimonials.length} testimonials`);
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = { seedDatabase, samplePortfolio, sampleTestimonials };

