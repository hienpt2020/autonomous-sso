import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { BackHeader } from 'src/components/header';
import { styles } from './style';
import { Props } from './types';

const Intro = (props: Props) => {
    return (
        <View style={styles.container}>
            <BackHeader onPress={() => props.navigation.goBack()} />
            <WebView style={styles.container} source={{ uri: props.route.params.url }} />
        </View>
    );
};

export default Intro;
