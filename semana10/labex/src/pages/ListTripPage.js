import React from "react";
import { useHistory } from "react-router";

const ListTripPage = () => {
  
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToApplicationForm = () => {
    history.push("/trips/application");
  };

  return (
    <div>
      <h1>Lista de Viagens : Para vermos todas as viagens</h1>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToApplicationForm}>Inscrever-se</button>
    </div>
  );
};
export default ListTripPage;
