import { ViewStyle } from 'react-native';
import { ButtonProps } from 'react-native-elements'
export interface AppButtonProps extends ButtonProps {
    wrapperContainer?: ViewStyle
}
export interface AppIconButtonProps extends AppButtonProps {
    icon: any //SVG
}