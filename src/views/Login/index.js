import React from 'react';

import { Fields, GoogleButton, GoogleIcon, Input, Button } from './styles';

const LoginPage = () => {
    return (
        <Fields>
            <GoogleButton>
                <GoogleIcon />
                Entrar com o Google
            </GoogleButton>

            <span>ou</span>
            <Input placeholder="E-mail" data-cy="login-email" />
            <Input placeholder="Senha" data-cy="login-password" />

            <Button>Entrar</Button>
        </Fields>
    );
};

export default LoginPage;
