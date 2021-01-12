import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Logo from 'src/assets/images/logo_black.svg';
import { PrimaryButton, SecondaryButton } from 'src/components/button';
import { RootState } from 'src/redux/types';
import { RouteName } from 'src/routers/routeName';
import { styles } from './style';
import { Props, VerifyState } from './types';


const Intro = (props: Props) => {
    const verifyStateInitial = VerifyState.VERIFYING
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const [verifyState, setVerifyState] = useState(verifyStateInitial);
    const userReducer = useSelector((state: RootState) => state.userReducer)
    const requestReducer = useSelector((state: RootState) => state.requestReducer)

    const renderActionButton = () => {
        //It should be improve, status begin with verifying(don't show button) verified(true -> login/ faile stay in this screen)
        
        switch (requestReducer.isLoading) {
            case true: return null
            default: return <View style={styles.containerButton} >
                <PrimaryButton title={t('intro.login')}
                    style={styles.button}
                    wrapperContainer={styles.wrapperButton}
                    onPress={() => logIn()}
                />
                <SecondaryButton title={t('intro.register')}
                    style={styles.button}
                    wrapperContainer={styles.wrapperButton}
                    onPress={() => register()} />

            </View>
        }

    }


    
    return (
        <View style={styles.container}>
            <View style={styles.wrapperLogo}>
                <Logo style={styles.logo} width={180} height={180} />
            </View>
            {renderActionButton()}


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
