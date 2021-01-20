import * as React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { PrimaryButton } from 'src/components/button';
import { PrimaryInput } from 'src/components/input';
import { Link } from 'src/components/link';
import { BackHeaderX } from 'src/components/header';
import { createRequestLoginAction } from 'src/redux/user/';
import { LoginProps } from './types';
import { Validator, EmailValidator, PasswordValidator } from 'src/helpers/validators';
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';
import { navigate } from 'src/routers/rootNavigation';

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
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <BackHeaderX title={t('common.login')} onPress={() => handleBack()} />
                <View style={{ flex: 1 }} />
                <PrimaryInput
                    placeholder={t('common.email')}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailError('');
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    errorMessage={emailError}
                />
                <PrimaryInput
                    placeholder={t('common.password')}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setPassword(text);
                    }}
                    secureTextEntry={true}
                    errorMessage={passwordError}
                />
                <Link title={t('common.forgot_password')} onPress={() => handleForgotPassword()} style={styles.link} />
                <PrimaryButton
                    title={t('common.login')}
                    wrapperContainer={styles.button}
                    onPress={() => validateLogin()}
                />
                <View style={{ flex: 3 }} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    function handleBack() {
        props.navigation.goBack();
    }
    function validateLogin() {
        let validEmail,
            validPassword = false;
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
