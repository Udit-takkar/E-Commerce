/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';

function clone(item) {
  return JSON.parse(JSON.stringify(item));
}

function getFromLocalStorage(key) {
  if (process.browser) {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
  }
  return undefined;
}

const useCart = () => {
  const [cart, setCart] = useState(() => getFromLocalStorage('cart') || []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
    if ('cart' in window.localStorage) {
      window.localStorage.removeItem('cart');
    }
  };

  const addToCart = product => {
    const currentCart = clone(cart);
    const currentFoundProduct = currentCart.find(
      item => item._id === product._id,
    );
    if (currentFoundProduct) {
      currentFoundProduct.count += 1;
      setCart(currentCart);
    } else {
      const productToBeAdded = { ...product, count: 1 };
      const updatedCart = [...cart, productToBeAdded];
      setCart(updatedCart);
    }
  };
  const removeFromCart = product => {
    const currentCart = clone(cart);
    const currentFoundItemIndex = currentCart.findIndex(
      item => item._id === product._id,
    );

    if (currentFoundItemIndex !== -1) {
      const currentFoundItem = currentCart[currentFoundItemIndex];
      currentFoundItem.count -= 1;
      if (currentFoundItem.count === 0) {
        currentCart.splice(currentFoundItemIndex, 1);
        setCart(currentCart);
      } else {
        setCart(currentCart);
      }
    }
  };
  return { cart, addToCart, removeFromCart, setCart, clearCart };
};

export default useCart;
