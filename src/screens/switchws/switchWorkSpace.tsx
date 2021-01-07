import * as React from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from 'src/components/header'
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { WorkSpaceData } from './types';
import Icon from 'src/assets/images/office_building.svg'
import Check from 'src/assets/images/check_light.svg'


const SwitchWorkSpace = (props: Props) => {

    const initialData: WorkSpaceData[] = [new WorkSpaceData("1", "Autonomous", ""), new WorkSpaceData("1", "Autonomous", "")]
    const presenter: Presenter = new PresenterImpl()

    const { t } = useTranslation()
    const [workSpaceData, setWorkSpaceData] = useState(initialData)
    const [selected, setSelected] = useState(1)

    useEffect(() => {
        setWorkSpaceData(presenter.fetchWorkSpace())
    }, [])

    const flatListItemSeparator = () => {
        return (
            <View style={styles.divider}
            />
        );
    }

    const renderItem = (data: WorkSpaceData, index: number) => {
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
                <FlatList
                    data={workSpaceData}
                    style={{ paddingStart: 16, paddingEnd: 16 }}
                    keyExtractor={(item, index) => `${item.id}${index}`}
                    ItemSeparatorComponent={flatListItemSeparator}
                    renderItem={({ item, index }) => renderItem(item, index)}
                />
            </SafeAreaView>
        </View>
    )


    function handleBack() {
        props.navigation.goBack()
    }
};

export default SwitchWorkSpace;
