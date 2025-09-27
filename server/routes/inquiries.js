const express = require('express');
const { body, validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');
const { auth } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/inquiries
// @desc    Create new inquiry
// @access  Public
router.post('/', [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email'),
  body('subject').trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const inquiryData = {
      ...req.body,
      user: req.user ? req.user._id : null
    };

    const inquiry = new Inquiry(inquiryData);
    await inquiry.save();

    res.status(201).json({
      message: 'Inquiry submitted successfully',
      inquiry
    });
  } catch (error) {
    console.error('Inquiry creation error:', error);
    res.status(500).json({ message: 'Server error during inquiry submission' });
  }
});

// @route   GET /api/inquiries
// @desc    Get user inquiries
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json(inquiries);
  } catch (error) {
    console.error('Get inquiries error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/inquiries/:id
// @desc    Get single inquiry
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const inquiry = await Inquiry.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json(inquiry);
  } catch (error) {
    console.error('Get inquiry error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/inquiries/:id
// @desc    Update inquiry
// @access  Private
router.put('/:id', auth, [
  body('subject').optional().trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message').optional().trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const inquiry = await Inquiry.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json({
      message: 'Inquiry updated successfully',
      inquiry
    });
  } catch (error) {
    console.error('Update inquiry error:', error);
    res.status(500).json({ message: 'Server error during inquiry update' });
  }
});

// @route   DELETE /api/inquiries/:id
// @desc    Delete inquiry
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const inquiry = await Inquiry.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Delete inquiry error:', error);
    res.status(500).json({ message: 'Server error during inquiry deletion' });
  }
});

module.exports = router;

