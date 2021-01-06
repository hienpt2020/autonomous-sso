import * as React from 'react'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { styles } from './styles'
import { Props } from './types'

const CardItem = (props: Props) => {
    const cardData = props.cardData

    return (
        <View style={styles.itemContainer} >
            <FastImage
                style={styles.coverImage}
                source={{ uri: "https://source.unsplash.com/wgivdx9dBdQ/360x180" }}
            />
            <Text style={styles.itemTitle}>{cardData.name}</Text>
        </View>
    )
}
export default CardItem;
