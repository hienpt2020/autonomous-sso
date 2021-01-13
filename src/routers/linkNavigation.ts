
import Config from 'react-native-config';
import { RouteName } from './routeName'
const config = {
    screens: {
        [RouteName.DEEPLINK_REGISTER]: {
            path: 'account-activation/:token',
        },
        [RouteName.RESET_PASSWORD]: {
            path: 'reset-password/:token',
        }
    },
};
const linking = {
    prefixes: [
        Config.DEEPLINK_AUTONOMOUS, 
        Config.LINK_UNIVERSAL_AUTONOMOUS,

    ],
    config: config
};

export const linkNavigation = { linking }