import { InputProps } from 'react-native-elements';

export interface Props extends InputProps {
    title: string;
    size?: number;
    onPress?: () => void;
}
