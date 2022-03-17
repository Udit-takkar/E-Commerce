const { Router } = require('express');
const { getProducts } = require('../controllers/productController');

const router = Router();

router.route('/').get(getProducts);
//   .post(protect, authorize('admin'), productValidation(), validate, store);

module.exports = router;
