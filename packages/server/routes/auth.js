const { Router } = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { login, signUp, getMe } = require('../controllers/authController');
const {
  validate,
  loginValidation,
  signUpValidation,
} = require('../validation');

const router = Router();

router.route('/signup').post(signUpValidation(), validate, signUp);
router.route('/login').post(loginValidation(), validate, login);

router.use(protect);
router.route('/me').get(getMe);

module.exports = router;
