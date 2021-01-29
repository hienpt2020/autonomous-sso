import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconTicket from 'src/assets/images/ic_ticket.svg';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import { AppText, AppView, Space } from 'src/components';
import { getImage } from 'src/helpers/imageHelper';
import { AppColor, AppFontSize } from 'src/styles';
import { styles } from './styles';
import { Props } from './types';

const CardItem = (props: Props) => {
    const { t } = useTranslation();

    const cardData = props.cardData;

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
            <FastImage style={styles.coverImage} source={getImage(cardData.image)} />
            <AppView style={styles.infoContainer} horizontal alignItemsCenter>
                <View style={styles.leftContainer}>
                    <AppText style={styles.itemSubTitle} size={AppFontSize.SIZE_18} bold lineHeight={24}>
                        {cardData.name}
                    </AppText>

                    <AppView style={styles.ticketContainer} horizontal alignItemsCenter>
                        <IconTicket style={styles.iconTicket} width={20} height={20} />

                        <Space width={5} />

                        <AppText color={AppColor.BLUE_1} bold size={AppFontSize.SIZE_13}>
                            {cardData.placeAvailable.toString()}
                        </AppText>

                        <Space width={3} />

                        <AppText size={AppFontSize.SIZE_13}>{t('common.available')}</AppText>
                    </AppView>
                </View>

                <IconArrowRight width={24} height={24} />
            </AppView>
        </TouchableOpacity>
    );
};
export default CardItem;
