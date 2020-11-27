import React, { useState } from 'react';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { FiSearch } from 'react-icons/fi';

import { Tabs, Tab, ContentContainer } from './styles';

import { Container, ContentPage } from '../Activities/styles';
import { IconContainer } from '../../components/DisciplineCard/styles';
import ActivitiesListCard from '../../components/ActivitiesListCard';

const Activities = () => {

	const options = [
		{ name: 'Disciplinas', href: '/disciplinas' },
		{ name: 'Atividades', href: '/atividades' },
		{ name: 'Notas', href: '/notas' },
		{ name: 'Aulas', href: '/aulas' }
	];

	const activities = [
		{ title: 'Matemática', subtitle: 'Nova atividade síncrona', date:'Prazo: 27 de out', content:'Geometria analítica' },
		{ title: 'Matemática', subtitle: 'Nova atividade assíncrona', date:'Prazo: 27 de out', content:'Fazer exercícios do livro' },
		{ title: 'Física', subtitle: 'Nova atividade síncrona', date:'Prazo: 27 de out', content:'Resumo do capítulo 10' },
		{ title: 'Geografia', subtitle: 'Nova atividade assíncrona', date:'Prazo: 27 de out', content:'Fichamento do capítulo 13' }
	];

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
				<Navbar
					userName="Talita Galdino"
					options={options}
				/>

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
								return <ActivitiesListCard key={activity.title} title={activity.title} subtitle={activity.subtitle} date={activity.date} content={activity.content} />
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