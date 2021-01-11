import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import 'reflect-metadata';
import { Popup } from './components/popup';
import { Spinner } from './components/spinner';
import './config';
import store from './redux/store';
import { MainStackNavigator } from './routers/mainStack';
import { navigationRef } from './routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';

const App = () => {

  const config = {
    screens: {
      REGISTER: '/#/auth/activate-account/',
    },
  };
  const linking = {
    prefixes: [
      'https://ssso.autonomous.ai'
    ],
    config: config
  };
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} linking={linking} fallback={<Text>Loading...</Text>}>
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
