const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const query = {};
    const limit = 12;
    let offset = 0;
    let price = 1;

    const queryVariables = JSON.parse(req?.query?.queryVariables);
    console.log(queryVariables);

    if (typeof queryVariables.page !== 'undefined') {
      offset = Number(limit) * (queryVariables.page - 1);
    }

    if (
      typeof queryVariables.category !== 'undefined' &&
      queryVariables.category
    ) {
      query.category = { $in: [queryVariables.category] };
    }

    if (typeof queryVariables.price !== 'undefined') {
      price = queryVariables.price;
    }

    const products = await Product.find(query)
      .limit(Number(limit))
      .skip(Number(offset))
      .sort({ price: Number(price), createdAt: 'desc' })
      .populate('category')
      .exec();

    const productsCount = await Product.countDocuments(query);
    res.status(200).send({
      products,
      productsCount,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error in getting products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('ID', id);
    const product = await Product.findOne({ _id: id })
      .populate('category')
      .exec();

    if (!product) return res.status(404).send('Not Found');

    return res.status(200).send({ product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error in getting product by id' });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
