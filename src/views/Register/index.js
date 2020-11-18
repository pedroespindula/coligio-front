import React, { useState } from 'react';

import { Fields, GoogleButton, GoogleIcon, Input } from '../Login/styles';

import Button from '../../components/Button';
import Radio from '../../components/Radio';

import { CheckBoxContainer } from './styles';

const RegisterPage = () => {
    const [typeUser, setTypeUser] = useState(true);

    return (
        <Fields>
            <GoogleButton>
                <GoogleIcon />
                Cadastrar com o Google
            </GoogleButton>

            <span>ou</span>
            <Input placeholder="Nome Completo" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmação de senha" />

            <CheckBoxContainer>
                <Radio
                    label="Professor"
                    value={typeUser}
                    changed={() => {
                        setTypeUser(!typeUser);
                    }}
                />

                <Radio
                    label="Aluno"
                    value={!typeUser}
                    changed={() => {
                        setTypeUser(!typeUser);
                    }}
                />
            </CheckBoxContainer>

            <Button style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}>
                Criar conta
            </Button>
        </Fields>
    );
};

export default RegisterPage;
