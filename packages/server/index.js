const bodyParser = require('body-parser');
const passport = require('passport');

const express = require('express');
const connectDB = require('./config/db');
const product = require('./routes/test');

const app = express();
const cors = require('cors');
require('./lib/passport');

connectDB();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use('/api/product', product);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Backend server is running! at ${PORT}`),
);
