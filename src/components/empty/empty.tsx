import * as React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Icon from 'src/assets/images/empty.svg';
import AppText from '../text';
import { Props } from './types';
import { useTranslation } from 'react-i18next';

export const Empty = ({ iconWidth, iconHeight, description, title, containerStyles, children }: Props) => {
    const { t } = useTranslation();
    return (
        <View style={[styles.wrapper, containerStyles]}>
            <View style={{ width: iconWidth, height: iconHeight }}>
                <Icon />
            </View>
            <View>
                <AppText style={styles.titleText}>{title || t('common.empty_title_default')}</AppText>
                <AppText style={styles.descriptionText}>{description}</AppText>
                {children}
            </View>
        </View>
    );
};
