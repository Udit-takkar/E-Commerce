/* eslint-disable camelcase */

import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Placeholder() {
  return <div className="SProductImagePlaceholder animate-pulse" />;
}

function ProductCard({ product, category_id }) {
  return (
    <div className="SProductGridItem">
      <Link key={product.id} href={`/details/${category_id}/${product.id}`}>
        <a className="SProductLink" href="/">
          <LazyLoadImage
            effect="blur"
            delayTime={500}
            className="product-image"
            src={product.image}
            alt={product.name}
            placeholder={<Placeholder />}
            srcSet={product.image}
          />
          <div className="SProductBadge">15% Off</div>

          {/* {!arePricesSame && (
                  <SProductBadge>{percentage}% Off</SProductBadge>
                )} */}
        </a>
      </Link>
      <div className="SProductBody">
        <Link key={product.id} href={`/details/${category_id}/${product.id}`}>
          <a href="/">
            <h2 className="SProductBody-h2">{product.name.toLowerCase()}</h2>
          </a>
        </Link>
        <small>{product.base_qty}</small>
        <div className="SProductPrice">
          <div className="SPriceContainer">
            <div className="base-cost">₹{product.base_cost}</div>
            {/* {!arePricesSame && (
                    <div id="base-cost">₹{product.original_cost}</div>
                  )} */}
            <div className="original-cost">₹{product.original_cost}</div>
          </div>
          <ButtonAdd isInCart={false} addToCart={() => console.log('Hello')} />
          {/* {isInCart ? (
                  <ButtonCounter
                    count={onlyAboveProduct.count}
                    addToCart={handleAddToCart()}
                    removeFromCart={() => removeFromCart(product)}
                  />
                ) : (
                  <ButtonAdd
                    isInCart={!!onlyAboveProduct}
                    addToCart={handleAddToCart()}
                  />
                )} */}
        </div>
      </div>
    </div>
  );
}

function ButtonAdd({ isInCart, addToCart }) {
  return (
    <button
      className="SButtonAdd"
      type="button"
      onClick={() => console.log('Hello')}
    >
      <span className="mr-2">Add</span>
      <svg
        className="addPlusIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
      >
        <g>
          <path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z" />
          <path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z" />
        </g>
      </svg>
    </button>
  );
}

export default ProductCard;
