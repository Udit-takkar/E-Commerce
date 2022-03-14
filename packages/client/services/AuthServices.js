import apiClient from '../utils/apiClient';

export const login = async (email, password) => {
  try {
    const url = `/auth/login`;
    const { data } = await apiClient.post(url, { email, password });
    const userData = {
      user: data.data.user,
      token: data.data.token,
    };
    return userData;
  } catch (error) {
    throw new Error(error);
  }
};

export const signUp = async ({ email, password, name }) => {
  try {
    const url = `/auth/signUp`;
    const { data } = await apiClient.post(url, { email, password, name });
    const userData = {
      user: data.data.user,
      token: data.data.token,
    };
    return userData;
  } catch (error) {
    throw new Error(error);
  }
};
