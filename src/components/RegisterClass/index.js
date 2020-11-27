import React from 'react';

import { Fields, Input } from '../../views/Login/styles';
import { Title, TextArea } from '../RegisterActivitie/styles';
import Button from '../../components/Button';
import { InputsContainer } from '../RegisterStudentDiscipline/styles';

function RegisterClass() {
    return (
        <Fields>
            <Title>Cadastrar aula</Title>

            <InputsContainer>
                <Input placeholder="Data" type="date" />
                <Input placeholder="Horário" />
                <TextArea placeholder="Descrição" type="textarea" />
            </InputsContainer>

            <Button style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}>
                Cadastrar aula
            </Button>
        </Fields>
    );
}

export default RegisterClass;
