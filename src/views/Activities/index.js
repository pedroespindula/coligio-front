import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { FiSearch } from 'react-icons/fi';

import { Tabs, Tab, ContentContainer } from './styles';

import { Container, ContentPage } from '../Activities/styles';
import { IconContainer } from '../../components/DisciplineCard/styles';
import ActivitiesListCard from '../../components/ActivitiesListCard';

import { getAll } from '../../services/atividade';

const Activities = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    async function fetchActivities() {
      const atividades = await getAll();

      setActivities(atividades.data)
      console.log(atividades.data);
    }

    fetchActivities();
  }, [])

	const [openHome, setOpenHome] = useState(true);
	const [openActivities, setOpenActivities] = useState(false);
	const [openNotes, setOpenNotes] = useState(false);
	const [openClasses, setOpenClasses] = useState(false);

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
				<Navbar/>

				<ContentPage>

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
                return <ActivitiesListCard key={activity.nome} title={activity.nome} subtitle={"Nova atividade assincrona"} date={activity.dataEntrega} content={activity.descricao} />
							})
						)
					}
					</ContentContainer>
				</ContentPage>
			</Container>
		</> 
	);
}

export default Activities;
