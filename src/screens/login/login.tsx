import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { AppText, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { PrimaryInput } from 'src/components/input';
import { Link } from 'src/components/link';
import { EmailValidator, PasswordValidator, Validator } from 'src/helpers/validators';
import { createRequestLoginAction } from 'src/redux/user/';
import { RouteName } from 'src/routers/routeName';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';
import { styles } from './styles';
import { LoginProps } from './types';

const Login = (props: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailValidator: Validator = new EmailValidator();
  const passwordValidator: Validator = new PasswordValidator();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} >
        <AppText children={t('login.title')}
          style={styles.title}
          size={AppFontSize.SIZE_28} />
        <Space height={24} />
        <PrimaryInput
          placeholder={t('common.email')}
          renderErrorMessage={emailError !== ''}
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          errorMessage={emailError}
        />
        <AppText children={emailError} style={styles.error} />
        <PrimaryInput
          renderErrorMessage={passwordError !== ''}
          style={styles.input}
          placeholder={t('common.password')}
          onChangeText={(text) => {
            setPasswordError('');
            setPassword(text);
          }}
          secureTextEntry={true}
          errorMessage={passwordError}
        />
        <AppText children={passwordError} style={styles.error} />
        <PrimaryButton title={t('common.login')} style={styles.button} onPress={() => validateLogin()} />
        <Space height={AppSpacing.MEDIUM} />
        <Link title={t('common.forgot_password')} onPress={() => handleForgotPassword()} style={styles.link} />
        <Space height={AppSpacing.MEDIUM} />
        <View style={{ flex: 3 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <AppText children={t('login.dont_have_account')} />
          <Link title={t('login.create_account')} onPress={handleCreateAccount} />
        </View>
        <Space height={AppSpacing.EXTRA} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
  function handleCreateAccount() {
    props.navigation.navigate(RouteName.REGISTER)
  }
  function validateLogin() {
    let validEmail, validPassword = false;
    if (emailValidator.isValid(email)) {
      validEmail = true;
      setEmailError(t(''));
    } else {
      setEmailError(t('login.email_invalid'));
    }
    if (passwordValidator.isValid(password)) {
      validPassword = true;
      setPasswordError(t(''));
    } else {
      setPasswordError(t('login.password_require'));
    }

    if (validEmail && validPassword) {
      handleLogin();
    }
  }
  function handleLogin() {
    dispatch(createRequestLoginAction(email, password));
  }

  function handleForgotPassword() {
    props.navigation.navigate(RouteName.FORGOT_PASSWORD);
  }
};

export default Login;
