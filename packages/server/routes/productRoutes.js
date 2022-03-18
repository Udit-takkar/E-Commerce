const { Router } = require('express');
const {
  getProducts,
  getProductById,
} = require('../controllers/productController');

const router = Router();

router.route('/').get(getProducts);
//   .post(protect, authorize('admin'), productValidation(), validate, store);

router.route('/:id').get(getProductById);

module.exports = router;
