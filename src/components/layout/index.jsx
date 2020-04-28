import React from "react";
import TopBar from "../top-bar";
import "./styles.css";

export default function Layout({ title, children }) {
  document.getElementsByTagName("title")[0].innerHTML = title;
  return (
    <div className="wrapper">
      <TopBar />
      <h1>{title}</h1>

      {children}
    </div>
  );
}
