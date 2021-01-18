export interface Device {
    image: string;
    name: string;
}
export interface Props {
    cardData: Device;
    onPress?: () => void;
}
