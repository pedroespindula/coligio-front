import React, { useState } from 'react';

import { Fields, Input } from '../../views/Login/styles';
import { Title, InputsContainer } from './styles';
import Button from '../../components/Button';

const RegisterStudentDiscipline = () => {
	const [disciplineCode, setDisciplineCode] = useState('');
	const [email, setEmail] = useState('');
	
	console.log(email, disciplineCode);

	return (
		<Fields>

			<Title> Cadastrar disciplina </Title>

			<InputsContainer>
				<Input value={disciplineCode}
							 placeholder='Código da disciplina'
							 onChange={(e) => {
								 setDisciplineCode(e.target.value)
							 }} />
				<Input value={email} 
							 placeholder='Email'
							 onChange={(e) => {
								 setEmail(e.target.value)
							 }} />
			</InputsContainer>

			<Button 
				style={{ width: '100%',
								 background: '#000',
								 fontSize: '20px',
								 height: '50px' }}
				>
				Participar
			</Button>
		</Fields>
	);
}

export default RegisterStudentDiscipline;