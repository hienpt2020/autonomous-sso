import { Linking } from 'react-native';
import { AppState } from 'src/redux/app/appType';
import { Log } from './logger';

async function open(url: string) {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    Log.debug(`URL: ${URL}`);
    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    } else {
        throw `Don't know how to open this URL: ${url}`;
    }
}

function validateInitialLink(_useEffect: any, appReducer?: AppState): void {
    _useEffect(() => {
        async function checkInitialURL() {
            const url = await Linking.getInitialURL();
            const isInited = appReducer?.initial;
            Log.debug('check initial url ', url, isInited);
            if (url != null && isInited) {
                Log.debug('check initial url ', url, isInited);
                //This mean app open from deeplink
                const supported = Linking.canOpenURL(url);
                if (supported) {
                    Log.debug(`Open ${url} now`);
                    Linking.openURL(url);
                }
            }
        }
        checkInitialURL();
    }, [appReducer?.initial]);
}

export const LinkingHelper = { open, validateInitialLink };
