export interface PropsHeader {
    title: string;
}
export interface PropsBackHeader extends PropsHeader {
    onPress: () => void;
    style?: object;
    lightContent?: boolean;
}
