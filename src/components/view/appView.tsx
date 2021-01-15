import * as React from 'react';
import { View } from 'react-native';
import { AppViewProps } from './types';

const AppView: React.FC<AppViewProps> = ({
    children = [],
    style = {},
    center = false,
    alignItemsCenter = false,
    alignItemsEnd = false,
    horizontal = false,
    justifyContentCenter = false,
    justifyContentEnd = false,
}: AppViewProps) => {
    return (
        <View
            style={[
                {
                    flexDirection: horizontal ? 'row' : 'column',
                    alignItems: center || alignItemsCenter ? 'center' : alignItemsEnd ? 'flex-end' : 'flex-start',
                    justifyContent:
                        center || justifyContentCenter ? 'center' : justifyContentEnd ? 'flex-end' : 'flex-start',
                },
                style,
            ]}
        >
            {children}
        </View>
    );
};

export default AppView;
