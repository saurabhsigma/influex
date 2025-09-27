const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true,
    maxlength: [100, 'Company cannot be more than 100 characters']
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true,
    maxlength: [100, 'Position cannot be more than 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [500, 'Message cannot be more than 500 characters']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5
  },
  avatar: {
    type: String,
    default: ''
  },
  service: {
    type: String,
    enum: ['poster-design', 'website-building', 'software-development', 'seo-branding', 'social-media', 'content-marketing'],
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Portfolio',
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);

