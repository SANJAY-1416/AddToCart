"use client";

import React, { createContext, useState } from "react";

const cartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // AddToCart Button

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };

      -newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  // Remove product from cart

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  // Increase and Decrease price Accoding to products value
  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  // ClearCart

  const clearcart = () => {
    setCart([]);
  };

  // Increase Quantity

  const increase = (index) => {
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      quantity: newCart[index].quantity + 1,
    };
    setCart([...newCart]);
  };

  // Decrease Quality

  const decrease = (index) => {
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      quantity: newCart[index].quantity - 1,
    };
    setCart([...newCart]);
  };

  return (
    <cartContext.Provider
      value={{
        addToCart,
        increase,
        decrease,
        removeFromCart,
        clearcart,

        getCartTotal,
        cart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export { cartContext, ContextProvider };
