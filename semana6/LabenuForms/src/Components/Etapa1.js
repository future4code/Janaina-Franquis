import React from "react";


export default class Etapa1 extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ETAPA1 - DADOS PESSOAIS </h1>

        <h2>1. Qual o seu nome?</h2>
        <input type="text" />

        <h2>2. Qual sua idade?</h2>
        <input type="text" />

        <h2>3. Qual seu email?</h2>
        <input type="text" />

        <h2>4. Qual a sua escolaridade? </h2>
        <select>
          <option value="ensino-medio-completo">Ensino médio completo</option>
          <option value="ensino-medio-incompleto">Ensino médio incompleto</option>
          <option value="ensino-superior-incompleto">Ensino superior incompleto</option>
          <option value="ensino-superior-completo">Ensino médio completo</option>
          <option selected value="fundamental-completo">Fundamental completo</option>
          <option value="fundamental-incompleto">Fundamental incompleto</option>
        </select>
      </div>
    );
  }
}
