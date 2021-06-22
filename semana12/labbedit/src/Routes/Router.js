import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/cadastro">
          <CadastroPage />
        </Route>

        <Route exact path="/">
          <FeedPage />
        </Route>

        <Route exact path="/adicionar-post">
          <PostPage />
        </Route>

        <Route>
            <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
