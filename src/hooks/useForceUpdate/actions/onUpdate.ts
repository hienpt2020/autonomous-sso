import { Linking, Platform } from 'react-native';

export const onUpdate = (url: string) => {
    if (Platform.OS === 'android') {
        Linking.canOpenURL(url)
            .then(() => {
                Linking.openURL(url);
            })
            .catch();
    } else if (Platform.OS === 'ios') {
        Linking.canOpenURL(url)
            .then(() => Linking.openURL(url))
            .catch();
    }
};
