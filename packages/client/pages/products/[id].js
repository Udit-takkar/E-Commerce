import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ButtonAdd,
  ButtonCounter,
} from '../../components/Products/ProductCard';
import { ProductService } from '../../services/ProductService';
import useSWR from 'swr';
import useCart from '../../hooks/useCart';
import { getPercentageDecreased } from '../products';

const container = {
  position: 'relative',
  padding: '125px 5% 60px',
};

function ProductById({ product }) {
  // const { data: product } = useSWR(`/products/${id}`, () =>
  //   ProductService.getProductById(id),
  // );
  const { addToCart, cart, removeFromCart } = useCart();

  if (!product) return <div>Loading ...</div>;

  const onlyAboveProduct = cart.filter(item => item._id === product._id)[0];
  const isInCart = !!onlyAboveProduct;

  const percentage = getPercentageDecreased(product.price, product.sale_price);

  const isDiscount = product.price !== product.sale_price;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex" style={container}>
      <div className="SDetailsGrid">
        <div className="SImageContainer">
          <img src={product.imageURL} className="SImage" alt="product" />
        </div>
        <div className="SDetailContainer">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className="mb-4">{product.base_qty}</div>
          <div id="price-container">
            <div className="font-bold">₹{product.sale_price.toFixed(2)}</div>
            {isDiscount && (
              <div className="SOriginalCost">₹{product.price.toFixed(2)}</div>
            )}

            {isDiscount && (
              <small className="percentage-off">{percentage}% off</small>
            )}
          </div>
          <div className="mx-2 mt-12">
            <h2 className="font-bold">Description</h2>
            <p>{product.description}</p>
          </div>
          <div className="SButtonContainer">
            {isInCart ? (
              <ButtonCounter
                count={onlyAboveProduct.count}
                addToCart={() => handleAddToCart()}
                removeFromCart={() => removeFromCart(product)}
                styles={{ flex: 0.5 }}
              />
            ) : (
              <ButtonAdd
                isInCart={isInCart}
                addToCart={() => handleAddToCart()}
                styles={{ flex: 0.5 }}
              />
            )}
            <button
              type="button"
              className="SCheckoutButtonLarge"
              onClick={() => {
                console.log('Hello My Friend');
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>{product.title}</h1>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  try {
    const product = await ProductService.getProductById(id);
    return {
      props: { id, product },
    };
  } catch (err) {
    return {
      props: { id, product: null },
    };
  }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default ProductById;
