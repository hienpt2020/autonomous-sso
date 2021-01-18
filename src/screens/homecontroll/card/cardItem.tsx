import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { getImage } from 'src/helpers/imageHelper';
import { styles } from './styles';
import { Props } from './types';

const CardItem = (props: Props) => {
    const cardData = props.cardData;
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.itemContainer}>
                <FastImage
                    style={styles.coverImage}
                    source={{ uri: 'https://source.unsplash.com/wgivdx9dBdQ/1600x900' }}
                    resizeMode="cover"
                />
                <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
                    {cardData.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export default CardItem;
