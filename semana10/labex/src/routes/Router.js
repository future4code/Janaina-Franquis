import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripPage from "../pages/CreateTripPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import TripDetailsPage from "../pages/TripDetailsPage";
import AdminHomePage from "../pages/AdminHomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripPage />
        </Route>

        <Route exact path="/trips/application">
          <ApplicationFormPage />
        </Route>


        <Route exact path="/admin/trips/list">
          <CreateTripPage />
        </Route>

        <Route exact path="/admin/trips/create">
          <AdminHomePage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>

        <Route>
          <Error />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default Router;
