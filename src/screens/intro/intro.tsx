import * as React from 'react'
import { View } from 'react-native';
import { styles } from './style'
import { PrimaryButton, SecondaryButton } from 'src/components/button';
import Logo from 'src/assets/logo_black.svg'
import { useTranslation } from 'react-i18next';

const Intro = (props: any) => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <View style={styles.wrapperLogo}>
                <Logo style={styles.logo} width={180} height={180} />
            </View>
            <View style={styles.wrapperButton}>
                <PrimaryButton title={t('intro.login')}
                    style={styles.button}
                    onPress={() => logIn()}
                />
                <SecondaryButton title={t('intro.register')}
                    style={styles.button}
                    onPress={() => register()} />

            </View>

        </View >
    )
};
function logIn(): void {

}
function register(): void {

}
export default Intro;
