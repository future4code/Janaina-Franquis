import React from "react";
import { useHistory } from "react-router";
import { goToHomePage, goToApplicationForm } from "../src/routes/cordinator";

const ListTripPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Lista de Viagens : Para vermos todas as viagens</h1>
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={() => goToApplicationForm(history)}>Inscrever-se</button>
    </div>
  );
};
export default ListTripPage;
