import React from "react";
import { Switch, Route } from "react-router-dom";

//import { PrivateRoute } from "../helpers/privateRoute";
import Home from "../screens/home";
import ADesign from "../screens/adesign";

const NavSwitch = (props) => {
  return (
    <Switch>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Route path="/adesign/:label" children={<ADesign />} />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default NavSwitch;
