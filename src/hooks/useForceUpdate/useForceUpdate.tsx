import React, { useEffect, useState, useCallback } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import Config from 'react-native-config';
import { View, Platform, Linking } from 'react-native';
import { Loading } from 'src/components/loading';
import { showPopupForceUpdate, showPopupRecommendedUpdate } from './actions';
import { Log } from 'src/helpers/logger';

const EXPIRATION_DURATION_SECONDS = 10;

export const useForceUpdate = (): [() => JSX.Element, boolean] => {
    const [isChecking, setIsChecking] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const onUpdate = useCallback(() => {
        if (Platform.OS === 'android') {
            Linking.canOpenURL(Config.LINK_GG_PLAY + Config.APP_ID)
                .then(() => {
                    Linking.openURL(Config.LINK_GG_PLAY + Config.APP_ID);
                })
                .catch();
        } else if (Platform.OS === 'ios') {
            Linking.canOpenURL(Config.LINK_APP_STORE)
                .then(() => Linking.openURL(Config.LINK_APP_STORE))
                .catch();
        }
    }, []);

    const onCancel = () => {
        setIsChecking(false);
    };

    const handleAfterFetchedDataFromFirebase = (isFetched: boolean) => {
        setIsLoading(false);
        if (isFetched) {
            let minimumVersionCode: number = remoteConfig().getValue('minimumVersionCode').asNumber();
            let recommendVersionCode: number = remoteConfig().getValue('recommendVersionCode').asNumber();
            let currentVersionCode: number = parseInt(Config.APP_BUILD_NUMBER);

            Log.debug(
                '@info version:' +
                    JSON.stringify({
                        minimumVersionCode,
                        recommendVersionCode,
                        currentVersionCode,
                    }),
            );

            if (currentVersionCode < minimumVersionCode) {
                showPopupForceUpdate(onUpdate);
            } else if (currentVersionCode >= minimumVersionCode && currentVersionCode < recommendVersionCode) {
                showPopupRecommendedUpdate(onUpdate, onCancel);
            } else {
                setIsChecking(false);
            }
        } else {
            setIsChecking(false);
        }
    };

    const fetchRemoteConfig = async () => {
        try {
            await remoteConfig().setDefaults({
                minimumVersionCode: 1,
                recommendVersionCode: 1,
            });
            await remoteConfig().setConfigSettings({
                fetchTimeMillis: 30000,
            });
            await remoteConfig().fetch(EXPIRATION_DURATION_SECONDS);
            let fetchedRemotely = await remoteConfig().fetchAndActivate();
            if (fetchedRemotely) {
                handleAfterFetchedDataFromFirebase(fetchedRemotely);
            } else {
                setIsChecking(false);
            }
        } catch (e) {
            Log.error(e);
        }
    };

    const renderViewUpdate = () => (
        <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {isLoading ? <Loading color={'black'} /> : null}
        </View>
    );

    useEffect(() => {
        fetchRemoteConfig();
    }, []);

    return [renderViewUpdate, isChecking];
};
