import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 20%;
    height: 100%;

    max-width: 400px;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

export const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    padding: 10px 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const UserData = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    > span {
        margin-left: 12px;
    }
`;

export const UserIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;

    border-radius: 50%;

    background-color: var(--primary);

    color: var(--background);
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    padding: 15px 0;

    overflow-y: hidden;
`;

export const LinkNavbar = styled.a`
    padding: 8px 18px;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    color: #000;

    :active {
        background-color: #d6edef;
    }

    :hover {
        background-color: #d6edef;
    }
`;

export const LogOut = styled.div`
    width: 80%;
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    padding: 30px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const LogOutPosition = styled.div`
    display: flex;
    justify-content: center;
`;
