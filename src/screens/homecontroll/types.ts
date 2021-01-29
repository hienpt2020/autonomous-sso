import { PropsBase } from 'src/types/propsBase';
import { RouteName } from 'src/routers/routeName';
import Device from 'src/models/Device';
export interface CardData {
    title: string;
    data: Device;
}
export interface Props extends PropsBase<RouteName.HOME_CONTROLL> {}
