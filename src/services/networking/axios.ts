import axios, { AxiosRequestConfig } from 'axios';
import { call } from 'redux-saga/effects';
import _ from 'lodash';
import { Log } from 'src/helpers/logger';

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
            return Promise.resolve(
                {
                    ...response.data,
                    status: response.status,
                } || {},
            );
        })
        .catch((error) => {
            let result = { data: { error: { message: 'Something went wrong' } } };
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                result = {
                    ...error.response.data,
                    status: error.response.status,
                };
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                result = { ...error.request };
            } else {
                // Something happened in setting up the request that triggered an Error
                result = { ...error };
            }

            const errorMessage = _.get(error, 'response.data.error.message');

            Log.error(errorMessage);

            return Promise.reject({
                ...result,
                errorMessage: errorMessage,
            });
        });
}

/**
 * usage: call this function to request api in generator functions
 */
export function* requestSaga(config: any, isDirectResult?: boolean) {
    return yield call(requestAxios, config, isDirectResult);
}

export function request(config: any, isDirectResult?: boolean) {
    return requestAxios(config, isDirectResult);
}
