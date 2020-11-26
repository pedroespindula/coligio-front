import React from 'react';
import Header from '../../components/Header';
import { DashboardContainer, Title } from './styles';
import Navbar from '../../components/Navbar';
import DisciplineCard from '../../components/DisciplineCard';

const Dashboard = () => {

    const options = [
        { name: 'Disciplinas', href: '/disciplinas' },
        { name: 'Atividades', href: '/atividades' },
        { name: 'Notas', href: '/notas' },
        { name: 'Aulas', href: '/aulas' }
    ];

    const disciplines = [
        { name: 'Matemática', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. João Assis'},
        { name: 'Inglês', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Maria Julia'},
        { name: 'Português', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Marcio Roberto'},
        { name: 'História', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Ana Carolina'}
    ];

    return (
        <>
            <Header />
            <DashboardContainer>
                <Navbar
                    userName="Talita Galdino"
                    options={options}
                />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <Title>
                    Minhas Disciplinas
                </Title>
                {
                    disciplines.map((discipline) => {
                        <DisciplineCard name={discipline.name} schedule={discipline.schedule} teacher={discipline.teacher} />
                    })
                }
                <DisciplineCard />
                </div>
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
