import * as React from 'react';
import { View } from 'react-native';
import { Props } from './types';
import IconBooking from 'src/assets/images/ic_booking_result.svg';
import { AppText, AppView, Space } from '..';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';

const Notice: React.FC<Props> = ({ style, title, description }: Props) => {
    return (
        <AppView style={[styles.container, style]} alignItemsCenter>
            <IconBooking width="182" height="182" />
            <Space height={15} />
            <AppText style={styles.title}>{title}</AppText>
            <Space height={4} />
            <AppText style={styles.subTitle}>{description}</AppText>
        </AppView>
    );
};

export default Notice;
