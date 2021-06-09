import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  
  const history = useHistory();

  const goToListTripPage = () => {
    history.push("/trips/list");
  };
  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <div>
      <h1>LabeX</h1>

      <button onClick={goToListTripPage}>Ver Viagens</button>
      <button onClick={goToLoginPage}>Área de Admin</button>
    </div>
  );
};
export default HomePage;
