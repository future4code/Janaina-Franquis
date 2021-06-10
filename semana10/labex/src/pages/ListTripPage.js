import React from "react";
import { useHistory } from "react-router";
import { goToHomePage, goToApplicationForm } from "../src/routes/cordinator";
import useInput from "../hooks/useInput";

const ListTripPage = () => {
  const history = useHistory();

  const [nome, mudaNome] = useInput("");
  const [descricao, mudaDescricao] = useInput("");
  const [planeta, mudaPlaneta] = useInput("");
  const [duracao, mudaDuracao] = useInput("");
  const [data, mudaData] = useInput("");

  const printForm = () => {
    const body = {
      name: nome,
      description: descricao,
      
      

    }

  }

  return (
    <div>
      <h1>Lista de Viagens : Para vermos todas as viagens</h1>
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={() => goToApplicationForm(history)}>Inscrever-se</button>

      <ContainerInput>
        <input type="text" />
      </ContainerInput>
    </div>
  );
};
export default ListTripPage;
