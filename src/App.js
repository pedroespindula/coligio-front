import React from 'react';
import Routes from './routes';

import GlobalStyles, { MainContainer } from './styles/GlobalStyles';

function App() {
    return (
        <MainContainer>
            <Routes />
            <GlobalStyles />
        </MainContainer>
    );
}

export default App;
