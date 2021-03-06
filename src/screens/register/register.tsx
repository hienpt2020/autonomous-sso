import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { UserAction } from 'src/common/constant';
import { Preference } from 'src/common/preference';
import { Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { BackHeaderX } from 'src/components/header';
import { PrimaryInput } from 'src/components/input';
import { Log } from 'src/helpers/logger';
import { EmailValidator, PasswordValidator, Validator } from 'src/helpers/validators';
import { createRequestRegisterAction, requestValidateAccessTokenAction } from 'src/redux/user';
import { activeAccountAction } from './actions/registerAction';
import { styles } from './styles';
import { Props } from './types';

const Register = (props: Props) => {
    const { t } = useTranslation();
    const redirectToken = props.route.params?.token;
    const redirectEmail = props.route.params?.email;
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isValidRequest, setIsValidRequest] = useState(false);
    const emailValidator: Validator = new EmailValidator();
    const passwordValidator: Validator = new PasswordValidator();

    useEffect(() => {
        // Handle Open Register Screen from Deep Linking
        if (redirectToken) {
            if (redirectEmail) {
                // Case WorkSpace Invitation
                setEmail(redirectEmail);
            } else {
                // Case Active Account
                activeAccount(redirectToken);
            }
        }
    }, [redirectToken]);

    async function activeAccount(token: string) {
        const accessToken = await activeAccountAction(token);
        if (accessToken) {
            Preference.saveAccessToken(accessToken).then(() => {
                dispatch(requestValidateAccessTokenAction());
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <BackHeaderX style={styles.title} title={t('register.title')} onPress={() => handleBack()} />
                <PrimaryInput
                    defaultValue={email}
                    placeholder={t('register.input_your_email')}
                    style={styles.input}
                    constainError={true}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailError('');
                        validateButtonContinue(text, password, confirmPassword);
                    }}
                    onBlur={() => handleEmailLostFocus()}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    errorMessage={emailError}
                />
                <PrimaryInput
                    placeholder={t('register.enter_new_password')}
                    style={styles.input}
                    constainError={true}
                    onBlur={() => handlePasswordLostFocus()}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setPassword(text);
                        validateButtonContinue(email, text, confirmPassword);
                    }}
                    secureTextEntry={true}
                    errorMessage={passwordError}
                />
                <PrimaryInput
                    placeholder={t('register.confirm_password')}
                    style={styles.input}
                    onChangeText={(text) => {
                        setConfirmPasswordError('');
                        setConfirmPassword(text);
                        validateButtonContinue(email, password, text);
                    }}
                    onBlur={() => handleConfirmPasswordLostFocus}
                    constainError={true}
                    secureTextEntry={true}
                    errorMessage={confirmPasswordError}
                />

                <Space flex={1} />
                <PrimaryButton
                    containerStyle={styles.button}
                    title={t('common.continue')}
                    disabled={!isValidRequest}
                    onPress={isValidRequest ? () => validateRegister() : () => {}}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

    function validateButtonContinue(email: string, password: string, confirmPassword: string) {
        const validRequest =
            emailValidator.isValid(email) &&
            passwordValidator.isValid(password) &&
            passwordValidator.isValid(confirmPassword);
        setIsValidRequest(validRequest);
    }

    function handlePasswordLostFocus() {
        if (passwordValidator.isValid(password)) {
            setPasswordError(t(''));
        } else {
            setPasswordError(t('common.password_require'));
        }
    }

    function handleConfirmPasswordLostFocus() {
        if (passwordValidator.isValid(password)) {
            setPasswordError(t(''));
        } else {
            setPasswordError(t('common.password_require'));
        }
    }

    function handleEmailLostFocus() {
        if (emailValidator.isValid(email)) {
            setEmailError(t(''));
        } else {
            setEmailError(t('common.email_invalid'));
        }
    }
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

        if (validEmail && validPassword && validConfirmPassword) {
            handleRegister();
        }
    }
    function handleRegister() {
        dispatch(createRequestRegisterAction(email, password, confirmPassword, redirectToken));
        Log.info(UserAction.AUTH_REGISTER, { email });
    }
};

export default Register;
