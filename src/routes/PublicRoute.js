import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ component: Component, ...rest }) {
  const { loggedIn } = rest;
  return (
    <Route
      {...rest}
      render={(props) => {
        return !loggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
}
