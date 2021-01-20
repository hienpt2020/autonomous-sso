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
                <FastImage style={styles.coverImage} source={{ uri: cardData.image }} resizeMode="cover" />
                <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
                    <Text style={styles.label}>Device ID:</Text> {cardData.hubId}
                </Text>
                <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
                    <Text style={styles.label}>Booked by:</Text>{' '}
                    {cardData.bookedBy.slice(0, cardData.bookedBy.indexOf('@'))}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export default CardItem;
