import React, { useState } from 'react';

import { Fields, Input } from '../../views/Login/styles';
import { Title, InputsContainer } from './styles';
import Button from '../../components/Button';

import { matricular } from '../../services/disciplina'

const RegisterStudentDiscipline = () => {
	const [disciplineCode, setDisciplineCode] = useState('');
	
    const handleMatricular = async () => {
        const result = await matricular(disciplineCode)
        console.log(result.data)
    }

	return (
		<Fields>

			<Title> Cadastrar disciplina </Title>

			<InputsContainer>
				<Input value={disciplineCode}
							 placeholder='Código da disciplina'
							 onChange={(e) => {
								 setDisciplineCode(e.target.value)
							 }} />
			</InputsContainer>

			<Button 
				style={{ width: '100%',
								 background: '#000',
								 fontSize: '20px',
								 height: '50px' }}
        onClick={handleMatricular}
				>
				Participar
			</Button>
		</Fields>
	);
}

export default RegisterStudentDiscipline;
