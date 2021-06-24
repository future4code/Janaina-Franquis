import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const PageContainer = styled.div`
  h2 {
    margin-top: 5rem;
    text-align: center;
    padding: 1rem;
    font-size: 3rem;
  }
`;

export const StyledTextField = styled(TextField)`
  display: grid;
  margin-top: 1rem;
  margin-inline: auto;
  width: 40%;
  padding: 1rem;
`;

export const StyledButton = styled(Button)`
  margin: 1rem;
  margin-top: 3rem;
  width:8%;
  left: 40%;
`;
