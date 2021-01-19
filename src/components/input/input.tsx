import * as React from 'react'
import { TextInput, View } from 'react-native';
import { AppColor } from 'src/styles/colors'
import { styles } from './styles';
import { Props } from './types'

export const PrimaryInput = (props: Props) => {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.style]}
            placeholderTextColor={AppColor.PRIMARY}
        />
    )
}


