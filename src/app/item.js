import React, { useContext } from "react";
import { cartContext } from "./useContext/Context";
export const Item = () => {
  const { cart, clearcart, removeFromCart, increase, decrease, getcartTotal } =
    useContext(cartContext);
  const getSum = () => {
    console.log(cart);
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  return (
    <div className="items">
      {cart.map((card, index) => {
        return (
          <div className="name-cost-quantity" key={index}>
            <h1>{card.name}</h1>
            <h1>{card.cost}</h1>
            <div className="quantity">
              <button onClick={() => increase(index)}> + </button>
              <h1 onClick={getcartTotal}>{card.quantity}</h1>
              <button
                disabled={card.quantity <= 1}
                onClick={() => decrease(index)}
              >
                {" "}
                -{" "}
              </button>
            </div>
            <button onClick={() => removeFromCart(card)}> Remove </button>
          </div>
        );
      })}
      <div>
        {cart.length > 0 && <button onClick={clearcart}>clearcart</button>}
        <h4>TotalCost:Rs.{getSum()}</h4>
      </div>
    </div>
  );
};
