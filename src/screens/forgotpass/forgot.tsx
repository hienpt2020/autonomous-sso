import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from 'src/components/button';
import { BackHeaderX } from 'src/components/header';
import { PrimaryInput } from 'src/components/input';
import { EmailValidator, Validator } from 'src/helpers/validators';
import { IRequestForgotPassword, RequestForgotPassword } from './actions/requestForgotAction';
import { styles } from './styles';
import { LoginProps } from './types';


const ForgotPassword = (props: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const emailValidator: Validator = new EmailValidator()
  const requestForgotPassword: IRequestForgotPassword = new RequestForgotPassword(dispatch)

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
          autoCapitalize="none"
          errorMessage={emailError} />
        <PrimaryButton
          title={t('common.forgot_password')}
          wrapperContainer={styles.button}
          onPress={() => validateLogin()} />
        <View style={{ flex: 3 }} />
      </KeyboardAvoidingView>

    </SafeAreaView>

  )

  function validateLogin() {
    let validEmail = false
    if (emailValidator.isValid(email)) {
      validEmail = true
      setEmailError(t(''))
    } else {
      setEmailError(t('login.email_invalid'))
    }

    if (validEmail) {
      handleForgot()
    }

  }

  function handleBack() {
    props.navigation.goBack()
  }
  function handleForgot() {
    requestForgotPassword.forgotPasswrod(email)
  }


};

export default ForgotPassword;
