import * as React from 'react';
import { FlatList } from 'react-native';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';
import { AppText, AppView, Space } from '..';
import { styles } from './styles';
import { Props } from './types';
export const Chip = (props: Props) => {
    const FIXED_ITEM_HEIGHT = 40;

    const renderItem = (data: string) => {
        return (
            <AppView style={styles.chipContainer} center>
                <AppText bold color={AppColor.BLUE_3} size={AppFontSize.SIZE_12}>
                    {data}
                </AppText>
            </AppView>
        );
    };

    const getItemLayout = (data: any, index: any) => {
        return {
            length: FIXED_ITEM_HEIGHT,
            offset: FIXED_ITEM_HEIGHT * index,
            index,
        };
    };

    return (
        <AppView style={styles.container} justifyContentCenter>
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={props.data}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item, index) => `${item}${index}`}
                renderItem={({ item, index }) => renderItem(item)}
                getItemLayout={(data, index) => getItemLayout(data, index)}
                ItemSeparatorComponent={() => <Space width={AppSpacing.SMALL} />}
            />
        </AppView>
    );
};
