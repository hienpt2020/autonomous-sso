import * as React from 'react';
import { useEffect, useCallback, useState, useRef } from 'react';
import { View, Dimensions, FlatList, Text, Image } from 'react-native';
import { styles } from './styles';
import { Props } from './types';
import FastImage from 'react-native-fast-image';
import { getImage } from 'src/helpers/imageHelper';

export const ImageSlider = (props: Props) => {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;

    useEffect(() => {
        console.log(props.data);
    });
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const getItemLayout = (data: any, index: any) => {
        return {
            length: props.height,
            offset: props.height * index,
            index,
        };
    };

    const renderItem = (data: string) => {
        return (
            <View>
                <FastImage style={styles.image} source={getImage(data)} resizeMode="cover" />
                <Image style={styles.coverImage} source={require('src/assets/images/image-hover-background.png')} />
            </View>
        );
    };

    return (
        <View style={[styles.sliderContainer, props.containerStyle]}>
            {props.data.length > 0 ? (
                <FlatList
                    data={props.data}
                    style={[styles.list]}
                    keyExtractor={(item, index) => `${item}${index}`}
                    renderItem={({ item, index }) => renderItem(item)}
                    horizontal
                    onScroll={onScroll}
                    pagingEnabled
                    getItemLayout={(data, index) => getItemLayout(data, index)}
                />
            ) : (
                renderItem('')
            )}
            {props.data.length > 0 && (
                <Text style={styles.sliderTitle}>
                    ({index + 1}/{props.data.length})
                </Text>
            )}
        </View>
    );
};
