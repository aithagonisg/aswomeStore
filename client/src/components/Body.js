import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./Card";
import Root from "../StatusList/Root";
import { setProductsList } from "../store/actions/actions";

export default function Body() {
  const { info } = useSelector((state) => state.userInfo);
  const products = useSelector((state) => state.prouducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProductsList());
  }, []);
  return (
    <>
      {!info.token ? (
        <Root />
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
