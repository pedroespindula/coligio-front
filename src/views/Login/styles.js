import styled from 'styled-components';
import background from '../../assets/icons/google-icon.png';

export const Fields = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    text-align: center;

    span {
        font-size: 20px;
        margin-top: 10px;
        color: var(--gray);
    }
`;

export const GoogleButton = styled.button`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 500;

    border: 3px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;

    background-color: var(--background);

    cursor: pointer;
`;

export const GoogleIcon = styled.div`
    width: 22px;
    height: 22px;

    margin-right: 6px;

    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;

    margin: 10px 0;
    padding-left: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    border: 3px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;

    background-color: var(--background);
`;

export const Button = styled.button`
    width: 100%;
    height: 50px;

    margin-top: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    border: 3px solid rgb(0, 0, 0);
    border-radius: 12px;

    color: var(--background);
    background-color: var(--primary-black);

    cursor: pointer;
`;
