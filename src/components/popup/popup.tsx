import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/redux/types';
import styles from './style';
import { Props } from './types';
import _ from 'lodash'
import { createRequestErrorMessageAction } from 'src/redux/request'
export const Popup = (props: Props) => {
  const requestReducer = useSelector((state: RootState) => state.requestReducer);
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  useEffect(()=>{
    setError(_.get(requestReducer, "errorMessage", ""))
  }, [requestReducer.errorMessage])
  

  if (error) {
    return (
      <View style={styles.popup}>
        <View style={styles.container}>
          <Text style={styles.text}>{error}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              dispatch(createRequestErrorMessageAction(""))
            }}>
            <Text style={styles.textButton}>Close</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  return null;

};
