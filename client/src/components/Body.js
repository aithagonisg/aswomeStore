import React, { useEffect, useState } from "react";
import { getProducts } from "../services/API";
import ProductCard from "./Card";

export default function Body() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts("products")
      .then((item) => item.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <div className="card-root">
      {products.map((item) => (
        <ProductCard cardInfo={item} />
      ))}
    </div>
  );
}
