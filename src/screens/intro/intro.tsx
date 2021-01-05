import * as React from 'react'
import { View } from 'react-native';
import { styles } from './style'
import { PrimaryButton, SecondaryButton } from 'src/components/button';
import Logo from 'src/assets/logo_black.svg'
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { RouteName } from 'src/routers/routeName';

const Intro = (props: Props) => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <View style={styles.wrapperLogo}>
                <Logo style={styles.logo} width={180} height={180} />
            </View>
            <View style={styles.containerButton}>
                <PrimaryButton title={t('intro.login')}
                    style={styles.button}
                    wapperStyle={styles.wrapperButton}
                    onPress={() => logIn()}
                />
                <SecondaryButton title={t('intro.register')}
                    style={styles.button}
                    wapperStyle={styles.wrapperButton}
                    onPress={() => register()} />

            </View>

        </View >
    )
    function logIn(): void {
        props.navigation.navigate(RouteName.LOGIN)
    }
    function register(): void {
        props.navigation.navigate(RouteName.REGISTER)
    }
};

export default Intro;
