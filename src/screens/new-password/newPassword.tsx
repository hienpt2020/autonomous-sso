import _ from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { BackHeader } from 'src/components/header';
import { PrimaryInput } from 'src/components/input';
import { PasswordValidator, Validator } from 'src/helpers/validators';
import { AppSpacing } from 'src/styles';
import { IRequestNewPassword, RequestNewPassword } from './actions/requestNewPasswordAction';
import { styles } from './styles';
import { Props } from './types';

const NewPassword = (props: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const passwordValidator: Validator = new PasswordValidator();

    const NewPassword: IRequestNewPassword = new RequestNewPassword(dispatch);

    return (
        <View style={styles.container}>
            <BackHeader title={t('common.reset_password')} onPress={() => handleBack()} />
            <View  style={styles.contentContainer}>
                <Space height={AppSpacing.LARGE} />
                <PrimaryInput
                    placeholder={t('common.password')}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setPassword(text);
                    }}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={passwordError}
                />
                <PrimaryInput
                    placeholder={t('common.password')}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setPassword(text);
                    }}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={passwordError}
                />
                <PrimaryInput
                    placeholder={t('register.confirm_password')}
                    onChangeText={(text) => {
                        setConfirmPasswordError('');
                        setConfirmPassword(text);
                    }}
                    secureTextEntry={true}
                    constainError={true}
                    errorMessage={confirmPasswordError}
                />
                <Space flex={1} />

                <PrimaryButton
                    title={t('common.reset')}
                    wrapperContainer={styles.button}
                    onPress={() => validateReset()}
                />
                <Space height={AppSpacing.EXTRA} />
            </View>
        </View>
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
        RequestNewPassword.resetPassword(token, password);
    }
};

export default NewPassword;
