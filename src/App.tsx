import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import 'reflect-metadata';
import { AppPopup } from './components';
import { Spinner } from './components/spinner';
import './config';
import useForceUpdate from './hooks/useForceUpdate';
import useNotification from './hooks/useNotification';
import store from './redux/store';
import { linkNavigation } from './routers/linkNavigation';
import { MainStackNavigator } from './routers/mainStack';
import { navigationRef } from './routers/rootNavigation';

const App = () => {
    const [] = useForceUpdate();

    useNotification();

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                {/*<Progressing />*/}
                <NavigationContainer linking={linkNavigation.linking} ref={navigationRef}>
                    {/* Navigations */}
                    <MainStackNavigator />
                    {/* Global components */}
                    <Spinner />
                    <AppPopup />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
