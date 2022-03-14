const { body, validationResult } = require('express-validator');

const loginValidation = () => [
  body('email')
    .isEmail()
    .withMessage('Email is not a valid email')
    .trim()
    .escape(),
  body('password')
    .isLength({ min: 6 })
    .trim()
    .escape()
    .withMessage('Must be at least 6 chars long'),
];

const signUpValidation = () => [
  body('name')
    .isLength({ min: 4 })
    .withMessage('Name must be at least 4 chars long')
    .trim()
    .escape(),
  body('email')
    .isEmail()
    .withMessage('Email is not a valid email')
    .trim()
    .escape(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 chars long')
    .trim()
    .escape(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    message: 'The given data was invalid',
    errors: extractedErrors,
  });
};

module.exports = {
  validate,
  signUpValidation,
  loginValidation,
};
