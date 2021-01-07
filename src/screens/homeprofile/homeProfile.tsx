import * as React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { Link } from 'src/components/link';
import { PrimaryButton, SecondaryButton } from 'src/components/button';

const Profile = (props: Props) => {
    const { t } = useTranslation()

    useEffect(() => {
    }, [])

    const email = "hoang.q@autonomous.nyc"
    const workspace = "Autonomous"
    const avatar = "https://source.unsplash.com/wgivdx9dBdQ/360x180"
    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.avatar}/>
            <Link title={email} />
            <PrimaryButton wrapperContainer={styles.containerButton}
                title={workspace} />
            <SecondaryButton wrapperContainer={styles.containerButton}
                title={t('common.logout')} />
        </SafeAreaView>
    )

};

export default Profile;
