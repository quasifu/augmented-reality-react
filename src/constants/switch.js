import React from "react";
import { Switch, Route } from "react-router-dom";

//import { PrivateRoute } from "../helpers/privateRoute";
import Home from "../screens/home";
import LabelDesigner from "../screens/labelDesigner.js";
import ADesign from "../screens/adesign.js";
import Accounts from "../screens/accounts.js";

const NavSwitch = (props) => {
  return (
    <Switch>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Route path="/adesign/:label" children={<LabelDesigner />} />
      <Route path="/adesign" children={<ADesign />} />
      <Route path="/accounts" children={<Accounts />} />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default NavSwitch;
