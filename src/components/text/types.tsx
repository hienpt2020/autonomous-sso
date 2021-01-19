import { TextProps } from 'react-native-elements';
export interface AppTextProps extends TextProps {
    children?: string;
    left?: boolean;
    center?: boolean;
    right?: boolean;
    bold?: boolean;
    supperBold?: boolean;
    thin?: boolean;
    italic?: boolean;
    size?: number;
    color?: string;
    lineHeight?: number;
}
