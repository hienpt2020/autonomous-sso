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
import { Props } from './types';
import { Validator, EmailValidator, PasswordValidator } from 'src/helpers/validators'
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';

const ResetPassWord = (props: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")
  
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

        <BackHeaderX title={t('common.reset_password')} onPress={() => handleBack()} />
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
          title={t('common.reset')}
          wapperStyle={styles.button}
          onPress={() => validateReset()} />
        <View style={{ flex: 3 }} />
      </KeyboardAvoidingView>

    </SafeAreaView>

  )
  function handleBack() {
    props.navigation.goBack()
  }
  function validateReset() {
    let validPassword, validConfirmPassword = false
   
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

    if(validPassword && validConfirmPassword){
      handleReset()
    }

  }
  function handleReset() {

  }
  

};

export default ResetPassWord;
