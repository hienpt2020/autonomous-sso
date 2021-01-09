import store from '../../redux/store';

export const authHeader = () => {
  const headers = anonymousHeader();

  // const token = store && store.getState().user.token || '';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MTI3Nzc0MDMsImlkIjozMjgwNDN9.STLyX2MH7lFgveMYFIQBThWMI7gbZ7lWDfxkc7nK-FE';
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }

  return headers;
};

export const anonymousHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  };
};
