import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonAdd } from '../../components/Products/ProductCard';

const product = {
  is_hidden: false,
  id: 89063,
  base_cost: 53,
  original_cost: 56,
  base_qty: 'per unit',
  image:
    'https://firebasestorage.googleapis.com/v0/b/mydukaan-e9b72.appspot.com/o/EVEREST-TURMERIC-(HALDI)-200-GRAM.png?alt=media',
  name: 'EVEREST TURMERIC (HALDI) 200 GRAM',
  is_active: true,
  variants: [],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida felis quis velit vestibulum, molestie euismod velit gravida. Pellentesque rutrum leo non tellus commodo tincidunt. Aenean ut felis faucibus, convallis nulla eget, aliquet augue. Cras sapien velit, facilisis sit amet rutrum in, tincidunt maximus lacus',
};

const container = {
  position: 'relative',
  padding: '125px 5% 60px',
};

function ProductById({ id }) {
  return (
    <div className="flex" style={container}>
      <div className="SDetailsGrid">
        <div className="SImageContainer">
          <img src={product.image} className="SImage" alt="product" />
        </div>
        <div className="SDetailContainer">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className="mb-4">{product.base_qty}</div>
          <div id="price-container">
            <div className="font-bold">₹{product.base_cost.toFixed(2)}</div>
            <div className="SOriginalCost">
              ₹{product.original_cost.toFixed(2)}
            </div>

            <small className="percentage-off">15% off</small>
          </div>
          <div className="mx-2 mt-12">
            <h2 className="font-bold">Description</h2>
            <p>{product.description}</p>
          </div>
          <div className="SButtonContainer">
            <ButtonAdd
              isInCart={false}
              addToCart={() => console.log('Hello')}
              styles={{ flex: 0.5 }}
            />

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

function Heading({ children }) {
  return <div className="Heading">{children}</div>;
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}
export async function getStaticPaths() {
  const id = 2;
  return {
    paths: [{ params: { id: id.toString() } }],
    fallback: true, // false or 'blocking'
  };
}

export default ProductById;
