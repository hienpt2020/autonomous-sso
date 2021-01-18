import * as React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import AppView from '../view';
import { SpaceProps } from './types';
import IconLocation from 'src/assets/images/ic_location.svg';
import { AppText, Space } from '..';

const workSpaceInfo: React.FC<SpaceProps> = ({ workLayout }: SpaceProps) => {
    return (
        <AppView horizontal style={styles.container}>
            <IconLocation width={17} height={20} />
            <Space width={11.5} />
            <AppView>
                <AppText>{workLayout.name}</AppText>
                <AppText>{workLayout.address}</AppText>
            </AppView>
        </AppView>
    );
};

export default workSpaceInfo;
