import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HomeContainer, Header, Logo, LinksContainer, Link, Body, Title, Subtitle } from './styles';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import LoginPage from '../Login';

const Home = () => {
    const history = useHistory();

    const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
    const [isRegisterModalOpened, setIsRegisterModalOpened] = useState(false);

    return (
        <HomeContainer>
            <Header>
                <Logo> colig.io </Logo>
                <LinksContainer>
                    <Link href="/"> Suporte </Link>
                    <Link onClick={() => setIsLoginModalOpened(true)}> Entrar </Link>
                    <Button
                        style={{ width: '220px', height: '50px' }}
                        onClick={() => {
                            setIsRegisterModalOpened(true);
                        }}
                    >
                        Comece aqui
                    </Button>
                </LinksContainer>
            </Header>

            <Body>
                <Title>
                    Imagine tudo <br />
                    em um único lugar
                </Title>
                <Subtitle>
                    Colig.io ajuda instituições de ensino a centralizar <br /> suas atividades em uma única
                    plataforma
                </Subtitle>
                <Button
                    style={{ width: '390px', height: '50px' }}
                    onClick={() => {
                        setIsRegisterModalOpened(true);
                    }}
                >
                    Experimente gratuitamente
                </Button>
            </Body>

            {isLoginModalOpened ? (
                <Modal onClose={() => setIsLoginModalOpened(false)}>
                    <LoginPage />
                </Modal>
            ) : null}

            {isRegisterModalOpened ? (
                <Modal onClose={() => setIsRegisterModalOpened(false)}>
                    <h1>MODAL REGISTER</h1>
                </Modal>
            ) : null}
        </HomeContainer>
    );
};

export default Home;
