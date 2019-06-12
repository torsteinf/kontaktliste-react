import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import AddContact from "./AddContact";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/addcontact" component={AddContact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
