import React from 'react';
import { useHistory } from 'react-router-dom';

 const CreateTripPage = () =>  {

    const history = useHistory();

    const goToAdminHome = () =>{
        history.push("/admin/trips/create")
    }

    const goToCreateTripPage =() => {
        history.push("/admin/trips/create")
    }
    



    return (
        <div>
            <h1>Criar Viagem </h1>
            <p></p>
            <button onClick={goToAdminHome}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar</button>
           
        </div>
    )
}
export default CreateTripPage;