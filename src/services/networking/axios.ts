import axios, { AxiosRequestConfig } from 'axios';
import { call } from 'redux-saga/effects';
import { container } from "src/di/container";
import { TYPES } from 'src/di/types';

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
async function requestAxios(config: AxiosRequestConfig, directResult = false) {
  return await axios(config)
    .then((response) => {
      console.info(
        config.baseURL,
        config.url,
        config.headers,
        "\n***RESPONSE***\n",
        response
      )
      return Promise.resolve({
        ...response.data,  
        status: response.status
      }|| {});
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);


      return Promise.reject({
        data: error.response.data,
        status: error.response.status,
      })
    });
}

/**
 * usage: call this function to request api in generator functions
 */
export function* requestSaga(config: any, isDirectResult?: boolean) {
  return yield call(requestAxios, config, isDirectResult);
}

export function request(config: any, isDirectResult?: boolean) {
  return requestAxios(config, isDirectResult)
}

