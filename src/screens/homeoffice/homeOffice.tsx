import * as React from 'react'
import { Image, SectionList, Text, View, Dimensions } from 'react-native';
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'src/components/header'
import { useTranslation } from 'react-i18next';
import { Props, SectionData, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';
import { CardItem, CardData } from './card';
import { Card } from 'react-native-elements';

const Office = (props: Props) => {

    const initialData: SectionData[] = []
    const { t } = useTranslation()
    const [sectionData, setSectionData] = useState(initialData)
    const presenter: Presenter = new PresenterImpl()

    useEffect(() => {
        let floorsResult = presenter.fetchFloor()
        setSectionData(floorsResult)
    }, [])
    const renderItem = (data: CardData) => {
        return (<CardItem cardData={data} onPress={() => onItemSelected(data)} />)
    }
    const renderHeader = (title: string) => {
        return (<Text style={styles.header}>{title}</Text>)
    }
    const getItemLayout = (data: any, index: any) => {
        return ({ length: 180, offset: 180 * index, index })
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('office.title')} />
            <SectionList
                sections={sectionData}
                stickySectionHeadersEnabled={false}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => renderItem(item)}
                getItemLayout={(data, index) => getItemLayout(data, index)}
                renderSectionHeader={({ section: { title } }) => renderHeader(title)}
            />
        </SafeAreaView>
    )
    function onItemSelected(data: CardData) {
        props.navigation.navigate(RouteName.MAP, { floorId: data.id, floorName: data.name })
    }

};

export default Office;
