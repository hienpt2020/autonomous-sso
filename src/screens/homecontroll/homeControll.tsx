import * as React from 'react';
import { useState, useEffect } from 'react';
import { Header } from 'src/components/header';
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { Empty } from 'src/components/empty';
import { View, Text, FlatList } from 'react-native';
import { Loading } from '../../components/loading';
import { CardItem } from './card';
import { navigate } from '../../routers/rootNavigation';
import { RouteName } from '../../routers/routeName';
import Device from '../../models/Device';
import { useDispatch } from 'react-redux';
import { HomeControlActions, IHomeControlActions } from './actions/officeAction';

const Controll = (props: Props) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const dispatch = useDispatch();
    const homeControl: IHomeControlActions = new HomeControlActions(dispatch);
    const [devices, setDevices] = React.useState<Device[]>([]);
    useEffect(() => {
        getDevices();
    }, []);

    const getDevices = () => {
        homeControl
            .getDevices()
            .then((data) => {
                setDevices(data);
            })
            .finally(() => {
                setIsLoading(false);
                setIsRefresh(false);
            });
    };
    const renderItem = (item: Device) => (
        <CardItem cardData={item} onPress={() => navigate(RouteName.CONTROL, { device: item })} />
    );

    const onRefresh = () => {
        setIsRefresh(true);
        getDevices();
    };

    return (
        <View style={styles.container}>
            <Header title={t('controll.title')} />
            {isLoading ? (
                <Loading />
            ) : devices.length > 0 ? (
                <FlatList
                    data={devices}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={({ item }) => renderItem(item)}
                    refreshing={isRefresh}
                    onRefresh={() => onRefresh()}
                />
            ) : (
                <Empty />
            )}
        </View>
    );
};

export default Controll;
