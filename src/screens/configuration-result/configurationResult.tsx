import * as React from 'react'
import { View, Text, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native'
import ImageSuccess from 'src/assets/images/image_success.svg';

//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ConfigurationResult = (props: Props) => {

    const { t } = useTranslation()


    useEffect(() => {

    }, [])

    return (

        <View style={styles.container}>
            <ImageSuccess width="152" height="152" style={styles.title} />
            <Text style={styles.title}>Successful setup!</Text>
            <Text style={styles.subTitle}>You have finished your setup for Smartdesk 4</Text>
            <PrimaryButton wrapperContainer={styles.button} title={t('common.done')} />

        </View>
    )

    function handleBack() {
        props.navigation.goBack()
    }
};

export default ConfigurationResult;
