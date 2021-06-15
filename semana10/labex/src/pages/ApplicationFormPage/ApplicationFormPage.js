import React from "react";
import { useHistory } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from "../../routes/cordinator";

const ApplicationFormPage = () => {
  const history = useHistory();




  return (
    <div>
      <h1>Apllication Forma - Inscrever-se para uma Viagem</h1>
      <p></p>
      <p>
        Para o usuário se candidatar à viagens, página que vai ter o formulário
        de inscrição
      </p>

 

      <button onClick={() => goToListTripPage (history)}>Voltar</button>
      <button onClick={() => goToLoginPage(history)}>Enviar</button>
      <button>Enviar</button>
    </div>
  );
};
export default ApplicationFormPage;
