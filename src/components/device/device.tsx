import * as React from 'react';
import { View, Dimensions, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types';
import BluetoothWhite from 'src/assets/images/bluetooth_white.svg';
import Bolt from 'src/assets/images/bolt.svg';
import BoltWhite from 'src/assets/images/bolt_white.svg';
import Asset from 'src/models/Asset';
import reactotron from 'src/config/configReactoron';

const imageWidth = Dimensions.get('window').width;
export const Device = (props: Props) => {
  const NUM_COLUMNS = 2;
  const FIXED_ITEM_HEIGHT = 40;

  const renderItem = (data: Asset) => {
    return (
      <View style={styles.chipContainer}>
        {/* <Bolt width="24" height="24" style={styles.chipIcon} /> */}
        <Text style={styles.chipContent} numberOfLines={1}>
          {data.name}
        </Text>
      </View>
    );
  };

  const renderMutableItem = (data: Asset) => {
    return (
      <View style={styles.chipMutableContainer}>
        {/* <Bolt width="24" height="24" style={styles.chipIcon} /> */}
        <View style={{ width: 24 }} />
        <Text style={styles.chipMutableContent} numberOfLines={1}>
          {data.name}
        </Text>
        <View style={{ width: 24 }}>
          <BluetoothWhite width="16" height="16" style={styles.chipMutableIcon} />
        </View>
      </View>
    );
  };

  const getItemLayout = (index: any) => {
    return {
      length: FIXED_ITEM_HEIGHT,
      offset: FIXED_ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
      index,
    };
  };

  return (
    <FlatList
      data={props.data}
      style={[styles.list, props.containerStyle]}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      numColumns={NUM_COLUMNS}
      keyExtractor={(item, index) => `${item}${index}`}
      renderItem={({ item, index }) => {
        return item.isSmartDevice ? renderMutableItem(item) : renderItem(item);
      }}
      getItemLayout={(data, index) => getItemLayout(index)}
    />
  );
};
