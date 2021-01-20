import { PropsBase } from 'src/types/propsBase';
import { RouteName } from 'src/routers/routeName';

export enum VerifyState {
    VERIFYING,
    VALID,
    INVALID,
}
export interface Props extends PropsBase<RouteName.INTRO> {}
