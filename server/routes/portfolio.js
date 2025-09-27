const express = require('express');
const Portfolio = require('../models/Portfolio');

const router = express.Router();

// @route   GET /api/portfolio
// @desc    Get all portfolio items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, featured, limit = 12, page = 1 } = req.query;
    
    let query = {};
    if (category && category !== 'all') {
      query.category = category;
    }
    if (featured === 'true') {
      query.featured = true;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const portfolio = await Portfolio.find(query)
      .sort({ completedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Portfolio.countDocuments(query);

    res.json({
      portfolio,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / parseInt(limit)),
        total
      }
    });
  } catch (error) {
    console.error('Get portfolio error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/portfolio/:id
// @desc    Get single portfolio item
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    res.json(portfolio);
  } catch (error) {
    console.error('Get portfolio item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/portfolio/categories
// @desc    Get portfolio categories
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = await Portfolio.distinct('category');
    res.json(categories);
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

