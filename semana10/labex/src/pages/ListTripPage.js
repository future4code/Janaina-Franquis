import React from "react";
import { useHistory } from "react-router";
import { goToHomePage, goToApplicationForm } from "../src/routes/cordinator";
import useInput from "../hooks/useInput";

const ListTripPage = () => {
  const history = useHistory();

  // const [nome, mudaNome] = useInput("");
  // const [descricao, mudaDescricao] = useInput("");
  // const [planeta, mudaPlaneta] = useInput("");
  // const [duracao, mudaDuracao] = useInput("");
  // const [data, mudaData] = useInput("");

  // const printForm = () => {
  //   const body = {
  //     name: nome,
  //     description: descricao,
  //     planet: planeta,
  //     durationInDays: duracao,
  //     date: data,
  //   };
  // };

  return (
    <div>
      <h1>Lista de Viagens : Para vermos todas as viagens</h1>
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={printForm}{...() => goToApplicationForm(history)}>Inscrever-se</button>

      <ContainerInput>
        <input value={nome} onChange={mudaNome} placeholder={"Nome"}/>
         <input value={descricao} onChange={mudaDescricao} placeholder={"Descrição"}/>       
         <input value={planeta} onChange={mudaPlaneta} placeholder={"Planeta"}/> 
         <input value={duracao} onChange={mudaDuracao} placeholder={"Duracao"}/> 
         <input value={data} onChange={mudaData} placeholder={"Data"}/> 
         <input value={descricao} onChange={} placeholder={}/>
      </ContainerInput>
    </div>
  );
};
export default ListTripPage;
