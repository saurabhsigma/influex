const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: ''
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [100, 'Subject cannot be more than 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot be more than 1000 characters']
  },
  service: {
    type: String,
    enum: ['poster-design', 'website-building', 'software-development', 'seo-branding', 'social-media', 'content-marketing', 'other'],
    default: 'other'
  },
  budget: {
    type: String,
    enum: ['under-5k', '5k-10k', '10k-25k', '25k-50k', '50k-plus'],
    default: 'under-5k'
  },
  timeline: {
    type: String,
    enum: ['asap', '1-month', '2-3-months', '3-6-months', 'flexible'],
    default: 'flexible'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'cancelled'],
    default: 'new'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);

