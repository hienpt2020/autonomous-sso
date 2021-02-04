import { GoogleSignin } from '@react-native-community/google-signin';
import { ISocialFactory } from './types';
import Config from 'react-native-config';
import { Helper } from './types';

export class Google implements ISocialFactory {
    configure() {
        GoogleSignin.configure({
            webClientId: Config.WEB_CLIENT_ID,
            offlineAccess: false,
        });
    }

    async login(): Promise<any> {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signOut();
            const response = await GoogleSignin.signIn();
            return Promise.resolve(Helper.parseResponseGoogle(response));
        } catch (e) {
            return Promise.reject(e);
        }
    }

    async logout() {}
}
