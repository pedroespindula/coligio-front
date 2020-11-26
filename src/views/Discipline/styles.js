import styled from 'styled-components';

export const Tabs = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	width: 85%;
	margin-left: 5%;
	display: flex;
	padding: 5px 5px 0 5px;
`;

export const Tab = styled.h3`
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	padding: 10px;
	color: #C0C0C0;
	margin: 0 30px;


	:hover {
		font-weight: 500;
		border-bottom: 5px solid #51AFB9;
		color: #383838;
	}
`;

export const ContentContainer = styled.div`
	width: 85%;
	margin-left: 5%;
`;