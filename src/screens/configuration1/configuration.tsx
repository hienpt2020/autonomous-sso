import * as React from 'react';
import { View, Text, StatusBar, FlatList, ScrollView, DeviceEventEmitter } from 'react-native';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ICardData, Props } from './types';
import { styles } from './styles';
import { PrimaryButton } from 'src/components/button';
import { YellowBox } from 'react-native';
import { ImageSlider } from 'src/components/images/images';
import { BleManager, EVENT_EMITTER_BLE } from 'src/services/bluetooth';
import { CardData } from './CardData';
//JUST disable this warning
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const ConfigurationStep1 = (props: Props) => {
  const { t } = useTranslation();
  const imageHeight = 221;
  const [selected, setSelected] = useState('');
  const [peripherals, setPeripherals] = useState<ICardData[]>([]);
  useEffect(() => {
    DeviceEventEmitter.addListener(EVENT_EMITTER_BLE.DISCOVERED_DEVICE, discoverDevice);

    return () => {
      DeviceEventEmitter.removeListener(EVENT_EMITTER_BLE.DISCOVERED_DEVICE, discoverDevice);
    };
  }, []);

  const flatListItemSeparator = () => {
    return <View style={styles.divider} />;
  };

  function renderItem(data: ICardData) {
    return <CardData data={data} onPress={() => connectToDevice(data.id)} selectedId={selected} />;
  }
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        <ImageSlider
          data={[
            'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
            'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
            'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
            'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
            'https://source.unsplash.com/wgivdx9dBdQ/1600x900',
          ]}
          height={imageHeight}
        />
        <Text style={styles.title}>Seat#1</Text>
        <Text style={styles.subTitle}>Autonomous WorkSpace</Text>
        <Text style={styles.subTitle}>Floor #3</Text>
        <Text style={styles.subTitle}>Seat #1</Text>
        <Text style={styles.sectionTitle}>Available assets</Text>
        <FlatList
          nestedScrollEnabled={true}
          data={peripherals}
          style={[styles.list]}
          keyExtractor={(item, index) => `${item}${index}`}
          ItemSeparatorComponent={flatListItemSeparator}
          renderItem={({ item }) => renderItem(item)}
        />
      </ScrollView>
      <PrimaryButton
        wrapperContainer={styles.button}
        title={t('seat.book_seat')}
        onPress={() => BleManager.startScanDevice()}
      />
    </View>
  );

  function handleBack() {
    props.navigation.goBack();
  }

  async function connectToDevice(deviceId: string): Promise<void> {
    let device = await BleManager.connectToDevice(deviceId);
    if (device) {
      setSelected(deviceId);
    }
  }

  function discoverDevice(data: ICardData[]) {
    setPeripherals(data);
  }
};

export default ConfigurationStep1;
