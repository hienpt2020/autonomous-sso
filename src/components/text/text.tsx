import * as React from 'react';
import { Text } from 'react-native';
import { AppColor, AppFontSize, AppFont } from 'src/styles';
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
    lineHeight,
}: AppTextProps) => {
    const lineHeightStyle = lineHeight ? { lineHeight: lineHeight } : {};
    return (
        <Text
            style={[
                {
                    fontSize: size,
                    color: color,
                    textAlign: center ? 'center' : right ? 'right' : 'left',
                    fontWeight: bold ? '500' : '400',
                    fontStyle: italic ? 'italic' : 'normal',
                    ...lineHeightStyle,
                    fontFamily: AppFont.REGULAR,
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
};

export default AppText;
