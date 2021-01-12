import { RouteProps } from './routeProps';
import { RouteName } from './routeName';

export type RootStackParams = {
  [RouteName.INTRO]: undefined;
  [RouteName.FORGOT_PASSWORD]: undefined;
  [RouteName.RESET_PASSWORD]: undefined;
  [RouteName.LOGIN]: undefined;
  [RouteName.REGISTER]: undefined;
  [RouteName.JOINING]: { workspace: string };
  [RouteName.HOME]: undefined;
  [RouteName.MAP]: { floorId: number; floorName: string };
  [RouteName.SEAT]: undefined;
  [RouteName.BOOKING_RESULT]: undefined;
  [RouteName.SEAT_ADMIN]: undefined;
  [RouteName.CONFIGURATION_STEP1]: undefined;
  [RouteName.CONFIGURATION_STEP2]: undefined;
  [RouteName.CONFIGURATION_RESULT]: undefined;
  [RouteName.MY_BOOKING]: undefined;
  [RouteName.BOOKING_DETAIL]: undefined;
  [RouteName.SWITCH_WORKSPACE]: undefined;
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
    name: RouteName.HOME,
    component: require('src/screens/home').default,
  },
  {
    name: RouteName.BOOKING_RESULT,
    component: require('src/screens/booking-result').default,
  },
  {
    name: RouteName.CONFIGURATION_RESULT,
    component: require('src/screens/configuration-result').default,
  },
  {
    name: RouteName.SWITCH_WORKSPACE,
    component: require('src/screens/switchws').default,
  },
  {
    name: RouteName.BOOKING_DETAIL,
    component: require('src/screens/bookingdetail').default,
  },
  {
    name: RouteName.MY_BOOKING,
    component: require('src/screens/booking').default,
  },
  {
    name: RouteName.CONFIGURATION_STEP2,
    component: require('src/screens/configuration2').default,
  },
  {
    name: RouteName.CONFIGURATION_STEP1,
    component: require('src/screens/configuration1').default,
  },
  {
    name: RouteName.SEAT,
    component: require('src/screens/seat').default,
  },
  {
    name: RouteName.MAP,
    component: require('src/screens/map').default,
  },
];
