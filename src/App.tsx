import 'reflect-metadata';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { Spinner } from './components/spinner';
import store from './redux/store';
import { MainStackNavigator } from './routers/mainStack';
import { navigationRef } from './routers/rootNavigation';
import { Popup } from './components/popup';
import './config';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
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
