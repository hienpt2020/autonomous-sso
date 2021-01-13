import * as React from 'react';
import { CardDataProps } from './types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { styles } from './styles';
import BluetoothLight from '../../assets/images/bluetooth_light.svg';
import Check from '../../assets/images/check_light.svg';

export const CardData = (props: CardDataProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.chipContainer}>
        <BluetoothLight width="16" height="16" />
        <Text style={[styles.chipContent]}>{props.data.localName}</Text>
        {props.data.id === props.selectedId ? <Check width="32" height="32" style={styles.chipIcon} /> : null}
      </View>
    </TouchableOpacity>
  );
};
