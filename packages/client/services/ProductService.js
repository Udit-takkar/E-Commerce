import apiClient from '../utils/apiClient';

const getProducts = async (fields = {}) => {
  try {
    const url = `/products`;
    console.log('Products Service', fields);
    const { data } = await apiClient.get(url, { params: fields });
    console.log('Product', data.products);

    return data.products;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductById = async id => {
  try {
    const url = `/products/${id}`;
    console.log('Products Service', id);
    const { data } = await apiClient.get(url);
    console.log('Product', data.product);
    return data.product;
  } catch (error) {
    throw new Error(error);
  }
};

export const ProductService = {
  getProducts,
  getProductById,
};
