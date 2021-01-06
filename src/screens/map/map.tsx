import * as React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from 'src/components/header'
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';
import { CardItem, CardData } from './card';
import { IconButton } from './iconbutton';


const Map = (props: Props) => {

    const initialData: CardData[] = []
    const { t } = useTranslation()
    const [mapData, setMapData] = useState(initialData)
    const presenter: Presenter = new PresenterImpl()
    const FIXED_ITEM_HEIGHT = 140
    const NUM_COLUMNS = 2

    useEffect(() => {
        setMapData(presenter.fetchMap())
    }, [])
    const renderItem = (data: CardData) => {
        return (<CardItem cardData={data} />)
    }

    const getItemLayout = (data: any, index: any) => {
        return ({
            length: FIXED_ITEM_HEIGHT,
            offset: FIXED_ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
            index
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <BackHeader title={props.title} onPress={() => handleBack()} />
            <View style={styles.buttonContainer}>
                <IconButton title="09:00 Mar 31" />
                <IconButton title="09:00 Mar 31" />
            </View>
            <FlatList
                data={mapData}
                style={{ paddingStart: 8, paddingEnd: 8 }}
                keyExtractor={(item, index) => `${item.id}${index}`}
                numColumns={NUM_COLUMNS}
                renderItem={({ item }) => renderItem(item)}
                getItemLayout={(data, index) => getItemLayout(data, index)}
            />
        </SafeAreaView>
    )

    function handleBack() {
        props.navigation.goBack()
    }
};

export default Map;
