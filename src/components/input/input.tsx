import * as React from 'react'
import { useState } from 'react'
import { TextInput, View } from 'react-native';
import { AppColor } from 'src/styles/colors'
import { styles } from './styles';
import { Props } from './types'

export const PrimaryInput = (props: Props) => {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <TextInput
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[styles.input, props.style, { borderColor: props.renderErrorMessage ? AppColor.RED_7 : isFocus ? AppColor.BLUE_2 : AppColor.GREY_2 }]}
            placeholderTextColor={AppColor.PRIMARY}
        />
    )
    function handleFocus() {
        setIsFocus(true)
    }
    function handleBlur() {
        setIsFocus(false)
    }
}


