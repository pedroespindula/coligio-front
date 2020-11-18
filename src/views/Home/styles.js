import styled from 'styled-components';

export const HomeContainer = styled.div`
    max-width: 2400px;
    margin: 0 auto;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`;

export const Logo = styled.h3`
    font-size: 48px;
    color: #51afb9;
    font-family: 'Fredoka One', sans-serif;
    font-weight: 400;
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Link = styled.a`
    align-self: center;
    text-decoration: none;
    font-size: 24px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    color: #000;
    padding: 14px 0;
    margin-right: 30px;

    :hover {
        text-decoration: underline;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
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
    padding: 50px 0;
`;
