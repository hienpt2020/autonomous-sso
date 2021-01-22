import _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, View } from 'react-native';
import Config from 'react-native-config';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from 'src/assets/images/ic_edit.svg';
import Icon from 'src/assets/images/placeholder_avatar.svg';
import { AppText, AppView, Divider, Space } from 'src/components';
import { IconButton } from 'src/components/button';
import { Header } from 'src/components/header';
import SectionItem from 'src/components/section-item';
import { LinkingHelper } from 'src/helpers';
import { Log } from 'src/helpers/logger';
import { RootState } from 'src/redux/types';
import { createRequestLogoutAction } from 'src/redux/user';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppSpacing } from 'src/styles';
import { styles } from './styles';
import { Props } from './types';

const Profile = (props: Props) => {
    const { t } = useTranslation();
    const userReducer = useSelector((state: RootState) => state.userReducer);
    const workspaceReducer = useSelector((state: RootState) => state.workspaceReducer);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [workspace, setWorkSpace] = useState('');

    useEffect(() => {
        setEmail(_.get(userReducer, 'email', ''));
        setAvatar(_.get(userReducer, 'userAvatar', ''));
        setWorkSpace(_.get(userReducer, 'currentWorkspace', 'Autonomous'));
    }, [userReducer.email, userReducer.userAvatar]);

    useEffect(() => {
        setWorkSpace(workspaceReducer.name);
    }, [workspaceReducer.name]);

    return (
        <View>
            <Header title={t('profile.title')} />
            <ScrollView>
                <View>
                    <Space height={AppSpacing.LARGE} />
                    <View style={styles.sectionContainer}>
                        <Space height={AppSpacing.LARGE} />
                        {avatar ? (
                            <Image source={{ uri: avatar }} style={styles.avatar} />
                        ) : (
                            <Icon width={128} height={128} style={styles.avatar} />
                        )}
                        <Space height={AppSpacing.LARGE} />
                        <Divider />
                        <Space height={AppSpacing.MEDIUM} />
                        <AppView horizontal style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <AppText
                                style={styles.titleLarge}
                                children={_.get(_.split(email, '@', 1), 0).toUpperCase()}
                            />

                            <IconButton style={styles.iconButton} icon={<EditIcon width={18} height={18} />} />
                        </AppView>
                        <Space height={AppSpacing.SMALL} />
                        <AppText style={styles.content} children={email} />
                        <Space height={AppSpacing.MEDIUM} />
                    </View>
                    <Space height={AppSpacing.MEDIUM} />
                    <View style={styles.sectionContainer}>
                        {workspace ? (
                            <>
                                <SectionItem
                                    title={t('profile.workspace')}
                                    value={workspace}
                                    onPress={navigateToSwithProfile}
                                />

                                <Divider />
                            </>
                        ) : null}

                        <SectionItem title={t('profile.add_login_method')} value={'Email'} />
                        <Divider />
                        <SectionItem title={t('profile.activities')} value={''} onPress={_onPressActivities} />
                    </View>
                    <Space height={AppSpacing.MEDIUM} />
                    <View style={styles.sectionContainer}>
                        <SectionItem title={t('profile.privacy_policy')} onPress={_onPressPrivacy} />
                        <Divider />
                        <SectionItem title={t('profile.terms_of_use')} onPress={_onPressTerms} />
                        <Divider />
                        <SectionItem title={t('profile.contact_us')} onPress={_onPressContactUs} />
                        <Divider />
                        <SectionItem title={t('profile.version_update')} value={`${Config.APP_VERSION}`} />
                    </View>
                    <Space height={AppSpacing.MEDIUM} />
                    <View style={styles.sectionContainer}>
                        <SectionItem title={t('common.reset_password')} onPress={_onPressResetPassword} />
                        <Divider />
                        <SectionItem title={t('common.logout')} onPress={_handPressLogout} isWithoutArrow={true} />
                    </View>
                    <Space height={124} />
                </View>
            </ScrollView>
        </View>
    );
    function _handPressLogout() {
        dispatch(createRequestLogoutAction());
    }
    function _onPressContactUs() {
        try {
            LinkingHelper.open(Config.CONTACT_US);
        } catch (exception) {
            Log.debug(exception);
        }
    }
    function _onPressTerms() {
        navigate(RouteName.WEBPAGE, { url: Config.LINK_TERM });
    }
    function _onPressPrivacy() {
        navigate(RouteName.WEBPAGE, { url: Config.LINK_PRIVARY });
    }
    function _onPressResetPassword() {
        navigate(RouteName.NEW_PASSWORD, null);
    }
    function _onPressActivities() {
        navigate(RouteName.ACTIVITIES, null);
    }
    function navigateToSwithProfile() {
        props.navigation.navigate(RouteName.SWITCH_WORKSPACE);
    }
};

export default Profile;
