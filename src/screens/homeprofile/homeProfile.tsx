import _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from 'src/assets/images/ic_edit.svg';
import Icon from 'src/assets/images/placeholder_avatar.svg';
import { AppText, AppView, Divider, Space } from 'src/components';
import { IconButton } from 'src/components/button';
import { Header } from 'src/components/header';
import SectionItem from 'src/components/section-item';
import { RootState } from 'src/redux/types';
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
                            <AppText style={styles.titleLarge} children={'Hitle'} />

                            <IconButton style={styles.iconButton} icon={<EditIcon width={24} height={24} />} />
                        </AppView>
                        <Space height={AppSpacing.SMALL} />
                        <AppText style={styles.content} children={email} />
                        <Space height={AppSpacing.MEDIUM} />
                    </View>
                    <Space height={AppSpacing.MEDIUM} />
                    <View style={styles.sectionContainer}>
                        <SectionItem title={t('profile.workspace')} value={workspace} onPress={navigateToSwithProfile} />
                        <Divider />
                        <SectionItem title={t('profile.add_login_method')} value={'Email'} />
                        <Divider />
                        <SectionItem title={t('profile.activities')} value={''} />
                    </View>
                    <Space height={AppSpacing.MEDIUM} />
                    <View style={styles.sectionContainer}>
                        <SectionItem title={t('profile.terms_and_policy')} />
                        <Divider />
                        <SectionItem title={t('profile.contact_us')} />
                        <Divider />
                        <SectionItem title={t('profile.version_update')} value={'Version 0.0.1'} />
                    </View>
                    <Space height={AppSpacing.MEDIUM} />
                    <View style={styles.sectionContainer}>
                        <SectionItem title={t('common.reset_password')} />
                        <Divider />
                        <SectionItem title={t('common.logout')} />
                    </View>
                    <Space height={124} />
                </View>
            </ScrollView>
        </View>
    );
    function navigateToSwithProfile(){
        props.navigation.navigate(RouteName.SWITCH_WORKSPACE)
    }
};

export default Profile;
