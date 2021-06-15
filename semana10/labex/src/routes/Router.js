import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ListTripPage from "../pages/ListTripPage/ListTripPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripPage />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTripPage />
        </Route>

        <Route exact path="/trips/application">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
