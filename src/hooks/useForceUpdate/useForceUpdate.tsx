import React, { useEffect, useState } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';
import { View } from 'react-native';
import { Loading } from 'src/components/loading';
import { checkVersionCode, onUpdate } from './actions';
import { Log } from 'src/helpers/logger';
import { DEFAULT_VERSION_CODE } from './types';

const EXPIRATION_DURATION_SECONDS = 10;

export const useForceUpdate = (): [() => JSX.Element, boolean] => {
    const [isChecking, setIsChecking] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRemoteConfig = async () => {
        try {
            await remoteConfig().setDefaults({
                version_code: JSON.stringify(DEFAULT_VERSION_CODE),
            });
            await remoteConfig().setConfigSettings({
                fetchTimeMillis: 30000,
            });
            await remoteConfig().fetch(EXPIRATION_DURATION_SECONDS);
            let fetchedRemotely = await remoteConfig().fetchAndActivate();
            setIsLoading(false);
            if (fetchedRemotely) {
                // check version code and show popup force update or recommend update
                checkVersionCode(onUpdate, () => setIsChecking(false), setIsChecking);
                // define remote config variables below
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
