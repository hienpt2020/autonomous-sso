import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Asset from 'src/models/Asset';
import { AppSpacing } from 'src/styles';
import { AppText, AppView, Space } from '..';
import { styles } from './styles';
import { Props } from './types';
import IconBluetooh from 'src/assets/images/ic_bluetooth.svg';

const imageWidth = Dimensions.get('window').width;
export const Device = (props: Props) => {
    const NUM_COLUMNS = 2;
    const FIXED_ITEM_HEIGHT = 40;

    const { t } = useTranslation();

    const _onPressItem = (item: Asset) => {
        if (props.onPressDevice) {
            props.onPressDevice(item);
        }
    };

    const renderItem = (data: Asset) => {
        return (
            <TouchableOpacity
                style={styles.chipContainer}
                onPress={() => _onPressItem(data)}
                disabled={!props.isConfig || !data.isSmartDevice}
            >
                <FastImage
                    style={styles.image}
                    source={{
                        uri: data.thumbImage
                            ? data.thumbImage
                            : 'https://image.shopmoment.com/general/product/_800x800_crop_center-center_82_none/Moment-Autonomous-SmartDesk2Premium-thumbnail.jpg?mtime=20200407162750&focal=none&tmtime=20201022122734',
                    }}
                    resizeMode="cover"
                />
                <AppView style={styles.chipContent} horizontal alignItemsCenter>
                    <AppText style={styles.deviceName} numberOfLines={1}>
                        {data.name}
                    </AppText>

                    {data.isSmartDevice && <IconBluetooh width={15} height={15} />}
                </AppView>
            </TouchableOpacity>
        );
    };

    const getItemLayout = (index: any) => {
        return {
            length: FIXED_ITEM_HEIGHT,
            offset: FIXED_ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
            index,
        };
    };

    return (
        <AppView style={styles.container}>
            <AppText style={styles.title}>{t('place.asset_title')}</AppText>
            <FlatList
                style={styles.list}
                scrollEnabled={false}
                data={props.data}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                contentContainerStyle={styles.contentContainer}
                numColumns={NUM_COLUMNS}
                keyExtractor={(item, index) => `${item}${index}`}
                renderItem={({ item, index }) => {
                    return renderItem(item);
                }}
                ItemSeparatorComponent={() => <Space height={AppSpacing.MEDIUM} />}
                getItemLayout={(data, index) => getItemLayout(index)}
            />
        </AppView>
    );
};
