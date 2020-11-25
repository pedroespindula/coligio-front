import React from 'react';
import Header from '../../components/Header';
import { DashboardContainer } from './styles';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
    return (
        <>
            <Header />
            <DashboardContainer>
                <Navbar
                    userName="Talita Galdino"
                    options={[
                        { name: 'Disciplinas', href: '/disciplinas' },
                        { name: 'Atividades', href: '/atividades' },
                        { name: 'Notas', href: '/notas' },
                        { name: 'Aulas', href: '/aulas' }
                    ]}
                />
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
