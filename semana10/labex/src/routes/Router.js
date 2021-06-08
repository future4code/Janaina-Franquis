import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import  CreateTripPage  from "../pages/CreateTripPage";
import  ListTripPage  from "../pages/CreateTripPage";


const Router = () => {
  return (
    <BrowserRouter>

      <Switch>

        <Route exact path="/lista-viagens">
          <ListTripPage />
        </Route>

        <Route exact path="/criar-viagens">
          <CreateTripPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
