import React from "react";
import Logo from "../../assets/logo.svg";
import { ImgHome, NomePage } from "./styled";

const HomePage = () => {
  return (
    <div>
      <NomePage>
        <h1>LabbEdit</h1>
      </NomePage>
      <ImgHome>
        <img src={Logo} alt="Logo LabbEdit" />
      </ImgHome>
    </div>
  );
};

export default HomePage;
