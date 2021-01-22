import Device from '../../../models/Device';

export interface Props {
    cardData: Device;
    onPress: () => void;
    onPressUp: () => void;
    onPressDown: () => void;
}
