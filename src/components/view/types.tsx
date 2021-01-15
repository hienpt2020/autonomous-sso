import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export interface AppViewProps extends ViewProps {
    children?: ReactElement | ReactElement[];
    horizontal?: boolean;
    center?: boolean;
    justifyContentCenter?: boolean;
    justifyContentEnd?: boolean;
    alignItemsCenter?: boolean;
    alignItemsEnd?: boolean;
}
