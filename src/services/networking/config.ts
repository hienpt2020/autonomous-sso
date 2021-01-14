import axios from 'axios';
function putCommonHeaderWithToken(token: string) {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else axios.defaults.headers.common['Authorization'] = '';
}
export const NetworkingConfig = { putCommonHeaderWithToken };
