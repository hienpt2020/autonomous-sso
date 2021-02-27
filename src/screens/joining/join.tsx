import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { UserAction } from 'src/common/constant';
import { Preference } from 'src/common/preference';
import { AppText, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { BackHeader } from 'src/components/header';
import { Log } from 'src/helpers/logger';
import { WorkSpace } from 'src/models';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request';
import { requestValidateAccessTokenAction } from 'src/redux/user';
import { createActionSetWorkSpace } from 'src/redux/workspace/workspaceAction';
import { NetworkingConfig } from 'src/services/networking';
import { AppSpacing } from 'src/styles';
import { setCurrentWorkSpaces } from '../switch-workspace/actions/switchWorkSpaceAction';
import { joinWorkSpaceAction } from './actions/joinAction';
import { styles } from './styles';
import { Props } from './types';

const Join = (props: Props) => {
    const { t } = useTranslation();
    const redirectToken = props.route.params?.token;
    const accessToken = props.route.params?.access_token;
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <BackHeader title={t('join.join_workspace')} onPress={_onBack} />

            <KeyboardAvoidingView behavior="padding" style={styles.body}>
                <AppText style={styles.term}>
                    {t('join.content')}
                    {/* <Text style={styles.link}>{props.route.params.workspace}</Text> */}
                </AppText>
                <Space height={AppSpacing.LARGE} />
                <PrimaryButton title={t('common.join')} wrapperContainer={styles.button} onPress={() => handleJoin()} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

    async function handleJoin() {
        dispatch(createRequestStartAction());
        if (accessToken) {
            NetworkingConfig.putCommonHeaderWithToken(accessToken);
        }

        const workSpace: WorkSpace = await joinWorkSpaceAction(redirectToken);
        if (workSpace) {
            requestUpdateCurrentWorkSpace(workSpace);
            Log.info(UserAction.AUTH_JOIN_WORK_SPACE, workSpace);
        } else {
            dispatch(createRequestEndAction());
        }
    }

    function requestUpdateCurrentWorkSpace(workSpace: WorkSpace) {
        setCurrentWorkSpaces(workSpace)
            .then((data) => {
                if (accessToken) {
                    Preference.saveAccessToken(accessToken).then(() => {
                        dispatch(requestValidateAccessTokenAction());
                    });
                } else {
                    dispatch(createActionSetWorkSpace(workSpace));
                }
            })
            .catch((exception) => {
                Log.error(exception.toString());
                dispatch(createRequestErrorMessageAction(t('common.error_message')));
            })
            .finally(() => {
                _onBack();
                dispatch(createRequestEndAction());
            });
    }

    function _onBack() {
        props.navigation.goBack();
    }
};

export default Join;
