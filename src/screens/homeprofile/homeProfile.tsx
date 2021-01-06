import * as React from 'react'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Props} from './types';
import { styles } from './styles';

const Profile = (props: Props) => {
    const { t } = useTranslation()

    useEffect(() => {
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    )

};

export default Profile;
