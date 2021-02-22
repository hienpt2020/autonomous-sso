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
                Log.debug('@appleAuthRequestResponse', appleAuthRequestResponse);
                const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
                // use credentialState response to ensure the user is authenticated
                if (credentialState === appleAuth.State.AUTHORIZED) {
                    // user is authenticated
                    return Promise.resolve(Helper.parseResponseApple(appleAuthRequestResponse));
                }
            } else {
                appleAuthAndroid.configure({
                    // The Service ID you registered with Apple
                    clientId: 'ai.autonomous.megapp.staging',

                    // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
                    // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
                    redirectUri: 'https://google.com',
                    scope: appleAuthAndroid.Scope.ALL,
                    responseType: appleAuthAndroid.ResponseType.ALL,
                });
                const response = await appleAuthAndroid.signIn();
                if (response) {
                    const code = response.code; // Present if selected ResponseType.ALL / ResponseType.CODE
                    const id_token = response.id_token; // Present if selected ResponseType.ALL / ResponseType.ID_TOKEN
                    const user = response.user; // Present when user first logs in using appleId
                    const state = response.state; // A copy of the state value that was passed to the initial request.
                    console.log('Got auth code', code);
                    console.log('Got id_token', id_token);
                    console.log('Got user', user);
                    console.log('Got state', state);
                }
            }
        } catch (error) {
            if (error && error.message) {
                switch (error.message) {
                    case appleAuthAndroid.Error.NOT_CONFIGURED:
                        console.log('appleAuthAndroid not configured yet.');
                        break;
                    case appleAuthAndroid.Error.SIGNIN_FAILED:
                        console.log('Apple signin failed.');
                        break;
                    case appleAuthAndroid.Error.SIGNIN_CANCELLED:
                        console.log('User cancelled Apple signin.');
                        break;
                    default:
                        break;
                }
            }
            return Promise.reject(error);
        }
    }

    async logout() {}
}
