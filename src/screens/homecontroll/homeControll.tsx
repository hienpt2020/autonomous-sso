import * as React from 'react'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'src/components/header'
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { Empty } from 'src/components/empty';

const Controll = (props: Props) => {
    const { t } = useTranslation()

    useEffect(() => {
        
    }, [])
   
    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('controll.title')} />
            <Empty />
        </SafeAreaView>
    )

};

export default Controll;
