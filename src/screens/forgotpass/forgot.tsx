import * as React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { PrimaryButton } from 'src/components/button'
import { PrimaryInput } from 'src/components/input'
import { BackHeaderX } from 'src/components/header'
import { REQUEST_END, REQUEST_START } from 'src/redux/request/requestType';
import { LoginProps } from './types';
import { Validator, EmailValidator, PasswordValidator } from 'src/helpers/validators'
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';


const ForgotPassword = (props: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const emailValidator: Validator = new EmailValidator()

  React.useEffect(() => {
    // dispatch({ type: REQUEST_START });
    // setTimeout(() => dispatch({ type: REQUEST_END }), 3000);
    //setEmailError(t('login.email_invalid'))
    //setPasswordError(t('login.password_require'))
  }, []);

  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

        <BackHeaderX title={t('common.forgot_password')} onPress={() => handleBack()} />
        <PrimaryInput
          placeholder={t('common.email')}
          onChangeText={text => {
            setEmail(text)
            setEmailError('')
          }}
          keyboardType='email-address'
          errorMessage={emailError} />
        <PrimaryButton
          title={t('common.forgot_password')}
          containerStyle={styles.button}
          onPress={() => validateLogin()} />
        <View style={{ flex: 3 }} />
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
  function handleBack() {
    props.navigation.goBack()
  }
  function validateLogin() {
    let validEmail = false
    if(emailValidator.isValid(email)){
      validEmail = true 
      setEmailError(t(''))
    }else{
      setEmailError(t('login.email_invalid'))
    }
  
    if(validEmail){
      handleForgot()
    }

  }
  function handleForgot() {
      props.navigation.navigate(RouteName.RESET_PASSWORD)
  }
  
  function request() {
    dispatch({ type: REQUEST_START })
    setTimeout(() => dispatch({ type: REQUEST_END }), 3000);
  }
};

export default ForgotPassword;
