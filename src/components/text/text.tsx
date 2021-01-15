import * as React from 'react';
import { Text } from 'react-native';
import { AppColor, AppFontSize } from 'src/styles';
import { AppTextProps } from './types';

const AppText: React.FC<AppTextProps> = ({
    children = '',
    style = {},
    center = false,
    right = false,
    bold = false,
    italic = false,
    size = AppFontSize.SIZE_14,
    color = AppColor.DARK_GREY_1,
}: AppTextProps) => {
    return (
        <Text
            style={[
                {
                    fontSize: size,
                    color: color,
                    textAlign: center ? 'center' : right ? 'right' : 'left',
                    fontWeight: bold ? '500' : '400',
                    fontStyle: italic ? 'italic' : 'normal',
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
};

export default AppText;
