import { localeData } from 'moment';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import FacebookIcon from 'src/assets/images/icon_facebook_white.svg';
import GoogleIcon from 'src/assets/images/icon_google_white.svg';
import AppleIcon from 'src/assets/images/ic_apple.svg';
import { AppText, Space } from 'src/components';
import { SocialButton, PrimaryButton } from 'src/components/button';
import { LargeHeader } from 'src/components/header';
import { PasswordInput, PrimaryInput } from 'src/components/input';
import { Link } from 'src/components/link';
import { Log } from 'src/helpers/logger';
import { EmailValidator, PasswordValidator, Validator } from 'src/helpers/validators';
import { createRequestLoginAction } from 'src/redux/user/';
import { RouteName } from 'src/routers/routeName';
import { AppSpacing } from 'src/styles';
import { styles } from './styles';
import { LoginProps } from './types';
import { SocialService } from 'src/services/login-social/socialService';
import {
    createRequestLoginGoogleAction,
    createRequestLoginAppleAction,
    createRequestLoginFacebookAction,
} from 'src/redux/user/userSaga';
import { UserAction } from 'src/common/constant';

const Login = (props: LoginProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const emailValidator: Validator = new EmailValidator();
    const passwordValidator: Validator = new PasswordValidator();
    const [isValidRequest, setIsValidRequest] = useState(false);

    const redirectEmail = props.route.params?.email;

    React.useEffect(() => {
        Log.debug(redirectEmail);
        if (redirectEmail) {
            setEmail(redirectEmail);
        }
    }, [redirectEmail]);

    React.useEffect(() => {
        SocialService.configure();
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <LargeHeader title={t('login.title')} style={styles.title} />
                <Space height={AppSpacing.LARGE} />
                <PrimaryInput
                    defaultValue={email}
                    placeholder={t('common.email')}
                    renderErrorMessage={emailError !== ''}
                    style={styles.input}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailError('');
                        validateButtonLogin(text, password);
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    errorMessage={emailError}
                    constainError={true}
                />
                <PasswordInput
                    renderErrorMessage={passwordError !== ''}
                    style={styles.input}
                    placeholder={t('common.password')}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setPassword(text);
                        validateButtonLogin(email, text);
                    }}
                    errorMessage={passwordError}
                    constainError={true}
                />
                <PrimaryButton
                    title={t('common.login')}
                    containerStyle={styles.button}
                    onPress={() => validateLogin()}
                    disabled={!isValidRequest}
                />
                <Space height={AppSpacing.MEDIUM} />
                <Link title={t('login.forgot_password')} onPress={() => handleForgotPassword()} style={styles.link} />
                <View style={{ flex: 1 }}>
                    <Space height={AppSpacing.MEDIUM} />
                    <View style={styles.dividerContainer}>
                        <Divider style={styles.divider} />
                        <AppText children={t('login.or_log_in_instantly')} style={styles.dividerText} />
                        <Space height={AppSpacing.EXTRA} />
                        <Divider style={styles.divider} />
                    </View>
                    <Space height={AppSpacing.MEDIUM} />
                    <SocialButton
                        icon={<GoogleIcon />}
                        title={t('login.login_with_google')}
                        style={styles.googleButton}
                        onPress={() => {
                            dispatch(createRequestLoginGoogleAction());
                            Log.info(UserAction.AUTH_LOGIN_WITH_GOOGLE);
                        }}
                    />
                    <Space height={AppSpacing.MEDIUM} />
                    <SocialButton
                        icon={<FacebookIcon />}
                        title={t('login.login_with_facebook')}
                        style={styles.facebookButton}
                        onPress={() => {
                            dispatch(createRequestLoginFacebookAction());
                            Log.info(UserAction.AUTH_LOGIN_WITH_FACEBOOK);
                        }}
                    />
                    <Space height={AppSpacing.MEDIUM} />
                    {
                        <SocialButton
                            icon={<AppleIcon />}
                            title={t('login.login_with_apple')}
                            style={styles.appleButton}
                            onPress={() => {
                                dispatch(createRequestLoginAppleAction());
                                Log.info(UserAction.AUTH_LOGIN_WITH_APPLE);
                            }}
                        />
                    }
                    <Space height={AppSpacing.LARGE} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <AppText children={t('login.dont_have_account')} />
                        <Link title={t('login.create_account')} onPress={handleCreateAccount} />
                    </View>
                    <Space height={AppSpacing.LARGE} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
    function validateButtonLogin(email: string, password: string) {
        const validRequest = emailValidator.isValid(email) && passwordValidator.isValid(password);
        setIsValidRequest(validRequest);
    }

    function handleCreateAccount() {
        props.navigation.navigate(RouteName.REGISTER, {});
    }
    function validateLogin() {
        let validEmail,
            validPassword = false;
        if (emailValidator.isValid(email)) {
            validEmail = true;
            setEmailError(t(''));
        } else {
            setEmailError(t('common.email_invalid'));
        }
        if (passwordValidator.isValid(password)) {
            validPassword = true;
            setPasswordError(t(''));
        } else {
            setPasswordError(t('common.password_require'));
        }

        if (validEmail && validPassword) {
            handleLogin();
        }
    }
    function handleLogin() {
        Log.info(UserAction.AUTH_LOGIN_WITH_EMAIL_PASSWORD, {
            email,
            password,
        });
        dispatch(createRequestLoginAction(email, password));
    }

    function handleForgotPassword() {
        props.navigation.navigate(RouteName.FORGOT_PASSWORD);
    }
};

export default Login;
