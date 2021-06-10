import React from "react";
import Router from "../src/routes/Router";
import styled from "styled-components";



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`





const App = () => {
  return (
    <AppContainer>

      <Router />

      
    </AppContainer>
  );
};

export default App;
