import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from 'src/components/button';
import { BackHeaderX } from 'src/components/header';
import { PrimaryInput } from 'src/components/input';
import reactotron from 'src/config/configReactoron';
import { EmailValidator, PasswordValidator, Validator } from 'src/helpers/validators';
import { createRequestRegisterAction } from 'src/redux/user';
import { styles } from './styles';
import { Props } from './types';

const Login = (props: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const emailValidator: Validator = new EmailValidator();
    const passwordValidator: Validator = new PasswordValidator();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <BackHeaderX title={t('common.register')} onPress={() => handleBack()} />
                <View style={{ flex: 1 }} />
                <PrimaryInput
                    placeholder={t('common.email')}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailError('');
                    }}
                    autoCapitalize="none"
                    keyboardType="email-address"
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
                <PrimaryInput
                    placeholder={t('register.confirm_password')}
                    onChangeText={(text) => {
                        setConfirmPasswordError('');
                        setConfirmPassword(text);
                    }}
                    secureTextEntry={true}
                    errorMessage={confirmPasswordError}
                />

                <PrimaryButton
                    title={t('common.register')}
                    wrapperContainer={styles.button}
                    onPress={() => validateRegister()}
                />
                <Text style={styles.term}>
                    {t('register.term_condition1')}
                    <Text style={styles.link} onPress={() => handleTerm()}>
                        {t('register.term_condition2')}
                    </Text>
                    {t('register.term_condition3')}
                    <Text style={styles.link} onPress={() => handlePrivacy()}>
                        {t('register.term_condition4')}
                    </Text>
                </Text>

                <View style={{ flex: 3 }} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    function handleTerm() {}
    function handlePrivacy() {}

    function handleBack() {
        props.navigation.goBack();
    }
    function validateRegister() {
        let validEmail,
            validPassword,
            validConfirmPassword = false;
        //Email
        if (emailValidator.isValid(email)) {
            validEmail = true;
            setEmailError(t(''));
        } else {
            setEmailError(t('login.email_invalid'));
        }
        //Password
        if (passwordValidator.isValid(password)) {
            validPassword = true;
            setPasswordError(t(''));
        } else {
            setPasswordError(t('login.password_require'));
        }
        //Confirm password
        if (passwordValidator.isValid(confirmPassword)) {
            if (password === confirmPassword) {
                validConfirmPassword = true;
                setConfirmPasswordError(t(''));
            } else {
                setConfirmPasswordError(t('register.password_not_match'));
            }
        } else {
            setConfirmPasswordError(t('login.password_require'));
        }

        if (validEmail && validPassword && validConfirmPassword) {
            handleRegister();
        }
    }
    function handleRegister() {
        dispatch(createRequestRegisterAction(email, password, confirmPassword));
    }
};

export default Login;
