import React, { useState } from 'react';

import { Fields, GoogleButton, GoogleIcon, Input } from '../Login/styles';

import { registerStudent } from '../../services/student';

import Button from '../../components/Button';
import Radio from '../../components/Radio';

import { CheckBoxContainer } from './styles';

const RegisterPage = () => {
    const [cargo, setCargo] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    const handleCargo = (cargo) => {
        return cargo ? 'aluno' : 'professor';
    }

    return (
        <Fields>
            <GoogleButton>
                <GoogleIcon />
                Cadastrar com o Google
            </GoogleButton>

            <span>ou</span>
            <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome Completo" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            <Input type='password' placeholder="Senha" />
            <Input value={senha} onChange={(e) => setSenha(e.target.value)} type='password' placeholder="Confirmação de senha" />

            <CheckBoxContainer>
                <Radio
                    label="Professor"
                    value={cargo}
                    changed={() => {
                        setCargo(!cargo);
                    }}
                />

                <Radio
                    label="Aluno"
                    value={!cargo}
                    changed={() => {
                        setCargo(!cargo);
                    }}
                />
            </CheckBoxContainer>

            <Button 
                style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}
                onClick={() => registerStudent(nome, handleCargo(cargo), email, senha)}
            >
                
                Criar conta
            </Button>
        </Fields>
    );
};

export default RegisterPage;
