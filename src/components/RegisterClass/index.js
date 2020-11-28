import React, { useState } from 'react';

import { Fields, Input } from '../../views/Login/styles';
import { Title, TextArea } from '../RegisterActivitie/styles';
import Button from '../../components/Button';
import { InputsContainer } from '../RegisterStudentDiscipline/styles';

import { post as registerDisciplina } from '../../services/disciplina';

function RegisterClass() {
    const [nome, setNome] = useState();
    const [semestre, setSemestre] = useState();
    const [carga, setCarga] = useState();

    const dados = {
      nome,
      semestre,
      cargaHoraria: carga
    }

    return (
        <Fields>
            <Title>Cadastrar Disciplina</Title>

            <InputsContainer>
              <Input placeholder="Nome" type="text" onChange={(e) => setNome(e.target.value)}/>
              <Input placeholder="Semestre" type="text" onChange={(e) => setSemestre(e.target.value)}/>
              <Input placeholder="Carga horária" onChange={(e) => setCarga(e.target.value)}/>
            </InputsContainer>

            <Button 
              style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}
              onClick={() => registerDisciplina(dados)}>
                Cadastrar disciplina
            </Button>
        </Fields>
    );
}

export default RegisterClass;
