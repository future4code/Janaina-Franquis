import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome, goToCreateTripPage } from "../../routes/cordinator";
import styled from "styled-components";

const ContainerTripPage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 100px;

  h1 {
    font-size: 40px;
  }

  input {
    margin: 5px;
    padding: 5px;
    width: 250px;
  }

  select {
    margin: 5px;
    padding: 5px;
    width: 265px;
  }

  button {
    margin: 5px;
    padding: 5px;
    color: red;
    font-size: 15px;
    border-radius: 15px;
    width: 100px;
  }
`;

const CreateTripPage = () => {
  const history = useHistory();

  // createTrip = () => {
  //   const body ={
  //   name: "Ano novo em Mercúrio",
  //   planet: "Mercúrio",
  //   date: "31/12/2019",
  //   description: "Venha passar a virada pertinho do Sol!",
  //   durationInDays:

  //   };

  // }

  return (
    <div>
      <ContainerTripPage>
        <h1>Criar Viagem </h1>
        <p></p>
        <input placeholder="Nome" />
        <select placeholder="Escolha um Planeta" />
        <input placeholder="dd / mm / aaaa" id="date" type="date"/>
        <input placeholder="Descrição" type="text"/>
        <button onClick={() => goToAdminHome(history)}>Voltar</button>
        <button onClick={() => goToCreateTripPage(history)}>Criar</button>
      </ContainerTripPage>
    </div>
  );
};
export default CreateTripPage;
