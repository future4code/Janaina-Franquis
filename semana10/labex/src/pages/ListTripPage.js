import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { goToHomePage, goToApplicationForm } from "../src/routes/cordinator";
import useInput from "../hooks/useInput";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { goToCreateTripPage } from "../routes/cordinator";
import ListItem from "@material-ui/core/ListItem";
import TripDetailsPage from "./TripDetailsPage";

const ContainerListTripPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 25px;
`;

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
      planet: planeta,
      durationInDays: duracao,
      date: data,
    };
  };

  return (
    <ContainerListTripPage>
      <Typography variant="h1" align="center" gutterBottom>
        {" "}
        Lista de Viagens
      </Typography>
      <Link to={"/admin/trips/create"} />
      <ButtonContainer>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => goToHomePage(history)}
        >
          Voltar
        </Button>
        <BUtton
          variant="contained"
          color="secondary"
          onClick={() => goToCreateTripPage(history)}
        >
          Criar Viagem
        </BUtton>
        <Button
          variant="contained"
          color="secondary"
          onClick={printForm}
          {...() => goToApplicationForm(history)}
        >
          Inscrever-se
        </Button>
      </ButtonContainer>

      <List component="nav" aria-label="main mailbox folders">
        <Link to={"/admin/trips/:id"}>
          <ListItem button>
            <ListItemText primary="Viagem para marte" />
          </ListItem>
        </Link>
        <Link to={"/admin/trips/:id"}>
          <ListItem button>
            <ListItemText primary="Viagem para Lua" />
          </ListItem>
        </Link>
      </List>

      <TextField label={"Nome"} value={nome} onChange={mudaNome}>
        {" "}
      </TextField>

      <TextField label={"Descrição"} value={descricao} onChange={mudaDescricao}>
        {" "}
      </TextField>
      <TextField
        label={"Planeta"}
        value={planeta}
        onChange={mudaPlaneta}
      ></TextField>
      <TextField
        label={"Duração"}
        value={duracao}
        onChange={mudaDuracao}
      ></TextField>
      <TextField label={"Data"} value={data} onChange={mudaData}></TextField>
    </ContainerListTripPage>
  );
};

export default ListTripPage;
