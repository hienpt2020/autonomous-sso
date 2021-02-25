import { Helper, ISocialFactory } from './types';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { Log } from 'src/helpers/logger';
export class Facebook implements ISocialFactory {
    configure() {}

    async login(): Promise<any> {
        try {
            LoginManager.logOut();
        } catch (e) {
            Log.debug('User log out failed', e);
        }

        return new Promise((resolve, reject) => {
            LoginManager.logInWithPermissions(['public_profile', 'email']).then(
                (result: any) => loginSuccess(result, resolve, reject),
                (error: any) => loginFailed(error, resolve, reject),
            );
        });
    }

    async logout() {}
}

async function loginSuccess(result: any, resolve: any, reject: any) {
    const { accessToken } = await AccessToken.getCurrentAccessToken();
    if (result.isCancelled) {
        reject('User cancelled for login facebook');
    }
    resolve(
        Helper.parseResponseFacebook({
            token: accessToken,
        }),
    );
}

function loginFailed(error: any, resolve: any, reject: any) {
    Log.debug('Login failed with error: ', error);
    reject(error);
}
