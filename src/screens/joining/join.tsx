import * as React from 'react';
import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from 'src/components/button'
import { Header } from 'src/components/header'
import { REQUEST_END, REQUEST_START } from 'src/redux/request/requestType';
import { Props } from './types';
import { styles } from './styles';

const Join = (props: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();


  React.useEffect(() => {

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

        <Header title={t('join.join_workspace')} />
        <Text style={styles.term}>
          {t('join.content')}
          <Text style={styles.link}>{props.route.params.workspace}</Text>
        </Text>
        <View style={{ flex: 1 }} />
        <PrimaryButton
          title={t('common.join')}
          containerStyle={styles.button}
          onPress={() => handleJoin()} />

      </KeyboardAvoidingView>

    </SafeAreaView>

  )


  
  function handleJoin() {

  }

};

export default Join;
