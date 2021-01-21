import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { AppText, AppView, Space } from 'src/components';
import { LargeHeader } from 'src/components/header';
import LayoutInfo from 'src/components/layoutInfo';
import { BookingHistory } from 'src/models/BookingHistory';
import WorkLayout from 'src/models/WorkLayout';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';
import { styles } from './styles';
import { Props } from './types';

const ListUpcoming = ({ data }: Props) => {
    const { t } = useTranslation();

    function onItemSelected(data: BookingHistory) {
        navigate(RouteName.PLACE_DETAIL, { booking: data });
    }

    const _renderBookingStatus = (status: string) => {
        return (
            <AppView style={styles.bookingStatusContainer} center>
                <AppText style={styles.bookingStatus}>{status}</AppText>
            </AppView>
        );
    };

    const renderItem = (data: BookingHistory) => {
        let status = t('activities.upcoming');
        return (
            <TouchableOpacity onPress={() => onItemSelected(data)}>
                <AppView style={styles.itemContainer}>
                    <AppView horizontal>
                        <AppText style={styles.placeName} numberOfLines={1}>
                            {data.placeName}
                        </AppText>
                        <Space width={AppSpacing.SMALL} />
                        {_renderBookingStatus(status)}
                    </AppView>
                    <Space height={4} />
                    <AppText style={styles.workSpaceName}>{'Autonomous'}</AppText>
                    <Space height={8} />
                    <AppText style={styles.address}>{data.address}</AppText>
                </AppView>
            </TouchableOpacity>
        );
    };

    return (
        <AppView style={styles.container}>
            <LargeHeader
                style={styles.header}
                title={t('home.upcoming_title')}
                subTitle={t('home.upcoming_sub_title')}
            />

            <Space height={AppSpacing.LARGE} />

            <FlatList
                style={styles.list}
                horizontal
                data={data}
                keyExtractor={(item, index) => `${item.id}${index}`}
                renderItem={({ item }) => renderItem(item)}
                showsHorizontalScrollIndicator={false}
            >
                <Text></Text>
            </FlatList>
        </AppView>
    );
};

export default ListUpcoming;
