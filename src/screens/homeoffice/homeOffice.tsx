import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'src/components/header';
import WorkLayout from 'src/models/WorkLayout';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { Empty } from '../../components/empty';
import { Loading } from '../../components/loading/loading';
import { getWorkLayout } from './actions/homeAction';
import { CardData, CardItem } from './card';
import FoatingButton from './floatingButton';
import { styles } from './styles';
import { Props } from './types';
import { RootState } from 'src/redux/types';

const Office = (props: Props) => {
    const { t } = useTranslation();
    const workspaceReducer = useSelector((state: RootState) => state.workspaceReducer);
    const [workLayouts, setWorkLayouts] = useState<WorkLayout[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        getWorkLayout(workspaceReducer.id)
            .then((data) => {
                setWorkLayouts(data);
            })
            .catch(() => {})
            .finally(() => {
                setIsLoading(false);
            });
    }, [workspaceReducer.id]);

    const renderItem = (data: CardData) => {
        return <CardItem cardData={data} onPress={() => onItemSelected(data)} />;
    };

    const _onPressMyBooking = () => {
        navigate(RouteName.BOOKING_HISTORY, null);
    };

    const _renderFloatingButton = () => {
        return <FoatingButton onPress={_onPressMyBooking} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title={t('office.title')} />

            {isLoading ? (
                <Loading />
            ) : workLayouts.length > 0 ? (
                <FlatList
                    data={workLayouts}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item) => item.id + ''}
                />
            ) : (
                <Empty />
            )}
            {_renderFloatingButton()}
        </SafeAreaView>
    );
    function onItemSelected(data: CardData) {
        props.navigation.navigate(RouteName.MAP, { floorId: data.id, floorName: data.name });
    }
};

export default Office;
