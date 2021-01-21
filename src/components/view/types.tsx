import { ViewProps } from 'react-native';

export interface AppViewProps extends ViewProps {
    children?: any;
    horizontal?: boolean;
    center?: boolean;
    spaceBetween?: boolean;
    justifyContentCenter?: boolean;
    justifyContentEnd?: boolean;
    alignItemsCenter?: boolean;
    alignItemsEnd?: boolean;
}
