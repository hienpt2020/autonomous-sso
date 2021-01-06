import { RouteProps } from './routeProps';
import { RouteName } from './routeName';

export type RootStackParams = {
  [RouteName.INTRO]: undefined;
  [RouteName.FORGOT_PASSWORD]: undefined;
  [RouteName.RESET_PASSWORD]: undefined;
  [RouteName.LOGIN]: undefined;
  [RouteName.REGISTER]: undefined;
  [RouteName.JOINING]: { workspace: string };
  [RouteName.HOME]: { userId: string };
  [RouteName.HOME_OFFICE]: {};
  [RouteName.HOME_PROFILE]: {};
  [RouteName.HOME_CONTROLL]: {};
};
export type RootStackParamType = keyof RootStackParams;

export const publicRoutes: RouteProps[] = [

  {
    name: RouteName.INTRO,
    component: require('src/screens/intro').default,
  },
  {
    name: RouteName.JOINING,
    component: require('src/screens/joining').default,
  },
  {
    name: RouteName.RESET_PASSWORD,
    component: require('src/screens/resetpass').default,
  },
  {
    name: RouteName.FORGOT_PASSWORD,
    component: require('src/screens/forgotpass').default,
  },
  {
    name: RouteName.LOGIN,
    component: require('src/screens/login').default,
  },
  {
    name: RouteName.REGISTER,
    component: require('src/screens/register').default,
  }
];

export const authenticatedRoutes: RouteProps[] = [
  {
    name: RouteName.HOME_PROFILE,
    component: require('src/screens/homeprofile').default,
  },
  {
    name: RouteName.HOME_CONTROLL,
    component: require('src/screens/homecontroll').default,
  },
  {
    name: RouteName.HOME_OFFICE,
    component: require('src/screens/homeoffice').default,
  },
  {
    name: RouteName.HOME,
    component: require('src/screens/home').default,
  },

];
