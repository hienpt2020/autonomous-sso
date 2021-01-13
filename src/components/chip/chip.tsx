import * as React from 'react';
import { View, Dimensions, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types';
const imageWidth = Dimensions.get('window').width;
export const Chip = (props: Props) => {
  const FIXED_ITEM_HEIGHT = 40;

  const renderItem = (data: string) => {
    return (
      <View style={styles.chipContainer}>
        <Text style={[styles.chipContent]}>{data}</Text>
      </View>
    );
  };

  const getItemLayout = (data: any, index: any) => {
    return {
      length: FIXED_ITEM_HEIGHT,
      offset: FIXED_ITEM_HEIGHT * index,
      index,
    };
  };

  return (
    <FlatList
      data={props.data}
      style={[styles.list, props.containerStyle]}
      showsHorizontalScrollIndicator={false}
      numColumns={3}
      keyExtractor={(item, index) => `${item}${index}`}
      renderItem={({ item, index }) => renderItem(item)}
      getItemLayout={(data, index) => getItemLayout(data, index)}
    />
  );
};
