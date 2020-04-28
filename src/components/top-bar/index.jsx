import React, { useContext } from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import { CartContext } from "../cart/context";

export default function TopBar() {
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.itemsCount;
  return (
    <div className="layout top-bar">
      <div className="wrapper">
        <div className="section">My store</div>
        <div className="section">
          <Link to="/">Products</Link> |{" "}
          <Link to="/cart">View cart ({numItems})</Link>
        </div>
      </div>
    </div>
  );
}
