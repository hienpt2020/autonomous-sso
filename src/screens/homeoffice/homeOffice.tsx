import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Header } from 'src/components/header';
import { styles } from './styles';
import { Props } from './types';

const Office = (props: Props) => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Header title={'Booking'} />
        </View>
    );
};

export default Office;
