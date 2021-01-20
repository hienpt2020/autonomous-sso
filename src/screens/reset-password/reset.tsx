import _ from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from 'src/components/button';
import { BackHeaderX } from 'src/components/header';
import { PrimaryInput } from 'src/components/input';
import { PasswordValidator, Validator } from 'src/helpers/validators';
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

    const passwordValidator: Validator = new PasswordValidator();

    const requestResetPassword: IRequestResetPassword = new RequestResetPassword(dispatch);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <BackHeaderX title={t('common.reset_password')} onPress={() => handleBack()} />
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
                    title={t('common.reset')}
                    wrapperContainer={styles.button}
                    onPress={() => validateReset()}
                />
                <View style={{ flex: 3 }} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
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
