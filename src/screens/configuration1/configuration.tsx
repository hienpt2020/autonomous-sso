import * as React from 'react'
import { View, Text, StatusBar, FlatList, ScrollView } from 'react-native';
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { YellowBox } from 'react-native'
import { ImageSlider } from 'src/components/images/images';
import Check from 'src/assets/images/check_light.svg'
import BluetoothLight from 'src/assets/images/bluetooth_light.svg'
//JUST disable this warning
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const ConfigurationStep1 = (props: Props) => {

    const presenter: Presenter = new PresenterImpl()
    const { t } = useTranslation()
    const imageHeight = 221
    const [selected, setSelected] = useState(1)

    useEffect(() => {

    }, [])

    const renderItem = (data: string, index: number) => {
        return (
            <TouchableOpacity onPress={() => { setSelected(index) }}>
                <View style={styles.chipContainer}>
                    <BluetoothLight width="16" height="16" />
                    <Text style={[styles.chipContent]}>{data}</Text>
                    {index === selected ? <Check width="32" height="32" style={styles.chipIcon} /> : null}

                </View>
            </TouchableOpacity>
        )
    }

    const flatListItemSeparator = () => {
        return (
            <View style={styles.divider}
            />
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <ScrollView style={styles.container} nestedScrollEnabled={true}>
                <ImageSlider data={["https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900", "https://source.unsplash.com/wgivdx9dBdQ/1600x900"]}
                    height={imageHeight} />
                <Text style={styles.title}>Seat#1</Text>
                <Text style={styles.subTitle}>Autonomous WorkSpace</Text>
                <Text style={styles.subTitle}>Floor #3</Text>
                <Text style={styles.subTitle}>Seat #1</Text>
                <Text style={styles.sectionTitle}>Available assets</Text>
                <FlatList
                    nestedScrollEnabled={true}
                    data={["smartdesk-abc-1", "smartdesk-abc-2", "smartdesk-abc-3", "smartdesk-abc-4", "smartdesk-abc-5"]}
                    style={[styles.list]}
                    keyExtractor={(item, index) => `${item}${index}`}
                    ItemSeparatorComponent={flatListItemSeparator}
                    renderItem={({ item, index }) => renderItem(item, index)}
                />
            </ScrollView>
            <PrimaryButton wrapperContainer={styles.button} title={t('seat.book_seat')} />
        </View>
    )

    function handleBack() {
        props.navigation.goBack()
    }
};

export default ConfigurationStep1;
