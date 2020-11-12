import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.h3`
	font-size: 48px;
	color: #51AFB9;
	font-family: 'Fredoka One', sans-serif;
	padding: 0 30px;
	font-weight: 400;
`;

export const LinksContainer = styled.div`
	padding: 30px;
	display: flex;
	justify-content: space-between;
`;

export const Link = styled.a`
	text-decoration: none;
	font-size: 24px;
	font-family: 'Rubik', sans-serif;
	font-weight: 400;
	color: #000;
	height: 5px;
	padding: 18px;
	:hover {
		text-decoration: underline;
	}
`;

export const Body = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-family: 'Rubik', sans-serif;
	font-weight: 500;
	font-size: 96px;
	width: 60%;
	text-align: center;
`;

export const Subtitle = styled.h3`
	font-family: 'Rubik', sans-serif;
	text-align: center;
	font-weight: 400;
	font-size: 24px;
	width: 45%;
	margin-bottom: 50px;
`;