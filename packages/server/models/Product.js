const { Schema, model } = require('mongoose');

const { String, Number, ObjectId } = Schema.Types;

const ProductSchema = new Schema(
  {
    name: String,
    price: Number,
    sale_price: Number,
    imageURL: String,
    category: {
      type: ObjectId,
      ref: 'Category',
    },
    description: String,
  },
  {
    timestamps: true,
  },
);

module.exports = model('Product', ProductSchema);
