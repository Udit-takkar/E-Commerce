const passport = require('passport');

const protect = (req, res, next) =>
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(info);
    }
    if (!user)
      return res.status(401).json({
        message: 'Not Authorized',
      });
    req.user = user;
    return next();
  })(req, res, next);

// eslint-disable-next-line consistent-return
const authorize = roles => (req, res, next) => {
  const { user } = req;
  if (!roles.includes(user.role)) {
    return res.status(403).json({
      message: 'You are not authorize to perform this action',
    });
  }
  next();
};

module.exports = {
  protect,
  authorize,
};
