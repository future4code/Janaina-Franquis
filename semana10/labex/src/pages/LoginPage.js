import React from "react";
import { useHistory } from "react-router";
import { goToHomePage, goToAdminHomePage } from "../routes/cordinator";
import styled from "styled-components";

const ContainerLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 100px;

  h1 {
    font-size: 40px;
  }

  input {
    margin: 5px;
    padding: 5px;
    width: 250px;
  }

  button {
    margin: 5px;
    padding: 5px;
    color: red;
    font-size: 15px;
    border-radius: 15px;
    width: 100px;   
  }
`;

const LoginPage = () => {
  const history = useHistory();

  return (
    <ContainerLoginPage>
      <h1>Login</h1>
      <input placeholder="E-mail" type="email" name="E-Mail" id="" />
      <input placeholder="Senha" type="" name="senha" />
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={() => goToAdminHomePage(history)}>Entrar</button>
    </ContainerLoginPage>
  );
};

export default LoginPage;
