require('dotenv').config();
const mongoose = require('mongoose');
const { seedDatabase } = require('../data/sampleData');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/influex_agency');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const runSeed = async () => {
  await connectDB();
  await seedDatabase();
  process.exit(0);
};

runSeed();

