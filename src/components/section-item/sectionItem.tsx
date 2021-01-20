import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import { AppText } from '..';
import AppView from '../view';
import { styles } from './styles';
import { SectionItemProps } from './types';

const SectionItem = (props: SectionItemProps) => {
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
