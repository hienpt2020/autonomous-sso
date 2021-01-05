import store from '../../redux/store';

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
