import { useCallback } from 'react';
import { mutate } from 'swr';

import { autoLogout } from '../utils/auth';

const useLogout = () =>
  useCallback(async () => {
    autoLogout();
    mutate('/api/me');
  }, []);

export default useLogout;
