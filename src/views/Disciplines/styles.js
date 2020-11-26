import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: calc(100vh - 50px);

    background-color: #ffff;
`;

export const Title = styled.div`
    font-size: 24px;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;

    height: 65px;
    width: 80vw; 
    /* eu sei q esse width ta errado, vou ajeitar amanha, é so temporário */
    padding: 20px 28px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ContentPage = styled.div`
    display: flex; 
    flex-direction: column;
`;

export const DisciplinesContainer = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;