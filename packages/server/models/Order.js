const { Schema, model, Document, Types } = require('mongoose');

const { ObjectId, Number } = Schema.Types;

const OrderSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    items: [
      {
        quantity: {
          type: Number,
          default: 1,
        },
        product: {
          type: ObjectId,
          ref: 'Product',
        },
      },
    ],
    total: Number,
    // paymentMethod: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Order', OrderSchema);
