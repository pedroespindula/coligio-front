import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, :root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Rubik', sans-serif;
    }

    

    :root {
        --primary: #51AFB9;

        --background: #F8F8F8;

        --primary-black: #000;
        --secondary-black: #111;
        --gray: #8E8E8E;
        --red: #BB3737;
    }
`;

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: var(--background);
`;
