import _ from 'lodash';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Preference } from 'src/common/preference';
import { Loading } from 'src/components/loading';
import { createRequestErrorMessageAction } from 'src/redux/request';
import { requestValidateAccessTokenAction } from 'src/redux/user';
import { Props } from './types';


const Deeplink = (props: Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = _.get(props, 'route.params.token', "")
        if (token) {
            Preference.saveAccessToken(token)
                .then(() => { dispatch(requestValidateAccessTokenAction()) })
        } else {
            dispatch(createRequestErrorMessageAction("Can not parse the token data"))
        }
    }, [])
    return (<Loading />)
};

export default Deeplink;
