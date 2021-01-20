export interface PropHeader {
    title?: string;
    style?: object;
}

export interface PropsLargeHeader extends PropHeader {
    title?: string;
    subTitle?: string;
}

export interface PropsBackHeader extends PropHeader {
    onPress: () => void;
    style?: object;
    lightContent?: boolean;
}
