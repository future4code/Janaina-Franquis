import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToTripDetailsPage } from "../../routes/cordinator";







const AdminHomePage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <p>
        Para o administrador ver a lista de viagens e poder deletá-las ou
        acessar o detalhe de cada uma delas
      </p>
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={() => goToTripDetailsPage(history)}>Criar Viagem</button>
      <button> Logout </button>
    </div>
  );
};

export default AdminHomePage;
