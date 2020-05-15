import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CONSTANTS } from "../constants";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem(CONSTANTS.AUTH_TOKEN) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
