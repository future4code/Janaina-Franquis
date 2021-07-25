import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToLoginPage, goToCadastroPage } from "../../Routes/coordinator";
import { useHistory } from "react-router-dom";

export const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () =>{
    localStorage.removeItem("token")
  }

  //se estiver logado
  const rightButtonAction = () =>{
    if (token){
      logout()
      setRightButtonText("Login")
      goToLoginPage(history)
    } else {
      goToLoginPage(history)

    }
  }

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToCadastroPage(history)} color="inherit">
          Cadastro
        </Button>
        <Button onClick={rightButtonAction } color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
