import Config from 'react-native-config';
import reactotron from 'src/config/configReactoron';
import { authHeader } from '../header';
import { _delete as __delete, _get as __get, _post as __post, _put as __put } from '../request';

/**
 * @param url: string, required
 * @param params: string, optional
 */
const baseURL = Config.ENDPOINT_SSO;
function _get(url: string, params?: object) {
    return __get(baseURL, url, authHeader(), params);
}
function _post(url: string, body?: object) {
    return __post(baseURL, url, authHeader(), body ? body : {});
}
function _delete(url: string, params?: object) {
    return __delete(baseURL, url, authHeader(), params);
}
function _put(url: string, body: object, params?: object) {
    return __put(baseURL, url, authHeader(), body, params);
}
// const CLIENT_ID = 'vflozjmgtirdrppu';
const CLIENT_ID = 'cddwpvvqreoopgbs'; // use for 3 environments
/**List all API below */
function login(email: string, password: string) {
    return _post('/auth/login', { email, password, CLIENT_ID });
}
function logout() {
    return _get('/auth/logout');
}
function validateToken(token: string) {
    return _post('/auth/introspect', { token, CLIENT_ID });
}
function isActivated(token: string) {
    return _post('/auth/introspect', { token, CLIENT_ID });
}
function retrieveUserProfile() {
    return _get('/me/profile');
}
function activeAccount(token: string) {
    return _post('/auth/activate', { token });
}

function getCurrentWorkspace() {
    return _get('/me/current_workspace');
}
function setCurrentWorkspace(workspaceId: number) {
    return _post('/me/current_workspace', { workspace_id: workspaceId });
}

function getMyWorkspaces() {
    return _get('workspaces');
}

function forgotPassword(email: string) {
    return _post('/auth/forgot-password', { email });
}

function resetPassword(token: string, password: string) {
    return _post('/auth/reset-forgot-password', { token, password });
}

function changePassword(password: string, newPassword: string) {
    return _post('/me/change-password', { password: password, new_password: newPassword });
}

function register(email: string, password: string, confirmPassword: string, joinWorkSpaceToken: string | undefined) {
    let registerPath = '';

    if (joinWorkSpaceToken) {
        registerPath = '/auth/register?workspace_join_token=' + joinWorkSpaceToken;
    } else {
        registerPath = '/auth/register';
    }
    return _post(registerPath, {
        email,
        password,
        confirm_password: confirmPassword,
    });
}

function updateUserProfile(fullName: string, phone: string) {
    return _put('/me/profile', { full_name: fullName, phone });
}

function checkExistingEmailByToken(token: string) {
    return _post('/workspaces/existing_email_by_token', { token });
}

function joinWorkSpace(token: string) {
    return _post('/workspaces/join', { token });
}
function loginSocial(accessToken: string, customerSource: string = '', source: number = -1, platform: string) {
    return _post('/auth/social-login', {
        access_token: accessToken,
        client_id: CLIENT_ID,
        customer_source: customerSource,
        source,
        platform,
    });
}

export const SSOApi = {
    forgotPassword,
    login,
    logout,
    validateToken,
    retrieveUserProfile,
    activeAccount,
    register,
    getCurrentWorkspace,
    setCurrentWorkspace,
    resetPassword,
    getMyWorkspaces,
    changePassword,
    updateUserProfile,
    checkExistingEmailByToken,
    joinWorkSpace,
    loginSocial,
};


