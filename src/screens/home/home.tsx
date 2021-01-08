import React from 'react';
import { HomeProps } from './types';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Home = (props: HomeProps) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({type: 'TEST_REQUEST'});
  }, []);
  return (
    <View>
      <Text>Home page</Text>
    </View>
  );
};

export default Home;
