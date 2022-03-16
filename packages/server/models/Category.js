const { Schema, model } = require('mongoose');

const { String } = Schema.Types;

const CategorySchema = new Schema(
  {
    name: String,
    imageURL: String,
  },
  {
    timestamps: true,
  },
);

module.exports = model('Category', CategorySchema);
