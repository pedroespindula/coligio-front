import React from 'react';
import { CardContainer, HeaderCard, Name, IconContainer, ContentContainer, Information, InformationPosition } from './styles';

import { BsGearFill } from 'react-icons/bs';

const DisciplineCard = ({ name, schedule, teacher }) => {
	return(
		<CardContainer>

			<HeaderCard>
				<Name>
					Matemática
				</Name>

				<IconContainer>
					<BsGearFill fill='#FFF' size={20}/>
				</IconContainer>

			</HeaderCard>

			<ContentContainer>
				<InformationPosition>
					<Information>
						seg 08:00~10:00
					</Information>

					<Information>
						qua 08:00~10:00
					</Information>
				</InformationPosition>

				<InformationPosition>
					<Information>
						Prof. José da Silva
					</Information>
				</InformationPosition>
			</ContentContainer>
		</CardContainer>
	);
}

export default DisciplineCard;