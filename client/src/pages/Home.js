import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import ContactUsPage from "./ContactUsPage";
import AboutUsPage from "./AboutUsPage";
import LoginPage from "./LoginPage";
import RegisterationPage from "./RegisterationPage";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import NonSecureRoute from "./Routes/NonSecureRoute";
import "./common.css";
import SecureRoute from "./Routes/SecureRoute";

export default function Home() {
  return (
    <Router>
      <Header />
      <div className="body-container">
        <Switch>
          <SecureRoute path="/about" Component={AboutUsPage} />
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

      <Footer />
    </Router>
  );
}
