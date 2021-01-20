import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import 'reflect-metadata';
import { Loading } from './components/loading';
import { Popup } from './components/popup';
import { Spinner } from './components/spinner';
import './config';
import store from './redux/store';
import { linkNavigation } from './routers/linkNavigation';
import { MainStackNavigator } from './routers/mainStack';
import { navigationRef } from './routers/rootNavigation';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer linking={linkNavigation.linking} ref={navigationRef}>
                    {/* Navigations */}
                    <MainStackNavigator />
                    {/* Global components */}
                    <Spinner />
                    <Popup />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
