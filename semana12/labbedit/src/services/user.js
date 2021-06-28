import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage, goToLoginPage } from "../Routes/coordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeedPage(history);
    })
    .catch((err) => alert("Erro de usuário ou senha"));
};

//.then((res) => console.log(res))
//.catch((err) => console.log(err))

export const cadastroPage = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
    })
    .catch ((error) => {
      alert("Cadastro falhou, tente novamente");
      console.error(error);
    })
  };