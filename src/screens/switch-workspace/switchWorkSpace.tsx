import _ from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Check from 'src/assets/images/check_light.svg';
import Icon from 'src/assets/images/office_building.svg';
import { PrimaryButton } from 'src/components/button';
import { Empty } from 'src/components/empty';
import { BackHeader } from 'src/components/header';
import { Loading } from 'src/components/loading/loading';
import { WorkSpace } from 'src/models';
import { createRequestErrorMessageAction } from 'src/redux/request';
import { RootState } from 'src/redux/types';
import { createActionSetWorkSpace } from 'src/redux/workspace/workspaceAction';
import { fetchWorkSpaces, setCurrentWorkSpaces } from './actions/switchWorkSpaceAction';
import { styles } from './styles';
import { Props } from './types';


const SwitchWorkSpace = (props: Props) => {

    const initialData: WorkSpace[] = []

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [workSpaceData, setWorkSpaceData] = useState(initialData)
    const [selected, setSelected] = useState(-1)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const workspaceReducer = useSelector((state: RootState) => state.workspaceReducer)

    useEffect(() => {
        setIsLoading(true)
        fetchWorkSpaces().then(data => {
            setWorkSpaceData(data)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])
    useEffect(() => {
        setSelected(workSpaceData.findIndex(item => item.id === workspaceReducer.id))
    }, [workSpaceData, workspaceReducer.id])

    const flatListItemSeparator = () => {
        return (
            <View style={styles.divider}
            />
        );
    }

    const renderItem = (data: WorkSpace, index: number) => {
        return (
            <TouchableOpacity onPress={() => { setSelected(index) }}>
                <View style={styles.itemContainer}>
                    <Icon width="16" height="16" />
                    <Text style={[styles.content]}>{data.name}</Text>
                    {index === selected ? <Check width="32" height="32" style={styles.chipIcon} /> : null}

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <BackHeader title={t('switch_workspace.title')} onPress={() => handleBack()} />
                {isLoading ? (
                    <Loading />
                ) : workSpaceData.length > 0 ? (
                    <>
                        <FlatList
                            data={workSpaceData}
                            style={{ paddingStart: 16, paddingEnd: 16 }}
                            keyExtractor={(item, index) => `${item.id}${index}`}
                            ItemSeparatorComponent={flatListItemSeparator}
                            renderItem={({ item, index }) => renderItem(item, index)}
                        />
                        <PrimaryButton containerStyle={styles.buttonContainer} title="Save" onPress={() => { requestUpdateCurrentWorkSpace() }} />
                    </>
                ) : (
                            <Empty />
                        )}
            </SafeAreaView>
        </View>
    )

    function requestUpdateCurrentWorkSpace() {
        const cache = _.get(workSpaceData, selected)
        if (cache && cache.id != workspaceReducer.id) {
            setIsLoading(true)
            setCurrentWorkSpaces(cache).then((data) =>
                dispatch(createActionSetWorkSpace(cache))
            ).catch((exception) => {
                dispatch(createRequestErrorMessageAction(t('common.error')))
            }).finally(() => {
                setIsLoading(false)
                props.navigation.goBack()
            })
        } else {
            props.navigation.goBack()
        }
    }

    function handleBack() {
        props.navigation.goBack()
    }
};

export default SwitchWorkSpace;
