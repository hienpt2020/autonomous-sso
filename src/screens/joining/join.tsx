import * as React from 'react';
import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from 'src/components/button';
import { Header } from 'src/components/header';
import { REQUEST_END, REQUEST_START } from 'src/redux/request/requestType';
import { Props } from './types';
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';
import { joinWorkSpaceAction } from './actions/joinAction';
import { Preference } from 'src/common/preference';
import { requestValidateAccessTokenAction } from 'src/redux/user';
import { WorkSpace } from 'src/models';
import { setCurrentWorkSpaces } from '../switch-workspace/actions/switchWorkSpaceAction';
import { createActionSetWorkSpace } from 'src/redux/workspace/workspaceAction';
import { createRequestErrorMessageAction } from 'src/redux/request';
import { NetworkingConfig } from 'src/services/networking';

const Join = (props: Props) => {
    const { t } = useTranslation();
    const redirectToken = props.route.params?.token;
    const accessToken = props.route.params?.access_token;
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <Header title={t('join.join_workspace')} />
                <Text style={styles.term}>
                    {t('join.content')}
                    {/* <Text style={styles.link}>{props.route.params.workspace}</Text> */}
                </Text>
                <View style={{ flex: 1 }} />
                <PrimaryButton title={t('common.join')} wrapperContainer={styles.button} onPress={() => handleJoin()} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

    async function handleJoin() {
        const workSpace: WorkSpace = await joinWorkSpaceAction(redirectToken);
        if (workSpace) {
            // if (accessToken) {
            //     Preference.saveAccessToken(accessToken).then(() => {
            //         dispatch(requestValidateAccessTokenAction);
            //     });
            // } else {
            //     props.navigation.navigate(RouteName.HOME);
            // }
            requestUpdateCurrentWorkSpace(workSpace);
        }
    }

    function requestUpdateCurrentWorkSpace(workSpace: WorkSpace) {
        // setIsLoading(true);
        if (accessToken) {
            NetworkingConfig.putCommonHeaderWithToken(accessToken);
        }

        setCurrentWorkSpaces(workSpace)
            .then((data) => {
                if (accessToken) {
                    Preference.saveAccessToken(accessToken).then(() => {
                        dispatch(requestValidateAccessTokenAction);
                    });
                } else {
                    dispatch(createActionSetWorkSpace(workSpace));
                }
            })
            .catch((exception) => {
                dispatch(createRequestErrorMessageAction(t('common.error_message')));
            })
            .finally(() => {
                // setIsLoading(false);
                props.navigation.goBack();
            });
    }
};

export default Join;
