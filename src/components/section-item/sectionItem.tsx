import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import { AppColor, AppFontSize } from 'src/styles';
import { AppText, Space } from '..';
import AppView from '../view';
import { styles } from './styles';
import { SectionItemProps } from './types';

const SectionItem = (props: SectionItemProps) => {
    const { t } = useTranslation();

    return (
        <TouchableOpacity onPress={props.onPress}>
            <AppView horizontal style={styles.container}>
                <AppText style={styles.title}>{props.title}</AppText>
                <AppText style={styles.value}>{props.value}</AppText>
                <IconArrowRight width={24} height={24} />
            </AppView>
        </TouchableOpacity>
    );
};

export default SectionItem;
