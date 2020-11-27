import React from 'react';
import { Fields, Input } from '../../views/Login/styles';
import { Title, TextArea } from './styles';
import Button from '../../components/Button';
import { InputsContainer } from '../RegisterStudentDiscipline/styles';

const RegisterActivity = () => {
    return (
        <Fields>
            <Title>Adicionar Atividade</Title>

            <InputsContainer>
                <TextArea placeholder="Descrição" type="textarea" />

                <Input placeholder="Data de entrega" />
            </InputsContainer>

            <Button style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}>
                Cadastrar atividade
            </Button>
        </Fields>
    );
};

export default RegisterActivity;
