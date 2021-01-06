import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Props } from './types'
import { AppColor } from 'src/styles';
import Clock from 'src/assets/images/clock.svg'

const IconButton = (props: Props) => {
    const title = props.title

    return (
        <TouchableOpacity style={styles.container}>
            < Clock width="18" height="18"
                style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default IconButton;
