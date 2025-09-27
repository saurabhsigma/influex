const express = require('express');
const Testimonial = require('../models/Testimonial');

const router = express.Router();

// @route   GET /api/testimonials
// @desc    Get all testimonials
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { featured, service, limit = 10, page = 1 } = req.query;
    
    let query = {};
    if (featured === 'true') {
      query.featured = true;
    }
    if (service && service !== 'all') {
      query.service = service;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Testimonial.countDocuments(query);

    res.json({
      testimonials,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / parseInt(limit)),
        total
      }
    });
  } catch (error) {
    console.error('Get testimonials error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/testimonials/:id
// @desc    Get single testimonial
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json(testimonial);
  } catch (error) {
    console.error('Get testimonial error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/testimonials/services
// @desc    Get testimonial services
// @access  Public
router.get('/services', async (req, res) => {
  try {
    const services = await Testimonial.distinct('service');
    res.json(services);
  } catch (error) {
    console.error('Get testimonial services error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

