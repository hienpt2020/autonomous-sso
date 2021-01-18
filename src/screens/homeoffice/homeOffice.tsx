import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Space } from 'src/components';
import { LargeHeader, Header } from 'src/components/header';
import WorkLayout from 'src/models/WorkLayout';
import { setWorkLayoutAction } from 'src/redux/booking/bookingAction';
import { RootState } from 'src/redux/types';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { AppSpacing } from 'src/styles';
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
            <Header title={'Booking'} />
            <Space height={25} />
            <LargeHeader style={styles.header} title={t('home.title')} subTitle={t('home.sub_title')} />
            <Space height={25} />
            {/* <Button
                title={'Test'}
                onPress={() => {
                    showPopup('Sucess', 'bbsdfasdfsdafaksfhsdkfhjksfhjksdhjkb', null, [
                        {
                            onPress: () => {
                                reactotron.log('aa');
                            },
                            title: 'Ok',
                        },
                        {
                            onPress: () => {
                                reactotron.log('bb');
                            },
                            title: 'Cancel',
                            style: 'negative',
                        },
                    ]);
                }}
            /> */}

            {isLoading ? (
                <Loading />
            ) : workLayouts.length > 0 ? (
                <FlatList
                    // style={styles.list}
                    contentContainerStyle={styles.list}
                    data={workLayouts}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item) => item.id + ''}
                    ItemSeparatorComponent={() => <Space height={AppSpacing.LARGE} />}
                />
            ) : (
                <Empty />
            )}
            {/* {_renderFloatingButton()} */}
        </SafeAreaView>
    );
};

export default Office;
