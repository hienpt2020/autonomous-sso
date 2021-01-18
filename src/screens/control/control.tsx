import * as React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/header';
import { Props } from './types';
import Height from './height';
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const Control = (props: Props) => {
    const { t } = useTranslation();
    useEffect(() => {}, []);
    const [percent, setPercent] = useState<number>(30);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Height percent={percent} />
            </View>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>100.0</Text>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity style={{ height: 56, width: 56, borderRadius: 28, backgroundColor: 'red' }} />
                <TouchableOpacity style={{ height: 56, width: 56, borderRadius: 28, backgroundColor: 'red' }} />
            </View>
            <SafeAreaView style={styles.header}>
                <BackHeader title={'Smart Desk 4'} onPress={() => handleBack()} />
            </SafeAreaView>
        </SafeAreaView>
    );

    function handleBack() {
        props.navigation.goBack();
    }
};

export default Control;
