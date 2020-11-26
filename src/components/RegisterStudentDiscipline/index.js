import React, { useState } from 'react';

import { Fields, Input } from '../../views/Login/styles';

import Button from '../../components/Button';

const RegisterStudentDiscipline = () => {
	const [disciplineCode, setDisciplineCode] = useState('');
	const [email, setEmail] = useState('');
	
	return (
		<Fields>

			<h4> Cadastrar disciplina </h4>
			<Input placeholder='Código da disciplina' />
			<Input placeholder='Email' />

			<Button style={{ width: '100%', background: '#000', fontSize: '20px', height: '50px' }}>
				Participar
			</Button>
		</Fields>
	);
}

export default RegisterStudentDiscipline;