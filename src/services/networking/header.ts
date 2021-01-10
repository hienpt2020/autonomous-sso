import store from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authHeader = () => {
  const headers = anonymousHeader();

  // const token = store && store.getState().user.token || '';
  const token = '';
  if (token) headers.Authorization = 'Bearer ' + token;

  return headers;
};

export const anonymousHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  };
};
export async function header() {
  const token = await AsyncStorage.getItem('USER_TOKEN')
  const headers = anonymousHeader();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers
}