export interface PropsLargeHeader {
    style?: object;
    title: string;
    subTitle: string;
}

export interface PropHeader {
    title: string;
}

export interface PropsBackHeader extends PropsLargeHeader {
    onPress: () => void;
    style?: object;
    lightContent?: boolean;
}
