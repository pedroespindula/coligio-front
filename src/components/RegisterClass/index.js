import React from 'react';

import { Fields, Input } from '../../views/Login/styles';
import { Title, TextArea } from '../RegisterActivitie/styles';
import Button from '../../components/Button';
import { InputsContainer } from '../RegisterStudentDiscipline/styles';

function RegisterClass() {
    return (
        <Fields>
            <Title>Cadastrar Disciplina</Title>

            <InputsContainer>
                <Input placeholder="Nome" />
                <TextArea placeholder="Descrição" type="textarea" />
                <Input placeholder="Carga Horária" />
            </InputsContainer>

            <Button style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}>
                Cadastrar disciplina
            </Button>
        </Fields>
    );
}

export default RegisterClass;
