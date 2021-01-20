import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParams, RootStackParamType } from 'src/routers/routes';

export interface PropsBase<T extends RootStackParamType> {
    navigation: StackNavigationProp<RootStackParams, T>;
    route: RouteProp<RootStackParams, T>;
}
