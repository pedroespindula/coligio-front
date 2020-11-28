import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Container, Title, ContentPage, InputsContainer, DisciplinesContainer, InputSearch } from './styles';

import { GrAdd } from 'react-icons/gr';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import RegisterStudentDiscipline from '../../components/RegisterStudentDiscipline';
import DisciplineCard from '../../components/DisciplineCard';
import RegisterActivitie from '../../components/RegisterActivitie';
import RegisterClass from '../../components/RegisterClass';

import { getUser } from '../../services/auth'

import { getAll as getDisciplinas } from '../../services/disciplina';

const Disciplines = () => {
    const { cargo, nome } = getUser();
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        async function fetchDisciplinas() {
          let disciplinas = await getDisciplinas();

          if (cargo == "aluno") {
            disciplinas.data = disciplinas.data.map(d => d.disciplina)
          }

          setDisciplinas(disciplinas.data)
        }

        fetchDisciplinas()
    }, [])

    const DisciplinesStudent = () => {
        return (
            <>
                <Header />
                <Container>
                    <Navbar />
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
                            {disciplinas.map((discipline) => {
                                return (
                                    <DisciplineCard
                                        key={discipline.id}
                                        id={discipline.id}
                                        name={discipline.nome}
                                        schedule={["Carga horária: " + discipline.cargaHoraria]}
                                        teacher={"Prof. "  + discipline.professor.nome}
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
                    <Navbar userName={"Prof. " + nome} options={optionsTeacher} />
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
                                Cadastrar Disciplina
                            </Button>
                        </InputsContainer>

                        <DisciplinesContainer>
                            {disciplinas.map((discipline) => {
                                return (
                                    <DisciplineCard
                                        key={discipline.id}
                                        id={discipline.id}
                                        name={discipline.nome}
                                        schedule={["Carga horária: " + discipline.cargaHoraria]}
                                        teacher={"Prof. "  + discipline.professor.nome}
                                    />
                                );
                            })}
                        </DisciplinesContainer>
                    </ContentPage>
                    {isNewClassOpened ? (
                        <Modal onClose={() => setNewClassOpened(false)}>
                            <RegisterClass />
                        </Modal>
                    ) : null}
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
