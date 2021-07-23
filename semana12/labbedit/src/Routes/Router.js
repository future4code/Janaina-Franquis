import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import FeedPage  from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";
import HomePage from "../pages/HomePage/HomePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const Router = ({ setRightButtonText}) => {
  return (
    
    
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage setRightButtonText={setRightButtonText}/>
        </Route>

        <Route exact path="/cadastro">
          <CadastroPage setRightButtonText={setRightButtonText}/>
        </Route>

        <Route exact path="/feeds">
          <FeedPage />
        </Route>

        <Route exact path="/adicionar-post">
          <PostPage />
        </Route>

        <Route>
            <ErrorPage />
        </Route>
      </Switch>
    
  );
};

export default Router;
