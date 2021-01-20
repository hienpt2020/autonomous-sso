import { RouteProps } from './routeProps';
import { RouteName } from './routeName';
import { BookingHistory } from 'src/models/BookingHistory';
import WorkPlace from 'src/models/WorkPlace';
import WorkLayout from 'src/models/WorkLayout';

export type RootStackParams = {
    [RouteName.INTRO]: undefined;
    [RouteName.FORGOT_PASSWORD]: undefined;
    [RouteName.RESET_PASSWORD]: undefined;
    [RouteName.LOGIN]: undefined;
    [RouteName.REGISTER]: undefined;
    [RouteName.JOINING]: { workspace: string };
    [RouteName.HOME]: undefined;
    [RouteName.MAP]: { map: WorkLayout };
    [RouteName.BOOKING_RESULT]: { booking?: BookingHistory; error?: string };
    [RouteName.SEAT_ADMIN]: undefined;
    [RouteName.CONFIGURATION_STEP1]: undefined;
    [RouteName.CONFIGURATION_STEP2]: undefined;
    [RouteName.CONFIGURATION_RESULT]: undefined;
    [RouteName.BOOKING_HISTORY]: { isUpcoming: boolean };
    [RouteName.PLACE_DETAIL]: { booking?: BookingHistory; place?: WorkPlace };
    [RouteName.SWITCH_WORKSPACE]: undefined;
    [RouteName.DEEPLINK_REGISTER]: undefined;
    [RouteName.DEEPLINK_REGISTER]: undefined;
    [RouteName.ACTIVITIES]: undefined;
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
        component: require('src/screens/reset-password').default,
    },
    {
        name: RouteName.FORGOT_PASSWORD,
        component: require('src/screens/forgot-password').default,
    },
    {
        name: RouteName.LOGIN,
        component: require('src/screens/login').default,
    },
    {
        name: RouteName.REGISTER,
        component: require('src/screens/register').default,
    },
    {
        name: RouteName.DEEPLINK_REGISTER,
        component: require('src/screens/redirect-register').default,
    },
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
        component: require('src/screens/switch-workspace').default,
    },
    {
        name: RouteName.PLACE_DETAIL,
        component: require('src/screens/place').default,
    },
    {
        name: RouteName.BOOKING_HISTORY,
        component: require('src/screens/booking-history').default,
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
        name: RouteName.MAP,
        component: require('src/screens/map').default,
    },
    {
        name: RouteName.ACTIVITIES,
        component: require('src/screens/activities').default,
    },
];
