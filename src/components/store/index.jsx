import React, { useContext } from "react";

import products from "../../data/products";

import { CartContext } from "../cart/context";

export default function Store() {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {products.map((product) => (
        <div>
          <img src={`/assets/${product.sku}.jpg`} alt={product.name} />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>
            <button type="button" onClick={() => cartCtx.addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
