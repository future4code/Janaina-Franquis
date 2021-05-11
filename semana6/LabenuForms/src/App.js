import React from "react";
import "./App.css";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";

export default class Etapa1 extends React.Component {
  state = {
    etapa: "1"
  };

  render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa1==="Etapa1") {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;     
        case 4:
          return <Final />;          
        default:
          return <div>Deu erro!</div>;
      }
    };

    return (
      <div>
        {this.renderizaEtapa()}
        <button>Próxima etapa</button> 
      </div>
    );
  }
}


