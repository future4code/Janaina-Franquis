import axios from "axios";
import React from "react";

export default class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  //API

  criarCadastro = () => {
    //console.log(this.state)
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    // requisição
    axios
      .post(url, body, {
        headers: {
          Authorization: "janaina-franquis-paiva",
        },
      })

      .then((response) => {
        //  console.log(response)
        alert("Usuário(a) cadastrado (a) com sucesso!");
        this.setState({ nome: "", email: "" }); //Limpar input
      })

      .catch((err) => {
        alert(err.response.data.message);
        alert("Usuário cadastrado");
        //console.log(err.response.data)
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.irListaUsuario}>
          Ir para lista de usuários
        </button>
        <h2>Cadastro</h2>
        <input
          placeholder={"Nome"}
          value={this.state.name}
          onChange={this.handleNome}
        />

        <input
          placeholder={"E-mail"}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.criarCadastro}>Criar</button>
      </div>
    );
  }
}
