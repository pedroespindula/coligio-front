import React from 'react';
import { CardContainer, HeaderCard, Name, IconContainer, ContentContainer, Information, InformationPosition } from './styles';

import { BsGearFill } from 'react-icons/bs';

const DisciplineCard = ({ name, schedule, teacher }) => {

	return(
		<CardContainer>

			<HeaderCard>
				<Name>
					{ name }
				</Name>

				<IconContainer>
					<BsGearFill fill='#FFF' size={20}/>
				</IconContainer>

			</HeaderCard>

			<ContentContainer>
				<InformationPosition>
					{
						schedule.map((s, index) => {
							return <Information key={index}> {s} </Information>
						})
					}
				</InformationPosition>

				<InformationPosition>
					<Information>
						{teacher}
					</Information>
				</InformationPosition>
			</ContentContainer>
		</CardContainer>
	);
}

export default DisciplineCard;