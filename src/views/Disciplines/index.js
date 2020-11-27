import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container, Title, ContentPage, InputsContainer, DisciplinesContainer, InputSearch } from './styles';

import { GrAdd } from 'react-icons/gr';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import RegisterStudentDiscipline from '../../components/RegisterStudentDiscipline';
import DisciplineCard from '../../components/DisciplineCard';
import RegisterActivitie from '../../components/RegisterActivitie';

const Disciplines = () => {
    const cargo = 'professor';

    const optionsStudent = [
        { name: 'Disciplinas', href: '/disciplinas' },
        { name: 'Atividades', href: '/atividades' },
        { name: 'Notas', href: '/notas' },
        { name: 'Aulas', href: '/aulas' }
    ];

    const optionsTeacher = [
        {
            name: 'Disciplinas'
        }
    ];

    const disciplines = [
        { name: 'Matemática', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. João Assis' },
        { name: 'Inglês', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Maria Julia' },
        {
            name: 'Português',
            schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'],
            teacher: 'Prof. Marcio Roberto'
        },
        { name: 'História', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Ana Carolina' },
        { name: 'Geografia', schedule: ['seg 08:00~10:00', 'qua 08:00~10:00'], teacher: 'Prof. Ana Carolina' }
    ];

    const DisciplinesStudent = () => {
        return (
            <>
                <Header />
                <Container>
                    <Navbar userName="Talita Galdino" options={optionsStudent} />
                    <ContentPage>
                        <Title>Minhas Disciplinas</Title>

                        <InputsContainer>
                            <InputSearch placeholder="Buscar" />
                            <Button
                                style={{
                                    padding: '8px',
                                    background: '#FFF',
                                    border: '1px solid rgba(0, 0, 0, 0.3)'
                                }}
                                onClick={() => setNewDisciplineOpened(true)}
                            >
                                <GrAdd />
                            </Button>
                        </InputsContainer>

                        <DisciplinesContainer>
                            {disciplines.map((discipline) => {
                                return (
                                    <DisciplineCard
                                        key={discipline.name}
                                        name={discipline.name}
                                        schedule={discipline.schedule}
                                        teacher={discipline.teacher}
                                    />
                                );
                            })}
                        </DisciplinesContainer>
                    </ContentPage>
                    {isNewDisciplineOpened ? (
                        <Modal onClose={() => setNewDisciplineOpened(false)}>
                            <RegisterStudentDiscipline />
                        </Modal>
                    ) : null}
                </Container>
            </>
        );
    };

    const DisciplinesTeacher = () => {
        return (
            <>
                <Header />
                <Container>
                    <Navbar userName="Professor Rohit" options={optionsTeacher} />
                    <ContentPage>
                        <Title>Minhas Disciplinas</Title>

                        <InputsContainer>
                            <InputSearch placeholder="Buscar" />
                            <Button
                                style={{
                                    padding: '15px',
                                    fontSize: '16px'
                                }}
                                onClick={() => setNewActivityOpened(true)}
                            >
                                Cadastrar Atividade
                            </Button>

                            <Button
                                style={{
                                    padding: '15px',
                                    fontSize: '16px'
                                }}
                                onClick={() => setNewClassOpened(true)}
                            >
                                Cadastrar Aula
                            </Button>
                        </InputsContainer>

                        <DisciplinesContainer>
                            {disciplines.map((discipline) => {
                                return (
                                    <DisciplineCard
                                        key={discipline.name}
                                        name={discipline.name}
                                        schedule={discipline.schedule}
                                        teacher={discipline.teacher}
                                    />
                                );
                            })}
                        </DisciplinesContainer>
                    </ContentPage>
                    {isNewClassOpened ? <Modal onClose={() => setNewClassOpened(false)}>oioi</Modal> : null}
                    {isNewActivityOpened ? (
                        <Modal onClose={() => setNewActivityOpened(false)}>
                            <RegisterActivitie />
                        </Modal>
                    ) : null}
                </Container>
            </>
        );
    };

    const [isNewDisciplineOpened, setNewDisciplineOpened] = useState(false);
    const [isNewClassOpened, setNewClassOpened] = useState(false);
    const [isNewActivityOpened, setNewActivityOpened] = useState(false);

    return cargo === 'professor' ? <DisciplinesTeacher /> : <DisciplinesStudent />;
};

export default Disciplines;
