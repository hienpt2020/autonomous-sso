import { Linking, Platform } from 'react-native';
import Config from 'react-native-config';

export const onUpdate = () => {
    if (Platform.OS === 'android') {
        Linking.canOpenURL(Config.LINK_GG_PLAY + Config.APP_ID)
            .then(() => {
                Linking.openURL(Config.LINK_GG_PLAY + Config.APP_ID);
            })
            .catch();
    } else if (Platform.OS === 'ios') {
        Linking.canOpenURL(Config.LINK_APP_STORE)
            .then(() => Linking.openURL(Config.LINK_APP_STORE))
            .catch();
    }
};
