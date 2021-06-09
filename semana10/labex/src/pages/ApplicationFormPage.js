import React from 'react';
import { useHistory } from 'react-router-dom';


const ApplicationFormPage = () => {

    const history = useHistory();

    const goToListTripPage = () =>{
        history.push("/trips/list");
    };

   
    
  

    return (
        <div>
            <h1>Inscrever-se para uma Viagem</h1>
            <p></p>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <button onClick={goToListTripPage}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}
export default ApplicationFormPage;