import React from "react";
import { StyledTextField, PageContainer, StyledButton } from "./styled";
import {useHistory} from "react-router-dom";
import { goToHomePage, goToCadastroPage } from "../../Routes/coordinator";


const LoginPage = () => {
  const history = useHistory();

  return (
    <PageContainer>
      <h2>LOGIN</h2>
      <StyledTextField id="filled-basic" label="E-mail" variant="filled" />
      <StyledTextField id="filled-basic" label="Senha" variant="filled" />
      <StyledButton variant="contained" color="secondary">
        Entrar
      </StyledButton>
      <StyledButton onClick={() => goToCadastroPage(history)} variant="contained" color="secondary">
        Cadastrar
      </StyledButton>
    </PageContainer>
  );
};

export default LoginPage;
