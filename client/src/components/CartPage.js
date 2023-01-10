import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const [cartData, setCartData] = useState([]);

  const { cart } = useSelector((state) => state.cartAndOrder);

  useEffect(() => {
    console.log(cart);
    setCartData(cart || []);
  }, [cart]);

  return (
    <div>
      {cartData.length > 0 ? (
        <div>Data is Available</div>
      ) : (
        <div>
          No Data in Cart click
          <span>
            <Link to="/"> here </Link>
          </span>
          to add some products
        </div>
      )}
    </div>
  );
}
