import * as React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
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
import { Validator, EmailValidator, PasswordValidator } from 'src/helpers/validators'
import { styles } from './styles';

const Login = (props: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const emailValidator: Validator = new EmailValidator()
  const passwordValidator: Validator = new PasswordValidator()

  React.useEffect(() => {
    // dispatch({ type: REQUEST_START });
    // setTimeout(() => dispatch({ type: REQUEST_END }), 3000);
    //setEmailError(t('login.email_invalid'))
    //setPasswordError(t('login.password_require'))
  }, []);

  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} style={{ flex: 1 }}>

        <BackHeaderX title={t('common.login')} onPress={() => handleBack()} />
        <View style={{ flex: 1 }} />
        <PrimaryInput
          placeholder={t('common.email')}
          onChangeText={text => {
            setEmail(text)
            setEmailError('')
          }}
          keyboardType='email-address'
          errorMessage={emailError} />
        <PrimaryInput
          placeholder={t('common.password')}
          onChangeText={text => {
            setPasswordError('')
            setPassword(text)}
          }
          secureTextEntry={true}
          errorMessage={passwordError} />
        <Link
          title={t('login.forgot_password')}
          onPress={() => request()}
          style={styles.link} />
        <PrimaryButton
          title={t('common.login')}
          style={styles.button}
          onPress={() => validateLogin()} />
        <View style={{ flex: 1 }} />
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
  function handleBack() {
    props.navigation.goBack()
  }
  function validateLogin() {
    let validEmail, validPassword = false
    if(emailValidator.isValid(email)){
      validEmail = true 
      setEmailError(t(''))
    }else{
      setEmailError(t('login.email_invalid'))
    }
    if(passwordValidator.isValid(password)) {
      validPassword = true 
      setPasswordError(t(''))
    }else {
      setPasswordError(t('login.password_require'))
    }

    if(validPassword && validPassword){
      handleLogin()
    }

  }
  function handleLogin() {

  }
  
  function request() {
    dispatch({ type: REQUEST_START })
    setTimeout(() => dispatch({ type: REQUEST_END }), 3000);
  }
};

export default Login;
