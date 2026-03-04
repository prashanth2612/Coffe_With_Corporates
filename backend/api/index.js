require('module-alias/register');
require('dotenv').config({ path: '.env' });

const mongoose = require('mongoose');
const { globSync } = require('glob');
const path = require('path');

// Connect to MongoDB
if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.DATABASE)
    .then(() => console.log('✅ MongoDB connected.'))
    .catch((err) => console.error('❌ MongoDB connection failed:', err.message));
}

// Load models
const modelFiles = globSync('./src/models/**/*.js');
for (const filePath of modelFiles) {
  require(path.resolve(filePath));
}

const app = require('../src/app');

module.exports = app; // ✅ Vercel needs this instead of app.listen()