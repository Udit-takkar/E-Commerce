import apiClient from '../utils/apiClient';

export const getMe = async () => {
  try {
    const { data } = await apiClient.get(`/auth/me`);

    const userData = {
      token: data.data.token,
      user: data.data.user,
    };

    return userData;
  } catch (error) {
    throw new Error(error);
  }
};

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

export const AuthServices = {
  getMe,
  login,
  signUp,
};
