import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import { AppText } from '..';
import Space from '../space';
import AppView from '../view';
import { styles } from './styles';
import { SectionItemProps } from './types';

const SectionItem = (props: SectionItemProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <AppView horizontal style={styles.container}>
                <AppText style={styles.title}>{props.title}</AppText>
                <AppText style={props.onPress !== undefined ? styles.value : styles.valueDisable}>
                    {props.value}
                </AppText>
                {props.onPress !== undefined ? (
                    <IconArrowRight width={24} height={24} />
                ) : (
                    <Space width={24} height={24} />
                )}
            </AppView>
        </TouchableOpacity>
    );
};

export default SectionItem;
