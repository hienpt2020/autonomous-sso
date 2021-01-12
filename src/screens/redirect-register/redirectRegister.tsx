import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from 'src/components/loading';
import { RootState } from 'src/redux/types';
import { Props } from './types';
import { requestValidateAccessTokenAction } from 'src/redux/user';


const Deeplink = (props: Props) => {
    const dispatch = useDispatch();
    const requestReducer = useSelector((state: RootState) => state.requestReducer)
    useEffect(() => { dispatch(requestValidateAccessTokenAction())},[])
    return (<Loading />)
};

export default Deeplink;
