import { Preference } from 'src/common/preference';
import { Parser } from 'src/helpers/parser';
import { SSOApi } from 'src/services/networking';

async function retrieveUserProfile() {
    try {
        const response = await SSOApi.retrieveUserProfile();
        return {
            userProfile: Parser.parseUser(response.data),
            status: response.status,
        };
    } catch (error) {
        return error;
    }
}
async function retrieveUserWorkspace() {
    try {
        const response = await SSOApi.getCurrentWorkspace();
        return {
            userWorkspace: Parser.parseWorkspace(response.data),
            status: response.status,
        };
    } catch (error) {
        return error;
    }
}

async function requestLogin(user: string, password: string) {
    try {
        const response = await SSOApi.login(user, password);
        const { access_token } = response.data;
        if (access_token) {
            Preference.saveAccessToken(access_token);
        }
        return { response };
    } catch (error) {
        return { error };
    }
}

async function requestLogout() {
    try {
        const response = await SSOApi.logout();
        return { response };
    } catch (error) {
        return { error };
    }
}
async function requestRegister(
    email: string,
    password: string,
    confirmPassword: string,
    joinWorkSpaceToken: string | undefined,
) {
    try {
        const response = await SSOApi.register(email, password, confirmPassword, joinWorkSpaceToken);
        return { response };
    } catch (error) {
        return { error };
    }
}
export { requestLogin, retrieveUserProfile, requestLogout, requestRegister, retrieveUserWorkspace };
