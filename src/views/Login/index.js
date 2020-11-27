import React, { useState } from 'react';

import { login } from '../../services/auth';
import { Fields, GoogleButton, GoogleIcon, Input, Button } from './styles';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const data = {
        email: email,
        senha: senha
    };

    return (
        <Fields>
            <GoogleButton>
                <GoogleIcon />
                Entrar com o Google
            </GoogleButton>

            <span>ou</span>
            <Input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />

            <Button
                onClick={() => {
                    login(data);
                }}
            >
                Entrar
            </Button>
        </Fields>
    );
};

export default LoginPage;
