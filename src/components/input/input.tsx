import * as React from 'react';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Visible from 'src/assets/images/eye_regular.svg';
import Invisible from 'src/assets/images/eye_slash_regular.svg';
import { AppColor } from 'src/styles/colors';
import { styles } from './styles';
import { Props } from './types';

export const PrimaryInput = (props: Props) => {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <TextInput
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[styles.input, props.style, { borderColor: props.renderErrorMessage ? AppColor.RED_7 : isFocus ? AppColor.BLUE_2 : AppColor.GREY_2 }]}
            placeholderTextColor={AppColor.LIGHT_9C}
        />
    )
    function handleFocus() {
        setIsFocus(true)
    }
    function handleBlur() {
        setIsFocus(false)
    }
}
export const PasswordInput = (props: Props) => {
    const [isFocus, setIsFocus] = useState(false)
    const [isVisibilityPassword, setIsVisibilityPassword] = useState(true)
    return (
        <View>
            <TextInput
                {...props}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={[styles.input, props.style, { borderColor: props.renderErrorMessage ? AppColor.RED_7 : isFocus ? AppColor.BLUE_2 : AppColor.GREY_2 }]}
                secureTextEntry={isVisibilityPassword}
                placeholderTextColor={AppColor.LIGHT_9C}
            />
            <TouchableOpacity style={styles.visibleContainer} onPress={togglePasswordVisible}>
                {
                    isVisibilityPassword ?
                        <Invisible width={20} height={16} />
                        :
                        <Visible width={20} height={17.78} />
                }
            </TouchableOpacity>
        </View>
    )
    function togglePasswordVisible() {
        setIsVisibilityPassword(!isVisibilityPassword)
    }
    function handleFocus() {
        setIsFocus(true)
    }
    function handleBlur() {
        setIsFocus(false)
    }
}


