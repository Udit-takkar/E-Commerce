import apiClient from '../utils/apiClient';

const getCategories = async () => {
  try {
    const url = `/categories`;
    const { data } = await apiClient.get(url);
    return data.categories;
  } catch (error) {
    throw new Error(error);
  }
};

export const CategoryService = {
  getCategories,
};
