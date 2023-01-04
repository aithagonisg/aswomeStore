import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function NonSecureRoute({ Component, ...rest }) {
  const auth = localStorage.getItem("authToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to={{ path: "/" }} />
      }
    />
  );
}
