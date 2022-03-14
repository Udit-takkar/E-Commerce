const { JWT_EXPIRES_IN, JWT_SECRET_KEY } = require('../config/constants');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const sendResponseToken = ({ user, res, statusCode }) => {
  const payload = {
    // eslint-disable-next-line no-underscore-dangle
    user_id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
  });

  // remove password from response
  // eslint-disable-next-line no-param-reassign
  user.password = undefined;

  res.status(statusCode).json({ data: { user, token }, success: true });
};

const login = async (req, res, next) => {
  passport.authenticate('login', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    sendResponseToken({ user, res, statusCode: 200 });
  })(req, res, next);
};

const signUp = async (req, res, next) => {
  passport.authenticate('signUp', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }

    sendResponseToken({ user, res, statusCode: 201 });
  })(req, res, next);
};

const getMe = async (req, res) => {
  res.status(200).json({ data: { user: req.user } });
};

module.exports = {
  getMe,
  signUp,
  sendResponseToken,
  login,
};
