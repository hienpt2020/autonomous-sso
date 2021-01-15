import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Props } from './types';

const FloatingButton = ({ onPress = () => {} }: Props) => {
  const { t } = useTranslation();

  const _onPress = () => {
    onPress();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={_onPress}>
      <Text style={styles.label}>{t('office.button_my_booking')}</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;
