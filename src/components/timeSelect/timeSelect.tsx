import moment from 'moment';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IcArrowDownBlue from 'src/assets/images/ic_arrow_down_blue.svg';
import IcArrowLeft from 'src/assets/images/ic_arrow_left_outline.svg';
import IcArrowRight from 'src/assets/images/ic_arrow_right_outline.svg';
import { AppColor } from 'src/styles';
import { AppView } from '..';
import AppText from '../text';
import { styles } from './styles';
import { TimeSelectProps } from './types';

const TimeSelect: React.FC<TimeSelectProps> = ({
    style,
    title = '',
    from,
    to,
    onPressFrom,
    onPressTo,
    isSelect = true,
}: TimeSelectProps) => {
    const { t } = useTranslation();
    return (
        <View style={[styles.container, style]}>
            {title ? <AppText style={styles.title}>{title}</AppText> : null}
            <TouchableOpacity onPress={onPressFrom} disabled={!isSelect}>
                <AppView style={styles.itemContainer} horizontal alignItemsCenter spaceBetween>
                    <IcArrowRight width={15.5} height={15.5} />
                    <Text style={styles.date}>
                        <AppText>{t('common.from') + ': '}</AppText>
                        <AppText bold={isSelect} color={isSelect ? AppColor.BLUE_1 : AppColor.GREY_1}>
                            {moment(from).format('MMM Do, YYYY | HH:ss A')}
                        </AppText>
                    </Text>
                    {isSelect && <IcArrowDownBlue height={9.33} width={9.33} />}
                </AppView>
            </TouchableOpacity>

            <View style={styles.divider}></View>

            <TouchableOpacity onPress={onPressTo} disabled={!isSelect}>
                <AppView style={styles.itemContainer} horizontal alignItemsCenter spaceBetween>
                    <IcArrowLeft width={15.5} height={15.5} />
                    <Text style={styles.date}>
                        <AppText>{t('common.until') + ': '}</AppText>
                        <AppText bold={isSelect} color={isSelect ? AppColor.BLUE_1 : AppColor.GREY_1}>
                            {moment(to).format('MMM Do, YYYY | HH:ss A')}
                        </AppText>
                    </Text>
                    {isSelect && <IcArrowDownBlue height={9.33} width={9.33} />}
                </AppView>
            </TouchableOpacity>
        </View>
    );
};

export default TimeSelect;
