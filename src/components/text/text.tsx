import * as React from 'react';
import { Text } from 'react-native';
import { AppColor, AppFontSize, AppFont } from 'src/styles';
import { AppTextProps } from './types';

const AppText: React.FC<AppTextProps> = (props: AppTextProps) => {
    const {
        children = '',
        style = {},
        center = false,
        right = false,
        bold = false,
        supperBold = false,
        italic = false,
        size = AppFontSize.SIZE_14,
        color = AppColor.DARK_GREY_1,
        lineHeight,
    } = props;
    const lineHeightStyle = lineHeight ? { lineHeight: lineHeight } : {};
    return (
        <Text
            {...props}
            style={[
                {
                    fontSize: size,
                    color: color,
                    textAlign: center ? 'center' : right ? 'right' : 'left',
                    fontWeight: supperBold ? '700' : bold ? '500' : '400',
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
