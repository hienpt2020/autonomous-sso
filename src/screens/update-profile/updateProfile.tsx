import * as React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { BackHeader } from 'src/components/header';
import { styles } from './style';
import { Props } from './types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { PrimaryInput } from 'src/components/input';
import { PrimaryButton } from 'src/components/button';
import { AppSpacing } from 'src/styles';
import { Space } from 'src/components';
import { updateProfileActions } from './actions/updateProfileAction';
import { RootState } from 'src/redux/types';
import { showPopupWarning } from './actions/showPopup';

const UpdateProfile = (props: Props) => {
    const { t } = useTranslation();
    const originUser = useSelector((state: RootState) => state.userReducer);

    const [fullName, setFullName] = useState(originUser.fullName);
    const [phone, setPhone] = useState(originUser.phone);
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isValidRequest, setIsValidRequest] = useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <BackHeader title={t('update_profile.title')} onPress={() => handleBack()} />

            <TouchableOpacity style={styles.contentContainer} onPress={() => Keyboard.dismiss()} activeOpacity={1}>
                <PrimaryInput
                    placeholder={t('Name')}
                    onChangeText={(text) => {
                        setPasswordError('');
                        setFullName(text);
                        validateFullName(text);
                    }}
                    constainError={true}
                    errorMessage={passwordError}
                    value={fullName}
                />
                <PrimaryInput
                    placeholder={t('Phone')}
                    onBlur={() => {}}
                    onChangeText={(text) => {
                        setConfirmPasswordError('');
                        setPhone(text);
                        validatePhone(text);
                    }}
                    constainError={true}
                    errorMessage={confirmPasswordError}
                    keyboardType="numeric"
                    value={phone}
                />
                <Space flex={1} />
                <PrimaryButton
                    title={t('update_profile.button_update_label')}
                    disabled={!isValidRequest}
                    onPress={() => {
                        Keyboard.dismiss();
                        showPopupWarning(() => updateProfileActions.updateProfile(fullName.trim(), phone.trim()));
                    }}
                />
                <Space height={AppSpacing.LARGE} />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );

    function handleBack() {
        props.navigation.goBack();
    }

    function validateFullName(__name: string) {
        const _name = __name.trim();
        if (_name !== '' && (_name !== originUser.fullName || phone !== originUser.phone)) {
            setIsValidRequest(true);
        } else {
            setIsValidRequest(false);
        }
    }
    function validatePhone(__phone: string) {
        const _phone = __phone.trim();
        if (_phone !== '' && (fullName != originUser.fullName || _phone != originUser.phone)) {
            setIsValidRequest(true);
        } else {
            setIsValidRequest(false);
        }
    }
};

export default UpdateProfile;
