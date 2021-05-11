import React from "react";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ETAPA3 - INFORMAÇÕES GERAIS DE ENSINO </h1>

        <h2>5. Por que você não terminou um curso de graduação?</h2>
        <input type="text" />
      
        <h2>4. Você fez algum curso complementar? </h2>
        <select>
          <option selected value="nenhum">Nenhum</option>
          <option value="sim">simo</option>
        </select>
      </div>
    );
  }
}
