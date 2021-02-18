import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { styles } from './styles';
import { Empty } from 'src/components/empty';
import { View, SectionList } from 'react-native';
import { Loading } from 'src/components/loading';
import { CardItem } from './card';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import Device from 'src/models/Device';
import { useDispatch, useSelector } from 'react-redux';
import { HomeControlActions, IHomeControlActions } from './actions/officeAction';
import { RootState } from 'src/redux/types';
import { AppText, Space } from 'src/components';
import { PrimaryButton } from 'src/components/button';
import Bluetooth from 'src/services/bluetooth';
import { DEVICE_TYPES } from 'src/common/constant';
import IcPlus from 'src/assets/images/plus.svg';

const Control = (props: Props) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    const dispatch = useDispatch();
    const homeControl: IHomeControlActions = new HomeControlActions(dispatch);
    const [devices, setDevices] = React.useState<any[]>([]);
    const workspaceReducer = useSelector((state: RootState) => state.workspaceReducer);

    useEffect(() => {
        getDevices();
    }, [workspaceReducer.id]);

    const getDevices = () => {
        homeControl
            .getAllDevices()
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

    const flatListItemSeparator = () => <Space height={24} />;
    const gotoSetupNewDevice = () => {
        props.navigation.navigate(RouteName.CONFIGURATION_INTRO1);
        Bluetooth.deviceType = DEVICE_TYPES.PERSONAL;
    };
    return (
        <View style={styles.container}>
            {/*<AppText style={styles.titleText}>Workspace Devices</AppText>*/}
            {isLoading ? (
                <Loading />
            ) : (
                <SectionList
                    style={styles.list}
                    sections={devices}
                    keyExtractor={(item, index) => index + ''}
                    renderItem={({ item }) => renderItem(item)}
                    refreshing={isRefresh}
                    onRefresh={() => onRefresh()}
                    ItemSeparatorComponent={flatListItemSeparator}
                    ListEmptyComponent={
                        <Empty
                            containerStyles={styles.emptyContainer}
                            title={t('setup.empty_title')}
                            description={t('setup.empty_description')}
                        />
                    }
                    renderSectionHeader={({ section: { title } }) => (
                        <AppText style={styles.sectionText}>{title}</AppText>
                    )}
                />
            )}
            <PrimaryButton
                containerStyle={styles.setupBtnContainer}
                title={t('device.button_add_new_device')}
                onPress={gotoSetupNewDevice}
                icon={
                    <View style={styles.setupIcon}>
                        <IcPlus />
                    </View>
                }
            />
        </View>
    );
};

export default Control;
