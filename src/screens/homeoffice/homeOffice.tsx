import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from 'src/components/header';
import WorkLayout from 'src/models/WorkLayout';
import { setWorkLayoutAction } from 'src/redux/booking/bookingAction';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { Empty } from '../../components/empty';
import { Loading } from '../../components/loading/loading';
import { getWorkLayout } from './actions/homeAction';
import { CardItem } from './card';
import FloatingButton from './floatingButton';
import { styles } from './styles';
import { Props } from './types';

const Office = (props: Props) => {
    const { t } = useTranslation();
    const workspaceReducer = useSelector((state: RootState) => state.workspaceReducer);
    const [workLayouts, setWorkLayouts] = useState<WorkLayout[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

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

    const renderItem = (data: WorkLayout) => {
        return <CardItem cardData={data} onPress={() => _onItemSelected(data)} />;
    };

    const _onPressMyBooking = () => {
        navigate(RouteName.BOOKING_HISTORY, null);
    };

    const _renderFloatingButton = () => {
        return <FloatingButton onPress={_onPressMyBooking} />;
    };

    const _onItemSelected = (data: WorkLayout) => {
        dispatch(setWorkLayoutAction(data));
        props.navigation.navigate(RouteName.MAP, { floorId: data.id, floorName: data.name });
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
};

export default Office;
