import * as React from 'react'
import { View } from 'react-native';
import { Input } from 'react-native-elements'
import { AppColor } from 'src/styles/colors'
import { styles } from './styles';
import { Props } from './types'

export const PrimaryInput = (props: Props) => {
    return (
        <View style={styles.wrapper}>
            <Input
                {...props}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                placeholderTextColor={AppColor.PRIMARY}
            />
        </View>
    )
}


