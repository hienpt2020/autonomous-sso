import { RouteProps } from './routeProps';
import { RouteName } from './routeName';

export type RootStackParams = {
  [RouteName.INTRO]: undefined;
  [RouteName.LOGIN]: undefined;
  [RouteName.REGISTER]: undefined;
  [RouteName.HOME]: { userId: string };
};
export type RootStackParamType = keyof RootStackParams;

export const publicRoutes: RouteProps[] = [

  {
    name: RouteName.INTRO,
    component: require('src/screens/intro').default,
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
    name: RouteName.HOME,
    component: require('src/screens/home').default,
  },
];
