import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const IcSignal = ({
    width = 24,
    height = 24,
    activeColor = '#1174DC',
    inactiveColor = '#DDDDDD',
    isActiveSignal1 = false,
    isActiveSignal2 = false,
    isActiveSignal3 = false,
}) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
            d="M16.7 5H18.8C19.15 5 19.5 5.35 19.5 5.7V18.3C19.5 18.6937 19.15 19 18.8 19H16.7C16.3063 19 16 18.6937 16 18.3V5.7C16 5.35 16.3063 5 16.7 5Z"
            fill={isActiveSignal3 ? activeColor : inactiveColor}
        />
        <Path
            d="M11.3001 9.2002H13.4001C13.7501 9.2002 14.1001 9.5502 14.1001 9.9002V18.3002C14.1001 18.6939 13.7501 19.0002 13.4001 19.0002H11.3001C10.9063 19.0002 10.6001 18.6939 10.6001 18.3002V9.9002C10.6001 9.5502 10.9063 9.2002 11.3001 9.2002Z"
            fill={isActiveSignal2 ? activeColor : inactiveColor}
        />
        <Path
            d="M5.7 13.4004H7.8C8.15 13.4004 8.5 13.7504 8.5 14.1004V18.3004C8.5 18.6941 8.15 19.0004 7.8 19.0004H5.7C5.30625 19.0004 5 18.6941 5 18.3004V14.1004C5 13.7504 5.30625 13.4004 5.7 13.4004Z"
            fill={isActiveSignal1 ? activeColor : inactiveColor}
        />
    </Svg>
);
