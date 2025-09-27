const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['design', 'website', 'software', 'seo', 'social-media', 'content']
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    isMain: {
      type: Boolean,
      default: false
    }
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  client: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    company: {
      type: String,
      default: ''
    }
  },
  projectUrl: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);

