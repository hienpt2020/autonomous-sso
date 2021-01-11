import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Image } from 'react-native'
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createRequestLogoutAction } from 'src/redux/user'
import { Props } from './types';
import { styles } from './styles';
import { Link } from 'src/components/link';
import { PrimaryButton, SecondaryButton } from 'src/components/button';
import { RouteName } from 'src/routers/routeName';

const Profile = (props: Props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    const email = "hoang.q@autonomous.nyc"
    const workspace = "Autonomous"
    const avatar = "https://source.unsplash.com/wgivdx9dBdQ/360x180"
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <Link title={email} />
            <PrimaryButton wrapperContainer={styles.containerButton}
                onPress={() => props.navigation.navigate(RouteName.SWITCH_WORKSPACE)}
                title={workspace} />
            <SecondaryButton wrapperContainer={styles.containerButton}
                onPress={() => dispatch(createRequestLogoutAction())}
                title={t('common.logout')} />
        </SafeAreaView>
    )

};

export default Profile;
