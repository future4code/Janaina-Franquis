import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 2px solid green;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

/*const CardEmail = styled.div`
    display: flex;
    border: 2px solid green;
    padding: 10px;
    margin: 10px;
    width: 300px;

` */

export default class ListaUsuario extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "janaina-franquis-paiva",
        },
      })
      //em caso de sucesso
      .then((response) => {
        // console.log(response) para testar
        this.setState({ usuarios: response.data }); //guardar no state usuarios
      })

      //em caso de erro
      .catch((err) => {
        // console.log(err)para testar
        alert("Ocorreu um problema,tente novamente!");
      });
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios.delete(url, {
      headers: {
        Authorization: "janaina-franquis-paiva",
      },
    })
    .the((response)=>{
       // console.log(response)
       alert("Usuário(a) deletado(a) com sucesso!")
       this.pegarUsuarios() //atualizar lista automaticamente

    })

    .catch((err)=>{
       // console.log(err.response.data)
       alert("Ocorreu um erro, tente novamente!")
        
    })

  };

  render() {
    //console.log(this.state.usuarios) mostra o array de nomes cadastrados no console
    //tranformar lista de objetos em lista de componentes(CardUsuarios)
    const listaUsuarios = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>X</button>
        </CardUsuario>
      );
    });

    /* const emailUsuarios = this.state.usuarios.map((user) => {
            return<CardEmail>{user.email}</CardEmail>

        }) depois chamar em return {emailUsuarios}*/

    return (
      <div>
        <button onClick={this.props.irCadastroUsuario}>Ir para cadastro</button>
        <h2>Lista de usuários</h2>

        {listaUsuarios}
      </div>
    );
  }
}
