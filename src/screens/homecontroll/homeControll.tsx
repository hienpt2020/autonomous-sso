import * as React from 'react';
import { useState, useEffect } from 'react';
import { Header } from 'src/components/header';
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { Empty } from 'src/components/empty';
import { View, FlatList } from 'react-native';
import { Loading } from 'src/components/loading';
import { CardItem } from './card';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import Device from 'src/models/Device';
import { useDispatch, useSelector } from 'react-redux';
import { HomeControlActions, IHomeControlActions } from './actions/officeAction';
import { RootState } from 'src/redux/types';
import { DEFAULT_IMAGES } from 'src/common/constant';
import { AppText } from 'src/components';
import { Space } from '../../components';

const Control = (props: Props) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const dispatch = useDispatch();
    const homeControl: IHomeControlActions = new HomeControlActions(dispatch);
    const [devices, setDevices] = React.useState<Device[]>([]);
    const workspaceReducer = useSelector((state: RootState) => state.workspaceReducer);

    useEffect(() => {
        getDevices();
    }, [workspaceReducer.id]);

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

    const flatListItemSeparator = () => <Space height={3} />;

    return (
        <View style={styles.container}>
            <Header title={t('controll.title')} />
            <AppText style={styles.titleText}>Workspace Devices</AppText>
            {isLoading ? (
                <Loading />
            ) : (
                <FlatList
                    data={devices}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={({ item }) => renderItem(item)}
                    refreshing={isRefresh}
                    onRefresh={() => onRefresh()}
                    ItemSeparatorComponent={flatListItemSeparator}
                    ListEmptyComponent={<Empty />}
                />
            )}
        </View>
    );
};

export default Control;
