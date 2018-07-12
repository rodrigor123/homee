import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleProvider, Container } from 'native-base';
import getTheme from '../native-base-theme/components';
import { Provider } from 'react-redux';
import Store from 'ReduxStore';
import MainContainer from 'MainContainer';
import Routes from './Routes';
import HomeeTheme from '../native-base-theme/variables/homee';

const App = () => {
    return (
        <Provider store={ Store }>
            <StyleProvider style={getTheme(HomeeTheme)}>
                <Container>
                    <Routes />
                    <MainContainer />
                </Container>
            </StyleProvider>
        </Provider>
    );
}

export default App;
