import axios, { AxiosRequestConfig } from 'axios';
import { call } from 'redux-saga/effects';

/**
 * config axios and api url
 * other api configs must be setup here
 */
axios.defaults.timeout = 20000;

/**
 * usage: call this function to request api in non-generator functions
 * @param: config: {url, headers, method, data}
 * url: string
 * headers: object
 * method: default is 'get'
 * data: object (body to be submitted)
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function request(config: AxiosRequestConfig, directResult = false) {
  return await axios(config)
    .then((response) => {
      return Promise.resolve(response.data || {});
    })
    .catch((error) => {
      console.log('@Error request from axios:', error);
      return Promise.reject(error)
    });
}

/**
 * usage: call this function to request api in generator functions
 */
export function* requestSaga(config: any, isDirectResult?: boolean) {
  return yield call(request, config, isDirectResult);
}
