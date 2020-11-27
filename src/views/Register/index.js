import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Fields, GoogleButton, GoogleIcon, Input } from '../Login/styles';

import { post as registerStudent } from '../../services/usuario';

import Button from '../../components/Button';
import Radio from '../../components/Radio';

import { CheckBoxContainer } from './styles';

const RegisterPage = () => {
    const [cargo, setCargo] = useState("aluno");
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    const history = useHistory();

    const data = {
        nome: nome, 
        cargo: cargo,
        email: email,
        senha: senha
    }

    return (
        <Fields>
            <GoogleButton>
                <GoogleIcon />
                Cadastrar com o Google
            </GoogleButton>

            <span>ou</span>
            <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome Completo" />
            <Input value={email} type={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            <Input type='password' placeholder="Senha" />
            <Input value={senha} onChange={(e) => setSenha(e.target.value)} type='password' placeholder="Confirmação de senha" />

            <CheckBoxContainer>
                <Radio
                    label="Professor"
                    value={cargo === "professor"}
                    changed={() => {
                        setCargo("professor");
                    }}
                />

                <Radio
                    label="Aluno"
                    value={cargo === "aluno"}
                    changed={() => {
                        setCargo("aluno");
                    }}
                />
            </CheckBoxContainer>

            <Button 
                style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}
                onClick={() => {
                    registerStudent(data)
                    history.push('/');
                }}
            >
                
                Criar conta
            </Button>
        </Fields>
    );
};

export default RegisterPage;
