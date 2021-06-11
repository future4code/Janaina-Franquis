import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { goToHomePage } from "../routes/cordinator";
import useInput from "../hooks/useInput";
import { BASE_URL } from "../constants/url";


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
  const [email, mudaEmail] = useInput("");
  const [password, mudaPassword] = useInput("");

  const onClickLogin = () => {
    const body = {
      email,
      password,
    };
    //console.log(body)

    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {// console.log(response);
         localStorage.setItem("token", response.data.token)
         history.push("/admin/trips/:id")
      })
      .catch((err) => 
        //console.log(err.response.data);
        alert(err.response.data.message));
  };

  return (
    <ContainerLoginPage>
      <h1>Login</h1>
      <input value={email} onChange={mudaEmail} placeholder="E-mail" />
      <input
        type="password"
        value={password}
        onChange={mudaPassword}
        placeholder="Senha"
      />
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={onClickLogin}>Entrar</button>
    </ContainerLoginPage>
  );
};

export default LoginPage;
