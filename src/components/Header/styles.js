import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #51afb9;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const Title = styled.span`
    font-size: 28px;
    color: #ffff;
    margin-left: 2%;
    font-family: 'Fredoka One', sans-serif;
`;

export const Link = styled.a`
    text-decoration: none;

    :hover {
        text-decoration: none;
        cursor: pointer;
    }
`
