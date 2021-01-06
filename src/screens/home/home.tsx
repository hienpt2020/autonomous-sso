import React from 'react';
import { View, ViewProps } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RouteProps } from 'src/routers/routeProps';
import { RouteName } from 'src/routers/routeName';
import { styles } from './styles';

import Profile from 'src/assets/images/profile.svg';
import Office from 'src/assets/images/office.svg';
import Controll from 'src/assets/images/controll.svg';
import ProfileWhite from 'src/assets/images/profile_white.svg';
import OfficeWhite from 'src/assets/images/office_white.svg';
import ControllWhite from 'src/assets/images/controll_white.svg';

export const homeRoutes: RouteProps[] = [
  {
    name: RouteName.HOME_OFFICE,
    component: require('src/screens/homeoffice').default,
    options: {

    }
  },
  {
    name: RouteName.HOME_CONTROLL,
    component: require('src/screens/homecontroll').default,
  },
  {
    name: RouteName.HOME_PROFILE,
    component: require('src/screens/homeprofile').default,
  },

]


function renderTabBarIcon(routeName: String, focused: boolean) {
  let icon;
  if (routeName === RouteName.HOME_CONTROLL) {
    icon = focused ? <ControllWhite width="40" height="40" /> : <Controll width="40" height="40" />;
  } else if (routeName === RouteName.HOME_OFFICE) {
    icon = focused ? <OfficeWhite width="40" height="40" /> : <Office width="40" height="40" />;
  } else {
    icon = focused ? <ProfileWhite width="40" height="40" /> : <Profile width="40" height="40"/>;
  }

  const view = focused ? <View style={styles.iconContainer}>{icon}</View> : icon;
  return view;
}

const Home = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return renderTabBarIcon(route.name, focused);
        },
      })}
      tabBarOptions={{
        showLabel: false
      }}>
      {homeRoutes.map((route) => (
        <Tab.Screen key={route.name} name={route.name} component={route.component} options={route.options} />
      ))}
    </Tab.Navigator>
  );
};

export default Home