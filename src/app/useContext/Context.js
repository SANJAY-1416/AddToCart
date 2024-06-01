"use client";

import React, { createContext, useState } from "react";

const cartContext = createContext();

// const PAGE_PRODUCTS = "products";
// const PAGE_CART = "cart";

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const clearcart = () => {
    setCart([]);
  };

  const increase = (index) => {
    const newCart = [...cart];
    newCart[index] = {
      ...newCart[index],
      quantity: newCart[index].quantity + 1,
    };
    setCart([...newCart]);
  };

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
        navigateTo,
        getCartTotal,
        cart,
        // page,
        // PAGE_CART,
        // PAGE_PRODUCTS,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export { cartContext, ContextProvider };
