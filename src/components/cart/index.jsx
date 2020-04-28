import React, { useState, useEffect, useContext } from "react";

import { CartContext } from "./context";

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}
function totalPrice(items) {
  return items.reduce((acc, itm) => acc + itm.quantity * itm.price, 0.0);
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);
  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  function checkout() {
    stripe.redirectToCheckout({
      items: ctx.items.map((item) => ({
        quantity: item.quantity,
        sku: item.sku,
      })),
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled",
    });
  }
  return (
    <div>
      Cart
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>Quantity </td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {ctx.items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>
                <img alt={item.name} src={`/assets/${item.sku}.jpg`} />
              </td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price * item.quantity)}</td>
            </tr>
          ))}
          <tr>
            <td colspan={3}> Total:</td>
            <td>{formatPrice(totalPrice(ctx.items))} </td>
          </tr>
          <tr>
            <td colspan={4}>
              <button onClick={checkout}>Checkout now with Stripe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
