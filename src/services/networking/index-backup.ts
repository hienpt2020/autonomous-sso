import { authHeader } from './header';
import { requestSaga } from './axios';

/**
 * @param url: string, required
 * @param params: string, optional
 */
export function* apiGet(baseUrl: string, url: string, params?: object) {
  try {
    const config = {
      url,
      headers: authHeader(),
      baseURL: baseUrl,
      params: undefined,
    };
    if (params) {
      // @ts-ignore
      config.params = params;
    }
    return yield* requestSaga(config);
  } catch (error) {
    console.log('error', error);
  }
}

/**
 * @param url: string, required
 * @param params: string, optional
 */
export function* apiDelete(baseUrl: string, url: string, params?: object) {
  try {
    const config = {
      url,
      headers: authHeader(),
      method: 'delete',
      baseURL: baseUrl,
      params: params,
    };
    // @ts-ignore
    return yield* requestSaga(config);
  } catch (error) {
    console.log('error', error);
  }
}

/**
 * @param url: string, required
 * @param body: object, required
 * @param params: string, optional
 */
export function* apiPost(baseUrl: string, url: string, body: object, params?: object, headers?: object) {
  try {
    const config = {
      url,
      headers: { ...authHeader(), ...headers },
      method: 'post',
      baseURL: baseUrl,
      data: body,
      params: undefined,
    };
    if (params) {
      // @ts-ignore
      config.params = params;
    }
    return yield* requestSaga(config);
  } catch (error) {
    console.log('error', error);
  }
}

/**
 * @param url: string, required
 * @param body: object, required
 * @param params: string, optional
 * @param headers: object, optional
 */
export function* apiPut(baseUrl: string, url: string, body: object, params?: object, headers?: object) {
  try {
    const config = {
      url,
      headers: { ...authHeader(), ...headers },
      method: 'put',
      data: body,
      baseURL: baseUrl,
      params: undefined,
    };
    if (params) {
      // @ts-ignore
      config.params = params;
    }
    // @ts-ignore
    return yield* requestSaga(config);
  } catch (error) {
    console.log('error', error);
  }
}
