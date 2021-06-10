import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome, goToCreateTripPage } from "../routes/cordinator";

const CreateTripPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Criar Viagem </h1>
      <p></p>
      <button onClick={() => goToAdminHome (history)}>Voltar</button>
      <button onClick={() => goToCreateTripPage (history)}>Criar</button>

    <h2>Lista de Viagens</h2>
      <input>
      </input>
    </div>
  );
};
export default CreateTripPage;
