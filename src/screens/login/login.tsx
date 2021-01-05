import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { PrimaryButton } from 'src/components/button'
import { PrimaryInput } from 'src/components/input'
import { Link } from 'src/components/link'
import { BackHeaderX } from 'src/components/header'
import { REQUEST_END, REQUEST_START } from 'src/redux/request/requestType';
import { LoginProps } from './types';
import { AppColor } from 'src/styles/colors';

const Login = (props: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  React.useEffect(() => {
    // dispatch({ type: REQUEST_START });
    // setTimeout(() => dispatch({ type: REQUEST_END }), 3000);
    //setEmailError(t('login.email_invalid'))
    //setPasswordError(t('login.password_require'))
  }, []);

  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "padding"} style={{flex: 1}}>

        <BackHeaderX title={t('common.login')} onPress={() => handleBack} />
        <View style={{flex: 1}}/>
        <PrimaryInput
          placeholder={t('common.email')}
          keyboardType='email-address'
          errorMessage={emailError} />
        <PrimaryInput
          placeholder={t('common.password')}
          secureTextEntry={true}
          errorMessage={passwordError} />
        <Link
          title={t('login.forgot_password')}
          onPress={() => request()}
          style={styles.link} />
        <PrimaryButton
          title={t('common.login')}
          style={styles.button} />
          <View style={{flex: 1}}/>
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
  function handleBack() {
    props.navigation.goBack()
  }
  function request() {
    dispatch({ type: REQUEST_START })
    setTimeout(() => dispatch({ type: REQUEST_END }), 3000);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.WHITE,
    justifyContent: 'center',
  },
  link: {
    flexShrink: 1,
  },
  button: {
    marginTop: 32
  }
})

export default Login;
