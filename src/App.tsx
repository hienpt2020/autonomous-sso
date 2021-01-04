import 'reflect-metadata';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { Spinner } from './components/spinner';
import store from './redux/store';
import { MainStackNavigator } from './routers/mainStack';
import { navigationRef } from './routers/rootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        {/* Navigations */}
        <MainStackNavigator />

        {/* Global components */}
        <Spinner />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
