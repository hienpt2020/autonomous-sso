
const NEGATIVE = 'negative';
const POSITIVE = 'positive';
export interface PopupButton {
    title: string;
    style?: typeof NEGATIVE | typeof POSITIVE;
    onPress?: () => void;
}
export interface PopupState {
    visible: boolean;
    title: string;
    message: string;
    icon: any;
    buttons: PopupButton[];
}

export interface Props {}
