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

const fakeData = [
    {
        layout_name: '',
        data: [
            { name: 'Pizza', image: '' },
            { name: 'Pizza', image: '' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Pizza', image: '' },
            { name: 'Pizza', image: '' },
        ],
    },
    {
        title: 'Drinks',
        data: [
            { name: 'Pizza', image: '' },
            { name: 'Pizza', image: '' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Pizza', image: '' },
            { name: 'Pizza', image: '' },
        ],
    },
];
const Controll = (props: Props) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {}, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('controll.title')} />
            {isLoading ? (
                <Loading />
            ) : (
                <SectionList
                    sections={fakeData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <CardItem cardData={item} onPress={() => navigate(RouteName.CONTROL, null)} />
                    )}
                    // renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
                />
            )}
            {/*<Empty />*/}
        </SafeAreaView>
    );
};

export default Controll;
