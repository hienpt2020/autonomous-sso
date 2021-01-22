import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconAdd from 'src/assets/images/ic_add.svg';
import { AppText, AppView, Space } from 'src/components';
import reactotron from 'src/config/configReactoron';
import { getImage } from 'src/helpers/imageHelper';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';
import { styles } from './styles';
import { Props } from './types';

const CardItem = (props: Props) => {
    const cardData = props.cardData;
    const { t } = useTranslation();

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.itemContainer]}>
                <FastImage style={styles.coverImage} source={getImage(cardData.thumbImageUrl)} resizeMode="cover" />
                <AppView style={styles.infoContainer} horizontal alignItemsCenter>
                    <AppText
                        style={styles.itemTitle}
                        bold
                        size={AppFontSize.SIZE_14}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {cardData.name}
                    </AppText>
                    <Space width={AppSpacing.SMALL} />
                    <AppView style={styles.button} horizontal center>
                        <IconAdd width={7} height={7} />
                        <Space width={6} />
                        <AppText
                            bold
                            size={AppFontSize.SIZE_10}
                            color={AppColor.WHITE}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {t('office.view')}
                        </AppText>
                    </AppView>
                </AppView>
            </View>
        </TouchableOpacity>
    );
};
export default CardItem;
