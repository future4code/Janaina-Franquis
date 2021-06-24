import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { goToLoginPage, goToCadastroPage } from "../../Routes/coordinator";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToCadastroPage(history)} color="inherit">
          Cadastro
        </Button>
        <Button onClick={() => goToLoginPage(history)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
