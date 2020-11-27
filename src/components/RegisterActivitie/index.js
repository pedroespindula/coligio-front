import React from 'react';
import { Fields, Input } from '../../views/Login/styles';
import Button from '../../components/Button';
import { Title, InputsContainer } from '../RegisterStudentDiscipline/styles'

const RegisterActivitie = () => {
	return(
		<Fields>

			<Title> Cadastrar disciplina </Title>

			<InputsContainer>
				<Input 
						placeholder='Nome'
				/>
				<Input 
						placeholder='Nome'
				/>
				<Input 
						placeholder='Nome'
				/>
			</InputsContainer>

			<Button 
				style={{ width: '100%',
								background: '#000',
								fontSize: '20px',
								height: '50px' }}
				>
				Cadastrar atividade
			</Button>

		</Fields>
	);
}

export default RegisterActivitie;