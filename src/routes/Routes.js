import { useAuth } from "../auth/auth-context";
import React from "react";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const Routes = () => {
  const { loggedIn } = useAuth();
  const nav = () => {
    const links = [
      {
        path: "/",
        page: "Home",
        private: true,
      },
      {
        path: "/signin",
        page: "Sign-in",
        private: false,
      },
    ];
    const list = links.filter((link) => link.private === loggedIn);
    return list;
  };

  console.log(loggedIn);
  return (
    <Router>
      <div>
        <ul>
          {nav().map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.page}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Switch>
        <PrivateRoute exact path="/" loggedIn={loggedIn} component={Home} />
        <PublicRoute path="/signin" loggedIn={loggedIn} component={Signin} />
      </Switch>
    </Router>
  );
};
