/* eslint-disable camelcase */
import React from 'react';
import ProductCard from './ProductCard';

function ProductSection({
  category_id,
  category_name,
  product_count,
  products,
}) {
  return (
    <div className="mt-12 ml-12">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold">{category_name}</h1>
        <h1 className=" text-blue-500 mr-4">See All</h1>
      </div>
      <div className="SProductGrid">
        {products.map(product => (
          <ProductCard product={product} category_id={category_id} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
