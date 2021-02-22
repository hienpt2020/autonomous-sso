import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from 'src/components';
import { styles } from './styles';
import Icon from 'src/assets/images/ic_splash.svg';

const Launcher = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Icon width={60} height={60} style={styles.logo} />
            <AppText style={styles.text}>www.autonomous.ai</AppText>
        </SafeAreaView>
    );
};
export default Launcher;
