import React from 'react';
import { StatusBar } from 'react-native';
import { globalStyles } from './Styles/GlobalStyles';

import { Routes } from './Routes/Routes';

function App() {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={globalStyles.verdeEscuro}
            />
            <Routes />
        </>
    );
}

export default App;
