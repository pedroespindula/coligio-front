import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { login as logar } from '../../services/usuario';

import { Fields, GoogleButton, GoogleIcon, Input, Button } from './styles';


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const history = useHistory();

    const login = async (e) => {
        e.preventDefault();
        const response = await logar({ email, senha })

        const { usuario, token } = response.data

        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));

        history.push('/disciplinas');
    }

    return (
        <Fields onSubmit={login}>
            <GoogleButton>
                <GoogleIcon />
                Entrar com o Google
            </GoogleButton>

            <span>ou</span>
            <Input placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)}/>

            <Button type="submit" value="Entrar" onSubmit={login}/>
        </Fields>
    );
};

export default LoginPage;
