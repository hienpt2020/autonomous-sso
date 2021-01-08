import * as React from 'react'
import { View, Dimensions, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types'
import BluetoothWhite from 'src/assets/images/bluetooth_white.svg'
import Bolt from 'src/assets/images/bolt.svg'
import BoltWhite from 'src/assets/images/bolt_white.svg'

const imageWidth = Dimensions.get('window').width;
export const Device = (props: Props) => {
    const NUM_COLUMNS = 2
    const FIXED_ITEM_HEIGHT = 40

    const renderItem = (data: string) => {
        return (<View style={styles.chipContainer}>
            <Text style={[styles.chipContent]}>{data}</Text>
            <Bolt width="24" height="24" style={styles.chipIcon} />
        </View>)
    }

    const renderMutableItem = (data: string) => {
        return (<View style={styles.chipMutableContainer}>
            <Text style={[styles.chipMutableContent]}>{data}</Text>
            <BoltWhite width="24" height="24" style={styles.chipIcon} />
            <BluetoothWhite width="16" height="16" style={styles.chipMutableIcon} />
        </View>)
    }

    const getItemLayout = (data: any, index: any) => {
        return ({
            length: FIXED_ITEM_HEIGHT,
            offset: FIXED_ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
            index
        })
    }

    return (
        <FlatList
            data={props.data}
            style={[styles.list, props.containerStyle]}
            numColumns={NUM_COLUMNS}
            keyExtractor={(item, index) => `${item}${index}`}
            renderItem={({ item, index }) => {
                let isMutable = index === 0
                return isMutable ? renderMutableItem(item) : renderItem(item)
            }}
            getItemLayout={(data, index) => getItemLayout(data, index)}
        />
    )
}
