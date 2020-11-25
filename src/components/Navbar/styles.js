import styled from 'styled-components';

export const NavbarContainer = styled.div`
	width: 20%;
	border-right: 2px solid #C4C4C4;
	height: 100%;
`;

export const NameContainer = styled.div`
	font-size: 18px;
	font-family: 'Rubik', sans-serif;
	font-weight: 300;
	display: flex;
	justify-content: space-between;
	padding: 10px;
	border-bottom: 2px solid #C4C4C4;
`;

export const OptionsContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const LinkNavbar = styled.a`
	text-decoration: none;
	font-size: 16px;
	font-family: 'Rubik', sans-serif;
	padding: 15px;
	font-weight: 300;
	color: #000;

	:hover {
		background-color: #D6EDEF;
	}
`;

export const LogOut = styled.div`
	width: 80%;
	border-top: 2px solid #C4C4C4;
	font-size: 18px;
	font-family: 'Rubik', sans-serif;
	padding: 30px;
	font-weight: 300;
	display: flex;
	justify-content: center;
`;