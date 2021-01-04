import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Logo from 'src/assets/logo_black.svg'
const Intro = (props: any) => {
    return (
        <View style={styles.container}>
            <Logo width={120} height={40} />
        </View>
    )
};
export default Intro;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        flex: 1
    } 
})