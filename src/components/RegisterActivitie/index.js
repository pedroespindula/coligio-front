import React, { useState } from 'react';
import { Fields, Input } from '../../views/Login/styles';
import { Title, TextArea } from './styles';
import Button from '../../components/Button';
import { InputsContainer } from '../RegisterStudentDiscipline/styles';

import { post as registerAtividade } from '../../services/atividade';

const RegisterActivity = () => {
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [data, setData] = useState();
    const [codigo, setCodigo] = useState();

    const dados = {
      nome,
      descricao,
      dataEntrega: data
    }

    return (
        <Fields>
            <Title>Adicionar Atividade</Title>

            <InputsContainer>
              <Input placeholder="Nome" type="text" onChange={(e) => setNome(e.target.value)}/>
              <TextArea placeholder="Descrição" type="textarea" onChange={(e) => setDescricao(e.target.value)}/>
              <Input placeholder="Data de entrega" type="date" onChange={(e) => setData(e.target.value)}/>
              <Input placeholder="Código da disciplina" type="text" onChange={(e) => setCodigo(e.target.value)}/>
            </InputsContainer>

            <Button 
              style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}
              onClick={() => registerAtividade(codigo, dados)}>
                Cadastrar atividade
            </Button>
        </Fields>
    );
};

export default RegisterActivity;
