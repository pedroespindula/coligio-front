import styled from 'styled-components';

export const TextArea = styled.textarea`
    width: 100%;
    height: 130px;

    margin: 10px auto;
    padding: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    border: 3px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;

    background-color: var(--background);
`;

export const Title = styled.h2`
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
`;
