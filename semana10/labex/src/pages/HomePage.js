import React from "react";
import { useHistory } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from "../routes/cordinator";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import styled from "styled-components";


const ContainerHomePage = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 250px;
`;

const ButtonContainer = styled.div`
display: grid;
grid-auto-flow: column;
gap:25px;
`;


const HomePage = () => {
  const history = useHistory();
  return (
    <ContainerHomePage>
      <Typography variant="h1" align="center" gutterBottom>LabeX</Typography>
      <ButtonContainer>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => goToListTripPage(history)}
        >
          Ver Viagens
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => goToLoginPage(history)}
        >
          Área de Admin
        </Button>
      </ButtonContainer>
    </ContainerHomePage>
  );
};
export default HomePage;
