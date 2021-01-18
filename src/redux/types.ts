import { AppState } from './app/appType';
import { BookingState } from './booking/bookingType';
import { RequestState } from './request/requestType';
import { UserState } from './user/userType';
import { WorkspaceState } from './workspace/workspaceType';
export type { UserState };

export interface BaseState {
    isLoading: boolean;
    error: string;
}

export interface RootState {
    appReducer: AppState;
    requestReducer: RequestState;
    userReducer: UserState;
    booking: BookingState;
    workspaceReducer: WorkspaceState;
}
