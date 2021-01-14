import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'src/components/header';
import WorkLayout from 'src/models/WorkLayout';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { Empty } from '../../components/empty';
import { Loading } from '../../components/loading/loading';
import { CardItem } from './card';
import FloatingButton from './floatingButton';
import { styles } from './styles';
import { Props } from './types';
import { getWorkLayout } from './actions/homeAction';
import reactotron from 'src/config/configReactoron';
import { useDispatch } from 'react-redux';
import { setWorkLayoutAction } from 'src/redux/booking/bookingAction';

const Office = (props: Props) => {
  const { t } = useTranslation();
  const [workLayouts, setWorkLayouts] = useState<WorkLayout[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    _getData();
  }, []);

  const _getData = async () => {
    setIsLoading(true);
    try {
      setWorkLayouts(await getWorkLayout(1));
    } catch (error) {}
    setIsLoading(false);
  };

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
