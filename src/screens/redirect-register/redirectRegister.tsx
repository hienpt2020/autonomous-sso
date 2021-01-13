import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from 'src/components/loading';
import { Log } from 'src/helpers/logger';
import { createRequestErrorMessageAction } from 'src/redux/request';
import { KEY_ACCESS_TOKEN, requestValidateAccessTokenAction } from 'src/redux/user';
import { Props } from './types';


const Deeplink = (props: Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = _.get(props, 'route.params.token', "")
        if (token) {
            Log.debug(token)
            AsyncStorage.setItem(KEY_ACCESS_TOKEN, token)
            .then(()=> { dispatch(requestValidateAccessTokenAction()) })
        } else {
            dispatch(createRequestErrorMessageAction("Can not parse the token data"))
        }
    }, [])
    return (<Loading />)
};

export default Deeplink;
