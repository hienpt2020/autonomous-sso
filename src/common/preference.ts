import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_ACCESS_TOKEN = 'KEY_ACCESS_TOKEN';
function saveAccessToken(token: string): Promise<void> {
    return AsyncStorage.setItem(KEY_ACCESS_TOKEN, token);
}
function retrieveAccessToken(): Promise<string | null> {
    return AsyncStorage.getItem(KEY_ACCESS_TOKEN);
}
export const Preference = { saveAccessToken, retrieveAccessToken };
