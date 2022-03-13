/* eslint-disable no-console */
const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.MONGO_URI;
console.log('DB URL', dbUrl);

const db = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = db;
