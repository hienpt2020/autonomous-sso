import { Linking } from 'react-native';
import { Log } from './logger';

async function open(url: string) {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    Log.debug(`URL: ${URL}`)
    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    } else {
        throw `Don't know how to open this URL: ${url}`;
    }
}
export const LinkingHelper = { open };
