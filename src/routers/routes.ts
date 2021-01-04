import { RouteProps } from './routeProps';
import { RouteName } from './routeName';

export type RootStackParams = {
  [RouteName.LOGIN]: undefined;
  [RouteName.HOME]: { userId: string };
};
export type RootStackParamType = keyof RootStackParams;

export const publicRoutes: RouteProps[] = [
  {
    name: RouteName.INTRO,
    component: require('src/screens/intro').default,
    options: { headerShown: false  }
  },
  {
    name: RouteName.LOGIN,
    component: require('src/screens/login').default,
  },
];

export const authenticatedRoutes: RouteProps[] = [
  {
    name: RouteName.HOME,
    component: require('src/screens/home').default,
  },
];
