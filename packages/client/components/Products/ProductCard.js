/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */

import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

function Placeholder() {
  return <div className="SProductImagePlaceholder animate-pulse" />;
}

function ProductCard({
  product,
  category_id,
  handleAddToCart,
  isInCart,
  onlyAboveProduct,
  removeFromCart,
  percentage,
  isDiscount,
}) {
  return (
    <div className="SProductGridItem">
      <Link key={product.id} href={`/details/${category_id}/${product.id}`}>
        <a className="SProductLink" href="/">
          <LazyLoadImage
            effect="blur"
            delayTime={500}
            className="product-image"
            src={product.imageURL}
            alt={product.name}
            placeholder={<Placeholder />}
            srcSet={product.imageURL}
          />

          {isDiscount && <div className="SProductBadge">{percentage}% Off</div>}
        </a>
      </Link>
      <div className="SProductBody">
        <Link key={product.id} href={`/details/${category_id}/${product.id}`}>
          <a href="/">
            <h2 className="SProductBody-h2">
              {product.name.length > 40
                ? `${product.name.slice(0, 40).toLowerCase()}..`
                : product.name.toLowerCase()}
            </h2>
          </a>
        </Link>
        <div className="SProductPrice">
          <div className="SPriceContainer">
            <div className="base-cost">₹{product.sale_price}</div>
            {isDiscount && (
              <div className="original-cost">₹{product.price}</div>
            )}
          </div>

          {isInCart ? (
            <ButtonCounter
              count={onlyAboveProduct.count}
              addToCart={() => handleAddToCart()}
              removeFromCart={() => removeFromCart(product)}
            />
          ) : (
            <ButtonAdd
              isInCart={isInCart}
              addToCart={() => handleAddToCart()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function ButtonAdd({ isInCart, addToCart, styles = {} }) {
  return (
    <button
      className="SButtonAdd"
      type="button"
      onClick={() => addToCart()}
      style={styles}
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

export function ButtonCounter({ count, removeFromCart, addToCart }) {
  return (
    <div className="SButtonCounter flex space-between items-center p-[0.25rem] ">
      <div
        onClick={() => removeFromCart()}
        className="cursor-pointer flex items-center justify-center flex-1 h-full"
      >
        <MinusSmIcon
          color="rgb(20, 110, 180)"
          className="h-5 w-5"
          aria-hidden="true"
        />
      </div>
      <p className="SProductCount h-full ">{count}</p>
      <div
        onClick={() => addToCart()}
        className="cursor-pointer flex items-center justify-center flex-1 h-full"
      >
        <PlusSmIcon
          className="h-5 w-5"
          color="rgb(20, 110, 180)"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default ProductCard;
