import React from "react";
import StatusAllOver from "./StatusAllOver";
import StatusAllProducts from "./StatusAllProducts";
import "./Root.css";

export default function Root() {
  return (
    <div className="root">
      <StatusAllOver />
      <StatusAllProducts />
    </div>
  );
}
