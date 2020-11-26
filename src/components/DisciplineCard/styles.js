import styled from 'styled-components';

export const CardContainer = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.3);
	width: 80%;
	height: 75%;
	border-radius: 10px;
	margin: 30px;
`;

export const HeaderCard = styled.div`
	width: 100%;
	background-color: #51afb9;
	height: 50px;
	
	display: flex;

	border-radius: 10px 10px 0 0;
`;

export const Name = styled.h3`
	font-size: 18px;
	font-weight: 300;
	font-family: 'Rubik', sans-serif;

	color: #FFF;
	padding: 10px;
`;

export const IconContainer = styled.div`
	padding: 15px 20px;
	width: 100%;
	text-align: end;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Information = styled.h6`
	font-size: 12px;
	font-weight: 300;
	padding: 5px;
`;

export const InformationPosition = styled.div`
	padding: 20px;
`;

