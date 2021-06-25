import React from "react";
import { PageContainer, InputsContainer, ButtonContainer } from "./styled";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { goToCadastroPage } from "../../Routes/coordinator";
import { useForm } from "../../Hooks/useForm";

const LoginPage = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => { e.preventDefault();};
 

  return (
    <PageContainer>
      <h2>LOGIN</h2>

      <InputsContainer>
        <form onSubmit={onSubmitForm}></form>
        <TextField
          name={"email"}
          type={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"filled"}
          margin={"normal"}
          required
        />

        <TextField
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"filled"}
          margin={"normal"}
          required
        />
      </InputsContainer>

      <ButtonContainer>
        <Button type={"submit"} variant={"contained"} color={"secondary"}>
          Entrar
        </Button>

        <Button
          onClick={() => goToCadastroPage(history)}
          variant={"contained"}
          color={"secondary"}
        >
          Cadastrar
        </Button>
       
      </ButtonContainer><p>Não tem conta? Cadastre-se</p> 
    </PageContainer> 
  );
};

export default LoginPage;
