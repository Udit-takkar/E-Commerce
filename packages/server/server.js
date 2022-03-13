const express = require('express');
const connectDB = require('./config/db');

const app = express();
const cors = require('cors');

connectDB();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Backend server is running! at ${PORT}`),
);
