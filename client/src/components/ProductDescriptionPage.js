import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "./Header.css";

const ProductDetails = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="product-details">
      <img
        src={cardData?.image}
        alt="product-image"
        className="product-details-image"
      />
      <div className="details">
        <div>
          <div className="category">Category: {cardData?.product_category}</div>
          <div className="product-name">Brand: {cardData?.product_name}</div>
          <div className="des-details">
            {cardData?.productDetails &&
              Object.keys(cardData?.productDetails).map((item) => (
                <div>
                  <span>{item} :</span>
                  <span>{cardData?.productDetails[item]}</span>
                </div>
              ))}
          </div>
        </div>

        <div style={{ marginTop: "2px" }}>
          <button className="add-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default function ProductDescriptionPage() {
  const products = useSelector((state) => state.prouducts);
  const [cardData, setCardData] = useState({});
  const { location } = useHistory();
  useEffect(() => {
    const product = products.filter((item) => item._id === location.state.id);
    setCardData(product[0]);
  }, [location.state.id]);
  return (
    <div>
      {!location.state.id ? (
        <Redirect to="/" />
      ) : (
        <ProductDetails cardData={cardData} />
      )}
    </div>
  );
}
