import React from "react";
import { PageContainer, InputsContainer } from "./styled";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { goToCadastroPage } from "../../Routes/coordinator";
import { useForm } from "../../Hooks/useForm";
import { login } from "../../services/user";

const LoginPage = ({setRightButtonText}) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    // console.log(form);
    e.preventDefault();
    login(form, clear, history, setRightButtonText);
  };

  return (
    <PageContainer>
      <h2>LOGIN</h2>

      <InputsContainer>
        <form onSubmit={onSubmitForm} setRightButtonText={setRightButtonText}>
          
        
          
          <TextField
            name={"email"}
            type={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"filled"}
            margin={"normal"}
            fullWidth
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
            fullWidth
            required
           />

          <Button type={"submit"} variant={"contained"} color={"secondary"}>
            Entrar
          </Button>

          <Button
            onClick={() => goToCadastroPage(history)}
            variant={"text"}
            color={"secondary"}
          >
            Cadastrar
          </Button>
        </form>
      </InputsContainer>
    </PageContainer>
  );
};

export default LoginPage;
