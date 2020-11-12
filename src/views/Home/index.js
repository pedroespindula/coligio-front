import React from 'react';
import { HomeContainer, Header, Logo, Container, Links } from './styles'

import Button from '../../components/Button';

const Home = () => {
		return(
			<HomeContainer>
				<Header> 
					<Logo> colig.io </Logo>

					<Container>
						<Links href='google.com'> Suporte </Links>
						<Links href='google.com'> Entrar </Links>
						<Button style={{ width: '305px', height: '58px' }}> Comece aqui </Button>
					</Container>
				</Header>

			</HomeContainer>
	);
};

export default Home;