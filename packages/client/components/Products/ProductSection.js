/* eslint-disable camelcase */
import React from 'react';
import ProductCard from './ProductCard';
import useCart from '../../hooks/useCart';

export function getPercentageDecreased(originalPrice, basePrice) {
  return Math.round(((originalPrice - basePrice) / originalPrice) * 100);
}

function ProductSection({
  category_id,
  category_name,
  product_count,
  products,
}) {
  const { addToCart, cart, removeFromCart } = useCart();

  return (
    <div className="mt-12 ml-12">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold">{category_name}</h1>
        <h1 className=" text-blue-500 mr-4">See All</h1>
      </div>
      <div className="SProductGrid">
        {products.map(product => {
          const onlyAboveProduct = cart.filter(
            item => item._id === product._id,
          )[0];
          const isInCart = !!onlyAboveProduct;

          const percentage = getPercentageDecreased(
            product.price,
            product.sale_price,
          );

          const isDiscount = product.price !== product.sale_price;

          const handleAddToCart = () => {
            console.log('Hello');
            // addToCart(product);
          };
          return (
            <ProductCard
              product={product}
              category_id={category_id}
              key={product.id}
              handleAddToCart={handleAddToCart}
              isInCart={isInCart}
              onlyAboveProduct={onlyAboveProduct}
              removeFromCart={removeFromCart}
              percentage={percentage}
              isDiscount={isDiscount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductSection;
