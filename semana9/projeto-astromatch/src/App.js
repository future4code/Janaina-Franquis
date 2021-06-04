import React, { useState } from "react";
import Home from "./components/Home";
import Match from "./components/Match";
import StyledHome from "./components/StyledHome";
import "../src/App.css";

export default function App() {
  const [paginas, setPaginas] = useState(true);

  const proximaPagina = () => {
    setPaginas(!paginas);
  };

  return (
    <div>
      {paginas ? (<Home proximaPagina={proximaPagina}/> ) : (<Match proximaPagina={proximaPagina}/>)}
    </div>
  );
}
