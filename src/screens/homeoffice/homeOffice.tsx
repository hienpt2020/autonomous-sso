import * as React from 'react';
import { FlatList } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'src/components/header';
import { useTranslation } from 'react-i18next';
import { Props, Presenter } from './types';
import { PresenterImpl } from './presenter';
import { styles } from './styles';
import { RouteName } from 'src/routers/routeName';
import { CardItem, CardData } from './card';
// import { Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWorkplaceFilterByIdStartAction,
  getWorkplaceLayoutStartAction,
} from '../../redux/workplace/workplaceAction';

const Office = (props: Props) => {
  // const initialData: SectionData[] = [];
  const { t } = useTranslation();
  // const [sectionData, setSectionData] = useState(initialData);
  const dispatch = useDispatch();
  const presenter: Presenter = new PresenterImpl();
  const { layout } = useSelector((state) => state.workplaceReducer);

  useEffect(() => {
    dispatch(getWorkplaceLayoutStartAction());
    // let floorsResult = presenter.fetchFloor();
    // setSectionData(floorsResult);
  }, []);
  const renderItem = (data: CardData) => {
    return <CardItem cardData={data} onPress={() => onItemSelected(data)} />;
  };
  // const renderHeader = (title: string) => {
  //   return <Text style={styles.header}>{title}</Text>;
  // };
  // const getItemLayout = (data: any, index: any) => {
  //   return { length: 180, offset: 180 * index, index };
  // };
  // console.log('@nsandnasdnsadnsda:', items);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('office.title')} />
      {/*<SectionList*/}
      {/*  sections={sectionData}*/}
      {/*  stickySectionHeadersEnabled={false}*/}
      {/*  keyExtractor={(item, index) => item.id + index}*/}
      {/*  renderItem={({ item }) => renderItem(item)}*/}
      {/*  getItemLayout={(data, index) => getItemLayout(data, index)}*/}
      {/*  renderSectionHeader={({ section: { title } }) => renderHeader(title)}*/}
      {/*/>*/}
      <FlatList
        data={presenter.formatOffice(layout.items)}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id + ''}
      />
    </SafeAreaView>
  );
  function onItemSelected(data: CardData) {
    props.navigation.navigate(RouteName.MAP, { floorId: data.id, floorName: data.name });
    dispatch(getWorkplaceFilterByIdStartAction(data.id));
  }
};

export default Office;
