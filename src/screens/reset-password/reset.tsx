import _ from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { BackHeaderX } from 'src/components/header';
import { PasswordInput } from 'src/components/input';
import { PasswordValidator, Validator } from 'src/helpers/validators';
import { AppSpacing } from 'src/styles';
import { IRequestResetPassword, RequestResetPassword } from './actions/requestResetPasswordAction';
import { styles } from './styles';
import { Props } from './types';

const ResetPassword = (props: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isValidRequest, setIsValidRequest] = useState(false);

    const passwordValidator: Validator = new PasswordValidator();

    const requestResetPassword: IRequestResetPassword = new RequestResetPassword(dispatch);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={styles.contentContainer}>
                <BackHeaderX title={t('new_password.title')} onPress={() => handleBack()} />
                <PasswordInput
                    placeholder={t('common.password')}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setPassword(text);
                        validateButtonContinue(text, confirmPassword);
                    }}
                    onBlur={_onPasswordBlur}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={passwordError}
                />
                <PasswordInput
                    placeholder={t('register.confirm_password')}
                    onBlur={_onConfirmPasswordBlur}
                    onChangeText={(text) => {
                        setConfirmPasswordError('');
                        setConfirmPassword(text);
                        validateButtonContinue(password, text);
                    }}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={confirmPasswordError}
                />

                <Space flex={1} />
                <PrimaryButton
                    title={t('common.reset')}
                    wrapperContainer={styles.button}
                    disabled={!isValidRequest}
                    onPress={() => validateReset()}
                />
                <Space height={AppSpacing.LARGE} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
    function validateButtonContinue(password: string, confirmPassword: string) {
        const validRequest =
            passwordValidator.isValid(password) &&
            passwordValidator.isValid(confirmPassword);
        setIsValidRequest(validRequest);
    }
    function _onPasswordBlur() {
        if (passwordValidator.isValid(password)) {
            setPasswordError(t(''));
        } else {
            setPasswordError(t('common.password_require'));
        }
    }

    function _onConfirmPasswordBlur() {
        if (passwordValidator.isValid(confirmPassword)) {
            setConfirmPasswordError(t(''));
        } else {
            setConfirmPasswordError(t('common.password_require'));
        }
    }

    function handleBack() {
        props.navigation.goBack();
    }
    function validateReset() {
        let validPassword,
            validConfirmPassword = false;

        //Password
        if (passwordValidator.isValid(password)) {
            validPassword = true;
            setPasswordError(t(''));
        } else {
            setPasswordError(t('common.password_require'));
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
            setConfirmPasswordError(t('common.password_require'));
        }

        if (validPassword && validConfirmPassword) {
            handleReset();
        }
    }

    function handleReset() {
        const token = _.get(props, 'route.params.token', '');
        requestResetPassword.resetPassword(token, password);
    }
};

export default ResetPassword;
