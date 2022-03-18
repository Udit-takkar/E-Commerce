import React from 'react';
import useCart from '../hooks/useCart';
import { ButtonCounter } from '../components/Products/ProductCard';
import Image from 'next/image';
import ShoppingCart from '../assets/cart.jpg';

function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();
  const total = cart.reduce(
    (acc, curr) => acc + curr.sale_price * curr.count,
    0,
  );

  const totalItems = cart.reduce((acc, curr) => acc + curr.count, 0);

  // if (cart.length === 0) {
  //   return (
  //     <div className="header-landing">
  //       <div className="flex">
  //         <div className="SCartHeading text-2xl font-bold">Checkout</div>
  //         <div className="SBadge  text-2xl font-bold ml-2 text-blue-500">
  //           (0)
  //         </div>
  //       </div>
  //       <div className="flex items-center justify-center flex-col">
  //         <Image src={ShoppingCart} height={500} width={500} />
  //         <h1 className="text-center text-xl">
  //           <span className="font-bold text-3xl">Your bag is empty</span> <br />{' '}
  //           You don&apos;t have any products in your bag.
  //         </h1>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="header-landing">
      <div className="CartGrid">
        <div className="SCartHeader">
          <div className="SCartHeading text-3xl font-bold">Checkout</div>
          {totalItems && (
            <div className="SBadge  text-3xl font-bold ml-2 text-blue-500">
              ({totalItems})
            </div>
          )}
        </div>
        <div className="SCartRow mt-8">
          {cart.map(item => (
            <div className="SCartItem mb-8" key={item.id}>
              <Image
                className="SCartImage mr-8"
                src={item.imageURL}
                width="100%"
                height="100%"
              />
              <div className="SCartContent">
                <h2 className="text-xl text-400">{item.name.toLowerCase()}</h2>

                <div className="SItemPrice text-xs font-bold mb-4 mt-2">
                  <span>₹</span>
                  {` ${item.sale_price.toFixed(2)}`}
                </div>

                <ButtonCounter
                  count={item.count}
                  addToCart={() => addToCart(item)}
                  removeFromCart={() => removeFromCart(item)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="SCartCheckout ">
          <div className="SCheckoutContainer">
            <div className="SCheckoutHeader bg-gray-100 p-8 rounded-lg">
              <div className="justify-between flex items-center">
                <div className="SCheckoutText text-xl p-2">Item Total </div>
                <div className="SCheckoutText">{total.toFixed(2)} </div>
              </div>
              <div className="justify-between flex items-center">
                <div className="SCheckoutText text-xl p-2">Delivery </div>
                <div className="SCheckoutText">30 </div>
              </div>
              <div className="justify-between flex items-center">
                <div className="SCheckoutTotalText text-xl font-bold p-2">
                  Grand Total
                </div>
                <div className="SCheckoutTotalText">
                  {(total + 30).toFixed(2)}
                </div>
              </div>
            </div>
            <button
              type="button"
              href="/checkout"
              className="mt-4 get-started-btn font-helvetica text-white  px-20 py-3  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md text-center "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
