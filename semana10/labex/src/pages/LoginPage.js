import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { goToHomePage } from "../routes/cordinator";
import useInput from "../hooks/useInput";
import { BASE_URL } from "../constants/url";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const ContainerLoginPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 25px;
`;

const LoginForm = styled.form`
  display: grid;
  gap: 10px;
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
      .then((response) => {
        // console.log(response);
        localStorage.setItem("token", response.data.token);
        history.push("/admin/trips/:id");
      })
      .catch((err) =>
        //console.log(err.response.data);
        alert(err.response.data.message)
      );
  };

  return (
    <ContainerLoginPage>
      <Typography variant="h1" align="center" gutterBottom>
        LabeX
      </Typography>
      <LoginForm>
        <TextField
          label={"E-mail"}
          value={email}
          onChange={mudaEmail}
        
        />
        <TextField
          label={"Password"}
          type="password"
          value={password}
          onChange={mudaPassword}
        />
        <ButtonContainer>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => goToHomePage(history)}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type={"submit"}
            onClick={onClickLogin}
          >
            Entrar
          </Button>
        </ButtonContainer>
      </LoginForm>
    </ContainerLoginPage>
  );
};

export default LoginPage;
