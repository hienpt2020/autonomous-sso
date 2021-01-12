import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { Props } from './types';

const CardItem = (props: Props) => {
  const cardData = props.cardData;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.itemContainer}>
        <FastImage style={styles.coverImage} source={{ uri: cardData.image }} />
        <Text style={styles.itemTitle}>{cardData.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CardItem;
