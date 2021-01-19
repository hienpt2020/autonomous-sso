import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'src/components/header';
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { Empty } from 'src/components/empty';
import { SectionList, View, Text } from 'react-native';
import { Loading } from '../../components/loading';
import { CardItem } from './card';
import { navigate } from '../../routers/rootNavigation';
import { RouteName } from '../../routers/routeName';
import Device from '../../models/Device';

const fakeData = [
    {
        layout_name: '',
        data: [{ id: 1, hubId: '52ynaexyt', name: 'Smart Desk X', image: '', workingLayoutId: '1' }],
    },
];
const Controll = (props: Props) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {}, []);

    const renderItem = (item: Device) => (
        <CardItem cardData={item} onPress={() => navigate(RouteName.CONTROL, { device: item })} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('controll.title')} />
            {isLoading ? (
                <Loading />
            ) : fakeData.length > 0 ? (
                <SectionList
                    sections={fakeData}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={({ item }) => renderItem(item)}
                    // renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
                />
            ) : (
                <Empty />
            )}
        </SafeAreaView>
    );
};

export default Controll;
