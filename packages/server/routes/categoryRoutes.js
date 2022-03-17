const { Router } = require('express');
const { getCategories } = require('../controllers/categoryController');

const router = Router();

router.route('/').get(getCategories);

module.exports = router;
