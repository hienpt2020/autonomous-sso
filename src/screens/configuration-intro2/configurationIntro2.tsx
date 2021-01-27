import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { BackHeader } from 'src/components/header';
import BleIntro from 'src/components/ble-intro';
import { AppText } from 'src/components';

//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const ConfigurationIntro2 = (props: Props) => {
    const { t } = useTranslation();

    useEffect(() => {}, []);

    const gotoPlaceDetailScreen = () => navigate(RouteName.CONFIGURATION_STEP1, null);
    const handleBack = () => {
        props.navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <BackHeader title={t('setup.title')} onPress={handleBack} />
            <View style={styles.content}>
                <BleIntro />
                <AppText style={styles.labelText}>{t('setup.intro2_label')}</AppText>
                <AppText style={styles.descriptionText}>{t('setup.intro2_description')}</AppText>
            </View>
            <SafeAreaView style={styles.bottom}>
                <PrimaryButton title={t('setup.next')} onPress={gotoPlaceDetailScreen} />
            </SafeAreaView>
        </View>
    );
};

export default ConfigurationIntro2;
