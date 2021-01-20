import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import reactotron from 'src/config/configReactoron';
import { getImage } from 'src/helpers/imageHelper';
import { styles } from './styles';
import { Props } from './types';
const CardItem = (props: Props) => {
    const cardData = props.cardData;

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.itemContainer}>
                <FastImage style={styles.coverImage} source={getImage(cardData.image)} />
                <FastImage style={styles.coverImage} source={require('src/assets/images/image-hover-background.png')} />
                <Text style={styles.itemSubTitle}>{cardData.address}</Text>
                <Text style={styles.itemTitle}>{cardData.name}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default CardItem;
