import { RequestState } from './request/requestType';
import { UserState } from './user/userType';
export type { UserState }

export interface RootState {
  requestReducer: RequestState;
  userReducer: UserState;
}
