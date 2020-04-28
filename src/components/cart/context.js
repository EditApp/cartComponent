import React, { useState, createContext } from "react";

//import products from "../../data/products";
export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  function addToCart(item) {
    setItems((prevState) => [...prevState, item]);
  }
  function itemsWithQuantities(items) {
    return items.reduce((acc, item) => {
      const identical = acc.find((_item) => _item.sku === item.sku);
      if (identical) {
        identical.quantity = identical.quantity + 1;
      } else {
        const newValue = { quantity: 1, ...item };
        return [...acc, newValue];
      }
      return acc;
    }, []);
  }
  return (
    <CartContext.Provider
      value={{ items: itemsWithQuantities(items), addToCart }}
    >
      {console.log("items", items)}
      {children}
    </CartContext.Provider>
  );
}
