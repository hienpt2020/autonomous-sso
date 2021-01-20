import _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'src/assets/images/empty.svg';
import { PrimaryButton, SecondaryButton } from 'src/components/button';
import { Link } from 'src/components/link';
import { RootState } from 'src/redux/types';
import { createRequestLogoutAction } from 'src/redux/user';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
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

    function _onPressActivities() {
        navigate(RouteName.ACTIVITIES, null);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatarContainer}>
                {avatar ? (
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                ) : (
                    <Icon width={128} height={128} style={styles.avatar} />
                )}
            </View>

            <Link title={email} />
            {workspace ? (
                <PrimaryButton
                    wrapperContainer={styles.containerButton}
                    onPress={() => props.navigation.navigate(RouteName.SWITCH_WORKSPACE)}
                    title={workspace}
                />
            ) : null}

            <SecondaryButton
                wrapperContainer={styles.containerButton}
                onPress={() => dispatch(createRequestLogoutAction())}
                title={t('common.logout')}
            />

            <PrimaryButton title={'Activities'} onPress={_onPressActivities} />
        </SafeAreaView>
    );
};

export default Profile;
