import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../services/API";
import ProductCard from "./Card";

export default function Body() {
  const [products, setProducts] = useState([]);
  const { info } = useSelector((state) => state.userInfo);
  useEffect(() => {
    getProducts("products")
      .then((item) => item.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <>
      {!info.token ? (
        <div>Show graph data</div>
      ) : (
        <div className="card-root">
          {products.map((item) => (
            <ProductCard cardInfo={item} />
          ))}
        </div>
      )}
    </>
  );
}
