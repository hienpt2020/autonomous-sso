import _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Check from 'src/assets/images/ic_check.svg';
import Uncheck from 'src/assets/images/ic_check_none.svg';
import { AppText, AppView, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import { Empty } from 'src/components/empty';
import { BackHeader } from 'src/components/header';
import { Loading } from 'src/components/loading/loading';
import { WorkSpace } from 'src/models';
import { createRequestErrorMessageAction } from 'src/redux/request';
import { RootState } from 'src/redux/types';
import { createActionSetWorkSpace } from 'src/redux/workspace/workspaceAction';
import { AppSpacing } from 'src/styles';
import { fetchWorkSpaces, setCurrentWorkSpaces } from './actions/switchWorkSpaceAction';
import { styles } from './styles';
import { Props } from './types';

const SwitchWorkSpace = (props: Props) => {
    const initialData: WorkSpace[] = [];

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [workSpaceData, setWorkSpaceData] = useState(initialData);
    const [selected, setSelected] = useState(-1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const workspaceReducer = useSelector((state: RootState) => state.workspaceReducer);

    useEffect(() => {
        setIsLoading(true);
        fetchWorkSpaces()
            .then((data) => {
                setWorkSpaceData(data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    useEffect(() => {
        setSelected(workSpaceData.findIndex((item) => item.id === workspaceReducer.id));
    }, [workSpaceData, workspaceReducer.id]);

    const flatListItemSeparator = () => {
        return <View style={styles.divider} />;
    };

    const renderItem = (data: WorkSpace, index: number) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setSelected(index);
                }}
            >
                <View>
                    <Space height={AppSpacing.MEDIUM} />
                    <AppView style={styles.itemContainer}>
                        <AppText style={styles.title}>{data.name}</AppText>
                        {index === selected ? (
                            <Check width="26" height="26" style={styles.chipIcon} />
                        ) : (
                            <Uncheck width="26" height="26" style={styles.chipIcon} />
                        )}
                    </AppView>
                    {_.get(data, 'slotsRemain', 0) === 0 ? null : (
                        <AppView horizontal>
                            <AppText style={[styles.contentHightLight]}>100</AppText>
                            <Space width={AppSpacing.SMALL} />
                            <AppText style={[styles.content]}>slots remain</AppText>
                        </AppView>
                    )}

                    <Space height={AppSpacing.MEDIUM} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <BackHeader title={t('switch_workspace.title')} onPress={() => handleBack()} />
            <Space height={AppSpacing.LARGE} />
            {isLoading ? (
                <Loading />
            ) : workSpaceData.length > 0 ? (
                <>
                    <FlatList
                        data={workSpaceData}
                        style={styles.list}
                        keyExtractor={(item, index) => `${item.id}${index}`}
                        ItemSeparatorComponent={flatListItemSeparator}
                        renderItem={({ item, index }) => renderItem(item, index)}
                    />
                    <Space flex={1} />
                    <PrimaryButton
                        containerStyle={styles.buttonContainer}
                        title={t('common.confirm')}
                        onPress={() => {
                            requestUpdateCurrentWorkSpace();
                        }}
                    />
                    <Space height={AppSpacing.EXTRA} />
                </>
            ) : (
                <Empty />
            )}
        </View>
    );

    function requestUpdateCurrentWorkSpace() {
        const cache = _.get(workSpaceData, selected);
        if (cache && cache.id != workspaceReducer.id) {
            setIsLoading(true);
            setCurrentWorkSpaces(cache)
                .then((data) => dispatch(createActionSetWorkSpace(cache)))
                .catch((exception) => {
                    dispatch(createRequestErrorMessageAction(t('common.error_message')));
                })
                .finally(() => {
                    setIsLoading(false);
                    props.navigation.goBack();
                });
        } else {
            props.navigation.goBack();
        }
    }

    function handleBack() {
        props.navigation.goBack();
    }
};

export default SwitchWorkSpace;
