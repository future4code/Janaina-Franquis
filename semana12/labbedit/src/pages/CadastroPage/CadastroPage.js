import React from "react";
import { goToHomePage, goToLoginPage } from "../../Routes/coordinator";
import { StyledTextField, PageContainer, StyledButton } from "./styled";
import {useHistory} from "react-router-dom";



const CadastroPage = () => {
  const history = useHistory();

  return (
    <PageContainer>
      <h2>CADASTRO</h2>
      <StyledTextField
        id="filled-basic"
        label="Nome do usuário"
        variant="filled"
      />
      <StyledTextField id="filled-basic" label="E-mail" variant="filled" />
      <StyledTextField id="filled-basic" label="Senha" variant="filled" />
      <StyledButton variant="contained" color="secondary">
        Cadastrar
      </StyledButton>
      <StyledButton onClick={() => goToLoginPage(history)} variant="contained" color="secondary">
        Ir Login
      </StyledButton>
      <StyledButton onClick={() => goToHomePage(history)} variant="contained" color="secondary">
        Ir para Home
      </StyledButton>
    </PageContainer>
  );
};

export default CadastroPage;
