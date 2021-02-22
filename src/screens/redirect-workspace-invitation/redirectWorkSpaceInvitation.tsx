import _ from 'lodash';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Preference } from 'src/common/preference';
import { Loading } from 'src/components/loading';
import { createRequestErrorMessageAction } from 'src/redux/request';
import { RootState } from 'src/redux/types';
import { requestValidateAccessTokenAction } from 'src/redux/user';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { checkExistingEmailByToken } from './actions';
import { Props } from './types';

const DeepLinkWorkSpaceInvitation = (props: Props) => {
    const token = props.route.params?.token;
    const isLoggedIn = useSelector((state: RootState) => state.userReducer.isValidToken);

    const dispatch = useDispatch();
    useEffect(() => {
        // const token = _.get(props, 'route.params.token', '');
        // if (token) {
        //     Preference.saveAccessToken(token).then(() => {
        //         dispatch(requestValidateAccessTokenAction());
        //     });
        // } else {
        //     dispatch(createRequestErrorMessageAction('Can not parse the token data'));
        // }
        if (isLoggedIn) {
            navigate(RouteName.SWITCH_WORKSPACE, {});
        } else {
            checkExistingEmail();
        }
    }, [token]);

    async function checkExistingEmail() {
        const response = await checkExistingEmailByToken(token);
        if (response) {
            if (response.existing) {
                Preference.saveAccessToken(token).then(() => {
                    dispatch(requestValidateAccessTokenAction());
                });
            } else {
                navigate(RouteName.REGISTER, { token: token, email: response.email });
            }
        }
    }

    return <Loading />;
};

export default DeepLinkWorkSpaceInvitation;
