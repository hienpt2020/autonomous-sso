import Config from 'react-native-config';
import { RouteName } from './routeName';
import { LinkingHelper } from 'src/helpers/linkingHelper';

const config = {
    screens: {
        [RouteName.REGISTER]: {
            path: 'account-activation/:token',
        },
        [RouteName.RESET_PASSWORD]: {
            path: 'reset-password/:token',
        },
        [RouteName.DEEPLINK_WORKSPACE_INVITATION]: {
            path: 'workspace-invitation/:token',
        },
    },
};
const linking = {
    prefixes: [Config.DEEPLINK_AUTONOMOUS, Config.LINK_UNIVERSAL_AUTONOMOUS],

    async getInitialURL() {
        return null; //Alway return null & handle in @LinkingHelper.validateInitialLink handle
    },
    config: config,
};

const validateInitialLink = LinkingHelper.validateInitialLink;
export const linkNavigation = { linking, validateInitialLink };
