const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Influex Agency Website...\n');

// Check if Node.js version is compatible
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 16) {
  console.error('❌ Node.js version 16 or higher is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version check passed:', nodeVersion);

// Install root dependencies
console.log('\n📦 Installing root dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Root dependencies installed');
} catch (error) {
  console.error('❌ Failed to install root dependencies:', error.message);
  process.exit(1);
}

// Install client dependencies
console.log('\n📦 Installing client dependencies...');
try {
  process.chdir('client');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Client dependencies installed');
  process.chdir('..');
} catch (error) {
  console.error('❌ Failed to install client dependencies:', error.message);
  process.exit(1);
}

// Install server dependencies
console.log('\n📦 Installing server dependencies...');
try {
  process.chdir('server');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Server dependencies installed');
  process.chdir('..');
} catch (error) {
  console.error('❌ Failed to install server dependencies:', error.message);
  process.exit(1);
}

// Create .env file for server if it doesn't exist
const serverEnvPath = path.join('server', '.env');
if (!fs.existsSync(serverEnvPath)) {
  console.log('\n📝 Creating server .env file...');
  const envContent = `MONGODB_URI=mongodb://localhost:27017/influex_agency
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000`;
  
  fs.writeFileSync(serverEnvPath, envContent);
  console.log('✅ Server .env file created');
}

// Create .env.local file for client if it doesn't exist
const clientEnvPath = path.join('client', '.env.local');
if (!fs.existsSync(clientEnvPath)) {
  console.log('\n📝 Creating client .env.local file...');
  const envContent = `NEXT_PUBLIC_API_URL=http://localhost:5000/api`;
  
  fs.writeFileSync(clientEnvPath, envContent);
  console.log('✅ Client .env.local file created');
}

console.log('\n🎉 Setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Make sure MongoDB is running on your system');
console.log('2. Update the JWT_SECRET in server/.env for security');
console.log('3. Run "npm run dev" to start both frontend and backend');
console.log('4. Visit http://localhost:3000 to see the website');
console.log('5. Run "cd server && node scripts/seed.js" to add sample data');
console.log('\n📚 For more information, check the README.md file');

