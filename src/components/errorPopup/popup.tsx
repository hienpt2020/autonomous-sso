import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createRequestErrorMessageAction } from 'src/redux/request';
import { RootState } from 'src/redux/types';
import { showPopup } from '..';
import { Props } from './types';
export const Popup = (props: Props) => {
    const requestReducer = useSelector((state: RootState) => state.requestReducer);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        const errorMessage = _.get(requestReducer, 'errorMessage', '');
        if (errorMessage)
            showPopup(t('common.error'), errorMessage, null, [
                {
                    title: t('common.ok'),
                    onPress: () => dispatch(createRequestErrorMessageAction('')),
                },
            ]);
    }, [requestReducer.errorMessage]);
    return null;
};
