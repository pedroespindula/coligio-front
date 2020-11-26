import React from 'react';
import Header from '../../components/Header';
import { DashboardContainer, Title } from './styles';
import Navbar from '../../components/Navbar';

const Dashboard = () => {

    const options = [
        { name: 'Disciplinas', href: '/disciplinas' },
        { name: 'Atividades', href: '/atividades' },
        { name: 'Notas', href: '/notas' },
        { name: 'Aulas', href: '/aulas' }
    ];

    return (
        <>
            <Header />
            <DashboardContainer>
                <Navbar
                    userName="Talita Galdino"
                    options={options}
                />
                <Title>
                    Minhas Disciplinas
                </Title>
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
