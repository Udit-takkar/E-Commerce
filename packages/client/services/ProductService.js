import apiClient from '../utils/apiClient';

const getProducts = async (fields = {}) => {
  try {
    const url = `/products`;
    console.log('Products Service', fields);
    const { data } = await apiClient.get(url, { params: fields });
    return data.products;
  } catch (error) {
    throw new Error(error);
  }
};

export const ProductService = {
  getProducts,
};
