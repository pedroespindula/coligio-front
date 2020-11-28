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
	height: 60px;
	
	display: flex;
  justify-content: space-between;

	border-radius: 10px 10px 0 0;
`;

export const Name = styled.h3`
	font-size: 18px;
	font-weight: 300;
	font-family: 'Rubik', sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  align-self: center;

	text-decoration: none;

	color: #FFF;
	padding: 10px;

	:hover{
		font-weight: 500;
	}
`;

export const IconContainer = styled.div`
	padding: 15px 20px;
	text-align: end;
  align-self: flex-end;
  justify-self: flex-end;
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

export const Link = styled.a`
    text-decoration: none;
    color: inherit;

    :hover {
        text-decoration: none;
        cursor: pointer;
    }
`
