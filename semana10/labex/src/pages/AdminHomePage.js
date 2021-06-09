import React from "react";
import { useHistory} from "react-router-dom";

const AdminHomePage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <p> Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
      <button onClick={goToHomePage}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button> Logout </button>
    </div>
  );
};

export default AdminHomePage;
