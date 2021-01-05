import { InputProps } from 'react-native-elements'

export interface AppInputProps extends InputProps { 
    title: string, 
    onPress?: ()=>void
}