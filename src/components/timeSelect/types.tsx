export interface TimeSelectProps {
    style?: object;
    isSelect?: boolean;
    title?: string;
    from: Date;
    to: Date;
    onPressFrom?: () => void;
    onPressTo?: () => void;
}
