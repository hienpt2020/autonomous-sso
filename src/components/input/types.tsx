import { InputProps } from 'react-native-elements';

export interface Props extends InputProps {
    constainError?: boolean;
    onBlur?: () => void;
}
