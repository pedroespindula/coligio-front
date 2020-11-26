import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 80%;

	border: 2px solid rgba(0, 0, 0, 0.3);
	border-radius: 8px;

	margin: 25px;
`;

export const Header = styled.div`
	display: flex;
	padding: 15px;
`;

export const InformationsContainer = styled.div`
	padding: 15px;
`;

export const Information = styled.h3`
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	font-size: ${props => props.fontSize || '18px'};

	color: ${props => props.color || '#000'};
`;

export const Content = styled.div`
	padding: 20px;
	font-weight: 300;
	margin-left: 10%;
`;
