import React, { useState } from "react";
import { goToHomePage, goToLoginPage } from "../../Routes/coordinator";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { PageContainer, InputsContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { cadastroPage } from "../../services/user";


const CadastroPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  

  
  const [form, onChange, clear] = useForm({
    email: email,
    password: password,
    username: username
  });

  
  const onSubmitForm = (e) => {
    console.log(form)
    e.preventDefault();
    cadastroPage(form, clear, history)
  };

  return (
    <PageContainer>
      <h2>CADASTRO</h2>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            id="filled-basic"
            label="Nome"
            name={'name'}
            value={form.name} 
            onChange={onChange}
            variant="filled"
            type={"name"}
            required
            fullWidth
            margin={"normal"}
          />
          <TextField
            id="filled-basic"
            label="E-mail"
            name={'email'}
            value={form.email}
            onChange={onChange}
            variant="filled"
            type={"email"}
            required
            fullWidth
            margin={"normal"}
          />
          <TextField
            id="filled-basic"
            label="Senha"
            name={'password'}
            value={form.password}
            onChange={onChange}
            variant="filled"
            type={"password"}
            required
            fullWidth
            margin={"normal"}
          />
          <Button type={"submit"} variant="contained" color="secondary" required>
            Cadastrar
          </Button>
          <Button
            onClick={() => goToLoginPage(history)}
            variant="contained"
            color="secondary"
          >
            Ir Login
          </Button>
          <Button
            onClick={() => goToHomePage(history)}
            variant="contained"
            color="secondary"
          >
            Ir para Home
          </Button>
        </form>
      </InputsContainer>
    </PageContainer>
  );
};

export default CadastroPage;
