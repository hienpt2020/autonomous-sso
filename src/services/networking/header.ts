import axios from 'axios'

export const authHeader = () => {
  const headers = anonymousHeader();
  return {
    ...axios.defaults.headers.common,
    ...headers,
  };
};

export const anonymousHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};
