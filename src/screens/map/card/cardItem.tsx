import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { getImage } from 'src/helpers/imageHelper';
import { styles } from './styles';
import { Props } from './types';
import Icon from 'src/assets/images/empty.svg';
import reactotron from 'src/config/configReactoron';

const CardItem = (props: Props) => {
  const cardData = props.cardData;

  reactotron.log(cardData);
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.itemContainer}>
        <FastImage style={styles.coverImage} source={getImage(cardData.thumbImageUrl)} resizeMode="cover" />
        <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
          {cardData.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CardItem;
