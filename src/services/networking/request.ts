import { authHeader } from './header';
import { request } from './axios';

/**
 * @param url: string, required
 * @param params: string, optional
 */
export function _get(baseUrl: string, url: string, headers: object, params?: object) {
    const config = {
        baseURL: baseUrl,
        url,
        headers: headers,
        params: undefined,
    };
    if (params) {
        // @ts-ignore
        config.params = params;
    }
    return request(config);
}

/**
 * @param url: string, required
 * @param body: object, required
 * @param params: string, optional
 */
export function _post(baseURL: string, url: string, headers: object, body: object) {
    const config = {
        baseURL,
        url,
        headers,
        method: 'post',
        data: body,
    };
    return request(config);
}

/**
 * @param url: string, required
 * @param params: string, optional
 */
export function _delete(baseURL: string, url: string, headers: object, params?: object) {
    const config = {
        baseURL,
        url,
        headers,
        method: 'delete',
        params: params,
    };
    // @ts-ignore
    return request(config);
}

/**
 * @param url: string, required
 * @param body: object, required
 * @param headers: object, required
 * @param params: string, optional
 */
export function _put(baseUrl: string, url: string, headers: object, body: object, params?: object) {
    const config = {
        baseURL: baseUrl,
        url,
        headers,
        method: 'put',
        data: body,
    };
    // @ts-ignore
    return request(config);
}
