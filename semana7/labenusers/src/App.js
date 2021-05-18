import React from "react";
import axios from "axios";

const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers";

export default class App extends React.Component {
  state = {
    CadastrarUsuario: [],
    inputName: "",
    inputEmail:"",
    proximaPagina: true
  };

  componentDidMount() {
    this.postUser();
  }

  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  handleClickEnter = (event) => {
    if (event.keyCode === 13) {
      this.createUser();
    }
  };

  postUser = () =>{
    const header ={
      headers:{
        Authorization: janaina-franquis-paiva
      }
    }
  };

  axios
  .post(BASE_URL, header, body)
  

}