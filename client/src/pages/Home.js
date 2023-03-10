import React from "react";
import Body from "../components/Body";
import ContactUsPage from "./ContactUsPage";
import AboutUsPage from "./AboutUsPage";
import SecureRoute from "./Routes/SecureRoute";
import LoginPage from "./LoginPage";
import RegisterationPage from "./RegisterationPage";
import { Switch, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import NonSecureRoute from "./Routes/NonSecureRoute";
import ProductDescriptionPage from "../components/ProductDescriptionPage";
import "./common.css";
import CartPage from "../components/CartPage";
import Checkout from "../components/checkout/Checkout";
import MyAccount from "../components/myAccounts/MyAccount";
import MyProfile from "../components/profile/Profile";

export default function Home() {
  return (
    <div className="body-container">
      <Switch>
        <SecureRoute path="/about" Component={AboutUsPage} />
        <SecureRoute
          path="/productDescription"
          Component={ProductDescriptionPage}
        />
        <SecureRoute path="/checkout" Component={Checkout} />
        <SecureRoute path="/myaccounts" Component={MyAccount} />
        <SecureRoute path="/myprofile" Component={MyProfile} />
        <SecureRoute path="/cartPage" Component={CartPage} />
        <Route path="/contact">
          <ContactUsPage />
        </Route>
        <NonSecureRoute
          path="/register"
          Component={RegisterationPage}
        ></NonSecureRoute>
        <NonSecureRoute path="/login" Component={LoginPage} />
        <Route exact path="/">
          <Body />
        </Route>
        <Route path="*">
          <Typography variant="h1" component="h2">
            404 Page Not Found
          </Typography>
        </Route>
      </Switch>
    </div>
  );
}
