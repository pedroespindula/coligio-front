import React from 'react';
import Header from '../../components/Header';
import { DashboardContainer, Title, ContentPage, DisciplinesContainer } from './styles';
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
        { name: 'História', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Ana Carolina'},
        { name: 'Geografia', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Ana Carolina'}
    ];

    return (
        <>
            <Header />
            <DashboardContainer>
                <Navbar
                    userName="Talita Galdino"
                    options={options}
                />
                <ContentPage>

                    <Title>
                        Minhas Disciplinas
                    </Title>

                    <DisciplinesContainer>
                        {
                            disciplines.map((discipline) => {
                                return <DisciplineCard key={discipline.name} name={discipline.name} schedule={discipline.schedule} teacher={discipline.teacher} />
                            })
                        }
                    </DisciplinesContainer>
                    
                </ContentPage>
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
