const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const { Role } = require('../config/constants');

const { String } = Schema.Types;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    imageURL: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  },
);

// hash password
UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    if (this.password) {
      const hash = await bcrypt.hashSync(this.password.toString(), 10);
      this.password = hash;
    }
  }
});

// check if password matches the hash password
UserSchema.methods.matchesPassword = function (password) {
  if (!this.password) {
    return false;
  }
  return bcrypt.compareSync(password, this.password);
};

module.exports = model('User', UserSchema);
