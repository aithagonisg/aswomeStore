import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./common.css";

const useStyles = makeStyles((theme) => ({
  ribbon: {
    backgroundColor: "skyblue",
    position: "absolute",
    color: "white",
    width: 55,
    zIndex: 3,
    textAlign: "center",
    textTransform: "uppercase",
    padding: 5,
    font: "Lato",
    "&::before": {
      position: "absolute",
      zIndex: -1,
      content: "",
      display: "block",
      border: "5px solid #2980b9",
    },
    "&::after": {
      position: "absolute",
      zIndex: -1,
      content: "",
      display: "block",
      border: "5px solid #2980b9",
    },
    transform: "rotate(-90deg)",
    top: 17,
    marginLeft: -24,
  },
}));

export default function ProductCard({ cardInfo }) {
  const classes = useStyles();
  return (
    <div className="card-container">
      {cardInfo.productDetails.isNewStock && (
        <div className={classes.ribbon}>
          <span className={classes.span}>New</span>
        </div>
      )}
      <div className="card-header">
        <div className="product-category">{cardInfo.product_category}</div>
        <div className="product-name">{cardInfo.product_name}</div>
      </div>
      <Link
        to={{ pathname: `/productDescription`, state: { id: cardInfo._id } }}
      >
        <img src={cardInfo.image} className="product-image" />
      </Link>
      <Tooltip title={cardInfo.productDetails.Description} arrow>
        <div className="product-des">{cardInfo.productDetails.Description}</div>
      </Tooltip>

      <div className="card-footer">
        <div className="product-price">
          {cardInfo.productDetails.price} &#8377;
        </div>
        <button className="add-cart">Add To Cart</button>
      </div>
    </div>
  );
}
