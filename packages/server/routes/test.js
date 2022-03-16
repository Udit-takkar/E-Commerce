/* eslint-disable consistent-return */
const express = require('express');
const Product = require('../models/Product');
const Category = require('../models/Category');

const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.post('/', async (req, res) => {
  try {
    // const category = new Category(req.body.category);
    // await category.save();
    const product = new Product(req.body.product);
    await product.save();

    res.json({
      status: 201,
      message: 'Data Added successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
