import { createGlobalStyle } from 'styled-components';

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

        --background: #E5E5E5;

        --primary-black: #000;
        --secondary-black: #111;
        --red: #BB3737;
    }
`;