import React from 'react'
import { useHistory } from 'react-router';

const LoginPage = () => {

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }


    return (
        <div>
            <h1>Login</h1>
            <p>Para fazermos login como administrador</p>
            <input placeholder="E-mail" type="email" name="E-Mail" id="" />
            <input placeholder="Senha" type="" name="senha"/>
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={goToAdminHomePage}>Entrar</button>
        </div>
    )
}

export default LoginPage;