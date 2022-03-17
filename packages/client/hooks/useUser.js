import { parseCookies } from 'nookies';
import useSWR from 'swr';

import { getMe } from '../services/AuthServices';

const useUser = () => {
  const { token } = parseCookies({});
  const value = token ? '/api/me' : null;

  const { data, error } = useSWR(value, getMe);

  const isLoading = !data && !error;

  const user = data?.user;

  if (!token) {
    return {
      isLoading: false,
      error: null,
      data: null,
    };
  }

  return {
    data: user,
    error,
    isLoading,
  };
};

export default useUser;
