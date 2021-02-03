import * as React from 'react';
import { useTranslation } from 'react-i18next';
import DefaultIcon from 'src/assets/images/empty.svg';
import { Space } from '..';
import { AppSpacing } from '../../styles';
import AppText from '../text';
import AppView from '../view';
import { styles } from './styles';
import { Props } from './types';

const DEFAULT_ICON_SIZE = 182;

export const Empty = ({ icon, description, title, containerStyles, children }: Props) => {
    const { t } = useTranslation();
    return (
        <AppView style={[styles.wrapper, containerStyles]} center>
            {icon ? icon : <DefaultIcon width={DEFAULT_ICON_SIZE} height={DEFAULT_ICON_SIZE} />}
            <Space height={AppSpacing.MEDIUM} />
            <AppText style={styles.titleText}>{title || t('common.empty_title_default')}</AppText>
            <AppText style={styles.descriptionText}>{description}</AppText>
            {children}
        </AppView>
    );
};
