const Enum = require('enum');

const JWT_SECRET_KEY = 'jwt_secret';
const JWT_EXPIRES_IN = '7d';

const Role = new Enum({ User: 'user', Admin: 'admin', Seller: 'seller' });

module.exports = {
  JWT_SECRET_KEY,
  JWT_EXPIRES_IN,
  Role,
};
