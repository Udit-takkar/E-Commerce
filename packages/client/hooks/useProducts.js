import useSWR from 'swr';
import { useState, useMemo } from 'react';
import { ProductService } from '../services/ProductService';

const useProducts = () => {
  const [queryVariables, setQueryVariables] = useState({
    page: 1,
    price: 1,
    category: null,
  });

  const params = useMemo(
    () => JSON.stringify({ queryVariables }),
    [queryVariables.category, queryVariables.page, queryVariables.price],
  );
  const { data, error } = useSWR(['/api/products', params], () =>
    ProductService.getProducts({ queryVariables }),
  );

  const isLoading = !data;

  return {
    data,
    setQueryVariables,
    isLoading,
  };
};

export default useProducts;
