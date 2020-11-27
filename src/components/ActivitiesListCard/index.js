import React from 'react';
import { UserIcon } from '../Navbar/styles';
import { CardContainer,
				 Header,
				 InformationsContainer,
				 Information,
				 Content } from './styles';

const ActivitiesListCard = ({ title, subtitle, date, content }) => {
	return(
		<CardContainer>
			<Header>
				<>
					<UserIcon width='60px' height='60px'>{title.charAt(0)}</UserIcon>
				</>
				<InformationsContainer>

					<Information>{title}</Information>
                    <Information fontSize = '14px' color='#7A7979'> {subtitle} </Information>
					<Information fontSize='12px' color='#C0C0C0'> {date} </Information>
				</InformationsContainer>
			</Header>

			<Content>
				{content}
			</Content>
		</CardContainer>
	);
}

export default ActivitiesListCard;