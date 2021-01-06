import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { authenticatedRoutes, publicRoutes } from './routes';

export const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  const screenOptions = React.useMemo(
    () => ({
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }),
    [],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions} headerMode="none">
      {authenticatedRoutes.map((route) => (
        <Stack.Screen key={route.name} name={route.name} component={route.component} options={route.options} />
      ))}

      {publicRoutes.map((route) => (
        <Stack.Screen key={route.name} name={route.name} component={route.component} options={route.options} />
      ))}
    </Stack.Navigator>
  );
};
