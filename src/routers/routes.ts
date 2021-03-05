import { RouteProps } from './routeProps';
import { RouteName } from './routeName';

export type RootStackParams = {
    [RouteName.LOGIN]: { email?: string };
    [RouteName.FORGOT_PASSWORD]: undefined;
    [RouteName.RESET_PASSWORD]: undefined;
    [RouteName.REGISTER]: { token?: string; email?: string };
    [RouteName.JOINING]: { token: string; access_token?: string };
    [RouteName.HOME]: undefined;
    [RouteName.SWITCH_WORKSPACE]: undefined;
    [RouteName.DEEPLINK_REGISTER]: undefined;
    [RouteName.NEW_PASSWORD]: undefined;
    [RouteName.UPDATE_PROFILE]: undefined;
    [RouteName.DEEPLINK_WORKSPACE_INVITATION]: { token: string };
};
export type RootStackParamType = keyof RootStackParams;

export const publicRoutes: RouteProps[] = [
    {
        name: RouteName.LOGIN,
        component: require('src/screens/login').default,
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
        name: RouteName.REGISTER,
        component: require('src/screens/register').default,
    },
    {
        name: RouteName.DEEPLINK_REGISTER,
        component: require('src/screens/redirect-register').default,
    },
    {
        name: RouteName.DEEPLINK_WORKSPACE_INVITATION,
        component: require('src/screens/redirect-workspace-invitation').default,
    },
];

export const authenticatedRoutes: RouteProps[] = [
    {
        name: RouteName.HOME,
        component: require('src/screens/home').default,
    },
    {
        name: RouteName.SWITCH_WORKSPACE,
        component: require('src/screens/switch-workspace').default,
    },
    {
        name: RouteName.NEW_PASSWORD,
        component: require('src/screens/new-password').default,
    },
    {
        name: RouteName.UPDATE_PROFILE,
        component: require('src/screens/update-profile').default,
    },
    {
        name: RouteName.DEEPLINK_WORKSPACE_INVITATION,
        component: require('src/screens/redirect-workspace-invitation').default,
    },
    {
        name: RouteName.JOINING,
        component: require('src/screens/joining').default,
    },
];
