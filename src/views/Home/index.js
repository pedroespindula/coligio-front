import React from 'react';
import { useHistory } from 'react-router-dom';
import { HomeContainer, Header, Logo, LinksContainer, Link, Body, Title, Subtitle } from './styles'

import Button from '../../components/Button';

const Home = () => {

	const history = useHistory();

	return(
		<HomeContainer>
			<Header> 
				<Logo> colig.io </Logo>
				<LinksContainer>
					<Link href='/'> Suporte </Link>
					<Link href='/login'> Entrar </Link>
					<Button 
						style={{ width: '305px', height: '58px' }}
						onClick={() => {
							history.push('/cadastro');
						}}
					> 
						Comece aqui
					</Button>
				</LinksContainer>
			</Header>

			<Body>
				<Title>
					Imagine tudo em um único lugar
				</Title>
				<Subtitle>
					Colig.io ajuda instituições de ensino a centralizar suas atividades em uma única plataforma
				</Subtitle>
				<Button 
					style={{ width: '390px', height: '50px' }}
					onClick={() =>{
						history.push('/cadastro');
					}}
				> 
					Experimente gratuitamente 
				</Button>
			</Body>

		</HomeContainer>
	);
};

export default Home;