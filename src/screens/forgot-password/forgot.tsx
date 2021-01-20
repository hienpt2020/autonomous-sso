import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { AppText, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { BackHeaderX, BackHeader } from 'src/components/header';
import { PrimaryInput } from 'src/components/input';
import { EmailValidator, Validator } from 'src/helpers/validators';
import { AppSpacing } from 'src/styles';
import { IRequestForgotPassword, RequestForgotPassword } from './actions/requestForgotPasswordAction';
import { styles } from './styles';
import { LoginProps } from './types';

const ForgotPassword = (props: LoginProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const emailValidator: Validator = new EmailValidator();
    const requestForgotPassword: IRequestForgotPassword = new RequestForgotPassword(dispatch);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <BackHeaderX style={styles.title} title={t('common.forgot_password')} onPress={() => handleBack()} />
                <Space height={AppSpacing.LARGE} />
                <PrimaryInput
                    placeholder={t('common.email')}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailError('');
                    }}
                    keyboardType="email-address"
                    renderErrorMessage={emailError !== ''}
                    autoCapitalize="none"
                    style={styles.input}
                    errorMessage={emailError}
                />
                <AppText children={emailError} style={styles.error} />
                <Space flex={1} />
                <PrimaryButton
                    title={t('forgot_password.send_me_an_email')}
                    containerStyle={styles.button}
                    onPress={() => validateLogin()}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

    function validateLogin() {
        let validEmail = false;
        if (emailValidator.isValid(email)) {
            validEmail = true;
            setEmailError(t(''));
        } else {
            setEmailError(t('common.email_invalid'));
        }

        if (validEmail) {
            handleForgot();
        }
    }

    function handleBack() {
        props.navigation.goBack();
    }
    function handleForgot() {
        requestForgotPassword.forgotPasswrod(email);
    }
};

export default ForgotPassword;
