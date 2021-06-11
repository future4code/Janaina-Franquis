import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/url";

const TripDetailsPage = () => {
    const history = useHistory();

  const [trips, setTrip] = useState({});

  //requisição
  //endepoint protegido.
  const getTripDetail = (id) => {
    axios.get(`${BASE_URL}/trip/${id}`, {
        headers:{
            auth: localStorage.getItem("token")
        }
    }) 
    .then ((response) =>  {
       // console.log(response);
        setTrip(response.data.trip)
    })
    .catch((err) => {
        //console.log(err.response.data);
        alert(err.response.data.message)
    })

  };
  // dados ser pego assim que a tela abrir

  useEffect(() => {
      getTripDetail ("51chrZVSA3n8GdhHBwXk") 
  }, [])


  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button >Voltar</button>
      <button>Criar Viagem</button>
      <button>Logout</button>
        <h3>{trips.name}</h3>
      

      
      <p>
        Para o administrador ver o detalhe de uma viagem específica, bem como os
        candidatos que aplicaram para ela{" "}

      </p>
    </div>
  );
};
export default TripDetailsPage;
