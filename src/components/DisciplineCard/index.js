import React from 'react';
import { CardContainer, HeaderCard, Name, IconContainer, ContentContainer, Information, InformationPosition, Link} from './styles';

import { BsGearFill } from 'react-icons/bs';

const DisciplineCard = ({ id, name, schedule, teacher }) => {

	return(
    <Link href={`/disciplina/${id}`}>
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
    </Link>
	);
}

export default DisciplineCard;
