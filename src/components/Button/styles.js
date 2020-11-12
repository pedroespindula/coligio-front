import styled from 'styled-components';

export const ButtonContainer = styled.button`

	height: ${props => props.height || "auto"};
  width: ${props => props.width || "auto"};
  padding: ${props => props.padding || "10px"};
	background-color: ${props => props.background || "#51AFB9"};
	color: ${props => props.color || "#FFF"};
	font-size: ${props => props.fontSize || "24px"};
	border-radius: ${props => props.borderRadius || "15px"};
	border: none;
	
`;