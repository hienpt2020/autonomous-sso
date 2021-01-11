export interface RequestState {
  isLoading: boolean;
  payload?: any
}

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_END = 'REQUEST_END';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
