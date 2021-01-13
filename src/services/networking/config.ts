import axios from 'axios';
function putCommonHeaderWithToken(token: string) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export const NetworkingConfig = { putCommonHeaderWithToken }