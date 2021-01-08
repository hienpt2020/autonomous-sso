import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteName } from './routeName';

export type RouteProps = {
  name: RouteName;
  component: React.ComponentType<any>;
  initialParams?: object;
  key?: string | number;
  options?: StackNavigationOptions | BottomTabNavigationOptions;
};
