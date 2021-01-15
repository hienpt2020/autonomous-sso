import { PropsBase } from 'src/types/propsBase';
import { RouteName } from 'src/routers/routeName';
import { BleModel } from 'src/services/bluetooth';
export interface Presenter {}

export type ICardData = BleModel.IDevice;
export interface CardDataProps {
    data: ICardData;
    onPress?: () => void;
    selectedId: string;
}

export interface IState {
    scanning: boolean;
    peripherals: any;
    appState: string;
    peripheral: string;
    selected: string;
}
// export interface Props extends PropsBase<RouteName.CONFIGURATION_STEP1> {}
