import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconTicket from 'src/assets/images/ic_ticket.svg';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import { AppText, AppView, Space } from 'src/components';
import { getImage } from 'src/helpers/imageHelper';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';
import { styles } from './styles';
import { Props } from './types';
import { DEFAULT_IMAGES } from 'src/common/constant';

const CardItem = (props: Props) => {
    const { t } = useTranslation();

    const cardData = props.cardData;

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
            <FastImage style={styles.coverImage} source={getImage(cardData.image, DEFAULT_IMAGES.LAYOUT)} />
            <AppView style={styles.infoContainer} horizontal alignItemsCenter>
                <View style={styles.leftContainer}>
                    <AppText style={styles.name} size={AppFontSize.SIZE_18} bold lineHeight={24}>
                        {cardData.name}
                    </AppText>

                    <Space height={AppSpacing.TINY} />

                    <AppView style={styles.ticketContainer} horizontal alignItemsCenter>
                        <AppText style={styles.seatTitle}>{t('home.total') + ' '}</AppText>

                        <AppText style={styles.seatNumber}>
                            {cardData.placeAvailable.toString() + ' ' + t('home.seats')}
                        </AppText>
                        <Space width={AppSpacing.SMALL} />

                        <View style={styles.divider} />

                        <Space width={AppSpacing.SMALL} />

                        <AppText style={styles.seatTitle}>{t('home.booked') + ' '}</AppText>

                        <AppText style={styles.seatNumber}>
                            {cardData.placeAvailable.toString() + ' ' + t('home.seats')}
                        </AppText>
                    </AppView>
                </View>

                <IconArrowRight width={24} height={24} />
            </AppView>
        </TouchableOpacity>
    );
};
export default CardItem;
