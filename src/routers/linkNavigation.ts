
import { RouteName } from './routeName'
import { Loading } from 'src/components/loading'
const config = {
    screens: {
        [RouteName.DEEPLINK_REGISTER]: {
            path: 'account-activation/:token',
        }
    },
};
const linking = {
    prefixes: [
        'autonomous://'
    ],
    config: config
};

export const linkNavigation = { linking }