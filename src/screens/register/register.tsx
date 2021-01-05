import * as React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, Text } from 'react-native';
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
import { Validator, EmailValidator, PasswordValidator } from 'src/helpers/validators'

const Login = (props: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
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
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

        <BackHeaderX title={t('common.register')} onPress={() => handleBack()} />
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
            setPassword(text)
          }}
          secureTextEntry={true}
          errorMessage={passwordError} />
        <PrimaryInput
          placeholder={t('register.confirm_password')}
          onChangeText={text => {
            setConfirmPasswordError('')
            setConfirmPassword(text)
          }}
          secureTextEntry={true}
          errorMessage={confirmPasswordError} />

        <PrimaryButton
          title={t('common.register')}
          style={styles.button}
          onPress={() => validateRegister()} />
        <Text style={styles.term}>
          {t('register.term_condition1')}
          <Text style={styles.link} onPress={() => handleTerm()}>{t('register.term_condition2')}</Text>
          {t('register.term_condition3')}
          <Text style={styles.link} onPress={() => handlePrivacy()}>{t('register.term_condition4')}</Text>
        </Text>

        <View style={{ flex: 3 }} />

      </KeyboardAvoidingView>

    </SafeAreaView>

  )
  function handleTerm() {

  }
  function handlePrivacy() {

  }

  function handleBack() {
    props.navigation.goBack()
  }
  function validateRegister() {
    let validEmail, validPassword, validConfirmPassword = false
    //Email 
    if (emailValidator.isValid(email)) {
      validEmail = true
      setEmailError(t(''))
    } else {
      setEmailError(t('login.email_invalid'))
    }
    //Password
    if (passwordValidator.isValid(password)) {
      validPassword = true
      setPasswordError(t(''))
    } else {
      setPasswordError(t('login.password_require'))
    }
    //Confirm password
    if (passwordValidator.isValid(confirmPassword)) {
      if (password === confirmPassword) {
        validConfirmPassword = true
        setConfirmPasswordError(t(''))
      } else {
        setConfirmPasswordError(t('register.password_not_match'))
      }
    } else {
      setConfirmPasswordError(t('login.password_require'))
    }

    if (validPassword && validPassword && validConfirmPassword) {
      handleRegister()
    }

  }
  function handleRegister() {

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
  wrap: {
    margin: 16
  },
  term: {
    flexShrink: 1,
    padding: 16
  },
  link: {
    flexShrink: 1,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  button: {
    marginStart: 8,
    marginEnd: 8,
  }
})

export default Login;
