import * as React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import styles from './style';
import { Props } from './types';
import { REQUEST_ERROR } from 'src/redux/request/requestType';

export const Popup = (props: Props) => {
  const requestReducer = useSelector((state: RootState) => state.requestReducer);

  console.log("hitle popup", requestReducer, requestReducer.payload, requestReducer.payload);
  if (requestReducer.payload) {
    return (
      <View style={styles.popup}>
        <View style={styles.container}>
          <Text style={styles.text}>{requestReducer.payload.error}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
            }}>
            <Text style={styles.textButton}>Close</Text>
          </TouchableHighlight>
        </View>
      </View>
    );  
  }
  return null;
  
};
