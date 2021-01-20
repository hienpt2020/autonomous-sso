import { PropsBase } from 'src/types/propsBase';
import { RouteName } from 'src/routers/routeName';

export interface Props extends PropsBase<RouteName.REGISTER> {
    token: string;
}
