import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { FiSearch } from 'react-icons/fi';

import { Tabs, Tab, ContentContainer } from './styles';

import { Container, ContentPage, Title } from '../Disciplines/styles';
import { IconContainer } from '../../components/DisciplineCard/styles';
import CardActivitieOrMessage from '../../components/CardActivitieOrMessage';

import { getAll } from '../../services/atividade';
import { get } from '../../services/disciplina';

const Discipline = ({ match }) => {
  const [activities, setActivities] = useState([]);
  const [disciplina, setDisciplina] = useState([]);

	const [openHome, setOpenHome] = useState(true);
	const [openActivities, setOpenActivities] = useState(false);
	const [openNotes, setOpenNotes] = useState(false);
	const [openClasses, setOpenClasses] = useState(false);

  useEffect(() => {
    async function fetchActivities() {
      const atividades = await getAll(match.params.id);

      setActivities(atividades.data)
      console.log(atividades.data);
    }
    async function fetchDisciplina() {
      const d = await get(match.params.id);

      setDisciplina(d.data)
      console.log(d.data);
    }

    fetchActivities();
    fetchDisciplina();
  }, []);

	const handleHome = () => {
		setOpenHome(true);
		setOpenActivities(false);
		setOpenNotes(false);
		setOpenClasses(false);
	}

	const handleActivities = () => {
		setOpenHome(false);
		setOpenActivities(true);
		setOpenNotes(false);
		setOpenClasses(false);
	}

	const handleNotes = () => {
		setOpenHome(false);
		setOpenActivities(false);
		setOpenNotes(true);
		setOpenClasses(false);
	}

	const handleClasses = () => {
		setOpenHome(false);
		setOpenActivities(false);
		setOpenNotes(false);
		setOpenClasses(true);
	}

	return (
		<>
			<Header />
			<Container>
				<Navbar />

				<ContentPage>

					<Title>
            { disciplina.nome }
					</Title>

					<Tabs>
						<Tab onClick={handleHome}> Início </Tab>
						<Tab onClick={handleActivities}> Atividades </Tab>
						<Tab onClick={handleNotes}> Notas </Tab>
						<Tab onClick={handleClasses}> Aulas </Tab>
						<IconContainer>
							<FiSearch color='#C0C0C0' size={25} />
						</IconContainer>
					</Tabs>

					<ContentContainer>
					{
						openHome && (
							activities.map((activity) => {
								return <CardActivitieOrMessage key={activity.nome} title={activity.nome} date={activity.dataEntrega} content={activity.descricao} />
							})
						)
					}
					</ContentContainer>
				</ContentPage>
			</Container>
		</> 
	);
}

export default Discipline;
