"use client";
import React, { useContext } from "react";

import Records from "./records.json";
import { cartContext } from "./useContext/Context";

const Product = () => {
  // useContext
  const { addToCart, decrease, increase } = useContext(cartContext);

  // record.json
  const Phones = Records.Phones;

  return (
    <div className="parent-product">
      {Phones.map((phone, index) => {
        return (
          <div className="products" key={index}>
            <div className="name-cost">
              <h1>{phone.name}</h1>
              <h3>{phone.cost}</h3>
            </div>
            <button onClick={() => addToCart(phone, increase, decrease)}>
              addToCart
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Product;
