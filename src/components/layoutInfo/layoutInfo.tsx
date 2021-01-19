import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import IconLocation from 'src/assets/images/ic_location.svg';
import { AppColor, AppFontSize } from 'src/styles';
import { AppText, Space } from '..';
import AppView from '../view';
import { styles } from './styles';
import { SpaceProps } from './types';

const LayoutInfo: React.FC<SpaceProps> = ({ workLayout, style }: SpaceProps) => {
    const { t } = useTranslation();

    return (
        <AppView horizontal style={[styles.container, style]}>
            <IconLocation width={17} height={20} />
            <Space width={11.5} />
            <AppView style={styles.infoContainer}>
                <AppText size={AppFontSize.SIZE_16} supperBold>
                    {workLayout.name}
                </AppText>
                <Space height={4} />
                <AppText style={styles.address} size={AppFontSize.SIZE_11} color={AppColor.GREY_1}>
                    {workLayout.address}
                </AppText>
                <Space height={5} />
                <Text>
                    <AppText size={AppFontSize.SIZE_11} color={AppColor.BLUE_1} bold>
                        {workLayout.placeAvailable + ' '}
                    </AppText>

                    <AppText size={AppFontSize.SIZE_11} color={AppColor.GREY_1}>
                        {t('common.slot_available')}
                    </AppText>
                </Text>
            </AppView>
        </AppView>
    );
};

export default LayoutInfo;
