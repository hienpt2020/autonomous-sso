export interface TimeSelectProps {
    style?: object;
    isSelect?: boolean;
    from: Date;
    to: Date;
    onPressFrom?: () => void;
    onPressTo?: () => void;
}
