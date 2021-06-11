import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToListTripPage, goToLoginPage } from "../routes/cordinator";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-family: sans-serif;
    font-size: 100px;
  }

  button {
    margin: 5px;
    padding: 10px;
    color: red;
    font-size: 15px;
    border-radius: 20px;
  }
`;

const HomePage = () => {
  const history = useHistory();
  return (
    <MainContainer>
      <h1>LabeX</h1>
      <button onClick={() => goToListTripPage(history)}>Ver Viagens</button>
      <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
    </MainContainer>
  );
};
export default HomePage;
