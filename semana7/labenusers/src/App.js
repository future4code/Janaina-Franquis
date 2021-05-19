import React from "react";
import CadastroUsuario from "./Components/CadastroUsuario";
import ListaUsuario from "./Components/ListaUsuario";
import axios from "axios";


export default class App extends React.Component {
 state = {
   telaAtual: "cadastroUsuario"
 }

 escolherTela = () => {
   switch (this.state.telaAtual){
    case "cadastroUsuario":
      return <CadastroUsuario irListaUsuario={this.irListaUsuario} />
    case  "listaUsuario":
      return <ListaUsuario irCadastroUsuario={this.irCadastroUsuario}  />
    default:
      return <div>Erro! Página não encontrada. </div>   
  }
 }

 irCadastroUsuario = () =>{
   this.setState({telaAtual: "cadastroUsuario"})
 }

 irListaUsuario = () =>{
  this.setState({telaAtual: "listaUsuario"})
}
 
  render(){
      return(
      <div>
        {this.escolherTela()}
      </div>
    )

  }
}