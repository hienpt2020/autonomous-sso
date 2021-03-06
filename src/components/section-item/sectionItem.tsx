import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import IconArrowRight from 'src/assets/images/ic_arrow_right.svg';
import { AppText } from '..';
import AppView from '../view';
import { styles } from './styles';
import { SectionItemProps } from './types';

const SectionItem = (props: SectionItemProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
            <AppView horizontal style={styles.container} alignItemsCenter>
                <AppView>
                    <AppText style={styles.title}>{props.title}</AppText>
                    {props.hasNotification && <AppView style={styles.notification} />}
                </AppView>
                <AppView style={styles.space}></AppView>
                <AppText style={props.onPress !== undefined ? styles.value : styles.valueDisable}>
                    {props.value}
                </AppText>
                {props.onPress !== undefined && !props.isWithoutArrow ? (
                    <IconArrowRight width={24} height={24} />
                ) : null}
            </AppView>
        </TouchableOpacity>
    );
};

export default SectionItem;
