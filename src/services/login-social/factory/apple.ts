import { ISocialFactory } from './types';
import Config from 'react-native-config';
import { Helper } from './types';
import { Platform } from 'react-native';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { Log } from 'src/helpers/logger';

export class Apple implements ISocialFactory {
    configure() {}

    async login(): Promise<any> {
        try {
            if (Platform.OS === 'ios') {
                const appleAuthRequestResponse = await appleAuth.performRequest({
                    requestedOperation: appleAuth.Operation.LOGIN,
                    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
                });
                Log.debug('@appleAuthRequestResponseIOS', appleAuthRequestResponse);
                // return Promise.resolve(Helper.parseResponseAppleAuth(appleAuthRequestResponse));
                // const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
                // // use credentialState response to ensure the user is authenticated
                // if (credentialState === appleAuth.State.AUTHORIZED) {
                //     // user is authenticated
                //     return Promise.resolve(Helper.parseResponseAppleAuth(appleAuthRequestResponse));
                // }
            } else {
                appleAuthAndroid.configure({
                    clientId: Config.APPLE_SERVICE_ID,
                    redirectUri: Config.APPLE_REDIRECT_URI,
                    scope: appleAuthAndroid.Scope.ALL,
                    responseType: appleAuthAndroid.ResponseType.ALL,
                });
                const response = await appleAuthAndroid.signIn();
                Log.debug('@appleAuthAndroid:', response);
                if (response) {
                    // return Promise.resolve(Helper.parseResponseAppleAuthAndroid(response));
                }
            }
        } catch (error) {
            if (error && error.message) {
                switch (error.message) {
                    case appleAuthAndroid.Error.NOT_CONFIGURED:
                        Log.error('appleAuthAndroid not configured yet.');
                        break;
                    case appleAuthAndroid.Error.SIGNIN_FAILED:
                        Log.error('Apple signin failed.');
                        break;
                    case appleAuthAndroid.Error.SIGNIN_CANCELLED:
                        Log.error('User cancelled Apple signin.');
                        break;
                    default:
                        break;
                }
            }
            Log.error('User login with apple failed:', error);
            return Promise.reject(error);
        }
    }

    async logout() {}
}
