import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { showPopup, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { BackHeader } from 'src/components/header';
import { PasswordInput } from 'src/components/input';
import { PasswordValidator, Validator } from 'src/helpers/validators';
import { AppSpacing } from 'src/styles';
import { IRequestNewPassword, RequestNewPassword } from './actions/requestNewPasswordAction';
import { styles } from './styles';
import { Props } from './types';
import SuccessIcon from 'src/assets/images/ic_check_success.svg';

const NewPassword = (props: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('');

    const [isValidRequest, setIsValidRequest] = useState(false);

    const passwordValidator: Validator = new PasswordValidator();

    const requestNewPassword: IRequestNewPassword = new RequestNewPassword(
        dispatch,
        _onChangePasswordSuccess,
        _onChangePasswordError,
    );

    return (
        <View style={styles.container}>
            <BackHeader title={t('common.reset_password')} onPress={() => handleBack()} />
            <View style={styles.contentContainer}>
                <Space height={AppSpacing.LARGE} />
                <PasswordInput
                    placeholder={t('new_password.enter_current_password')}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setPassword(text);
                        validateButtonContinue(text, newPassword, confirmNewPassword);
                    }}
                    onBlur={() => _onPasswordBlur}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={passwordError}
                />
                <PasswordInput
                    placeholder={t('new_password.enter_new_password')}
                    onChangeText={(text) => {
                        setNewPasswordError('');
                        setNewPassword(text);
                        validateButtonContinue(password, text, confirmNewPassword);
                    }}
                    onBlur={() => _onNewPasswordBlur}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={newPasswordError}
                />
                <PasswordInput
                    placeholder={t('new_password.re_enter_new_password')}
                    onChangeText={(text) => {
                        setConfirmNewPasswordError('');
                        setConfirmNewPassword(text);
                        validateButtonContinue(password, newPassword, text);
                    }}
                    onBlur={() => _onConfirmNewPasswordBlur}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={confirmNewPasswordError}
                />
                <Space flex={1} />

                <PrimaryButton
                    title={t('common.continue')}
                    wrapperContainer={styles.button}
                    disabled={!isValidRequest}
                    onPress={isValidRequest ? () => validateReset() : () => {}}
                />
                <Space height={AppSpacing.EXTRA} />
            </View>
        </View>
    );

    function _onChangePasswordError(message: string) {
        showPopup(t('common.error'), message, null, [
            {
                onPress: () => {},
                title: t('common.ok'),
            },
        ]);
    }
    function _onChangePasswordSuccess() {
        showPopup(t('new_password.you_ve_just_changed'), t('new_password.we_ve_just_updated'), SuccessIcon, [
            {
                onPress: () => {
                    props.navigation.goBack();
                },
                title: t('common.ok'),
            },
        ]);
    }
    function validateButtonContinue(password: string, newPassword: string, confirmNewPassword: string) {
        const validRequest =
            passwordValidator.isValid(password) &&
            passwordValidator.isValid(newPassword) &&
            passwordValidator.isValid(confirmNewPassword);
        setIsValidRequest(validRequest);
    }
    function _onPasswordBlur() {
        if (passwordValidator.isValid(password)) {
            setPasswordError(t(''));
        } else {
            setPasswordError(t('common.password_require'));
        }
    }

    function _onNewPasswordBlur() {
        if (passwordValidator.isValid(newPassword)) {
            setNewPasswordError(t(''));
        } else {
            setNewPasswordError(t('common.password_require'));
        }
    }
    function _onConfirmNewPasswordBlur() {
        if (passwordValidator.isValid(confirmNewPassword)) {
            setConfirmNewPasswordError(t(''));
        } else {
            setConfirmNewPasswordError(t('common.password_require'));
        }
    }

    function handleBack() {
        props.navigation.goBack();
    }
    function validateReset() {
        let validPassword, validNewPassword, validConfirmNewPassword;

        //Password
        if (passwordValidator.isValid(password)) {
            validPassword = true;
            setPasswordError(t(''));
        } else {
            setPasswordError(t('common.password_require'));
        }

        //New Password
        if (passwordValidator.isValid(newPassword)) {
            validNewPassword = true;
            setNewPasswordError(t(''));
        } else {
            setNewPasswordError(t('common.password_require'));
        }

        //Confirm password
        if (passwordValidator.isValid(confirmNewPassword)) {
            if (newPassword === confirmNewPassword) {
                validConfirmNewPassword = true;
                setConfirmNewPasswordError(t(''));
            } else {
                setConfirmNewPasswordError(t('register.password_not_match'));
            }
        } else {
            setConfirmNewPasswordError(t('common.password_require'));
        }

        if (validPassword && validNewPassword && validConfirmNewPassword) {
            handleReset();
        }
    }

    function handleReset() {
        requestNewPassword.changePassword(password, newPassword);
    }
};

export default NewPassword;
