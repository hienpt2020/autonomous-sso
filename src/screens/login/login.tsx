import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { REQUEST_END, REQUEST_START } from 'src/redux/request/requestType';
import { RouteName } from 'src/routers/routeName';
import { LoginProps } from './types';
import { useTranslation } from 'react-i18next';

const Login = (props: LoginProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: REQUEST_START });
    setTimeout(() => dispatch({ type: REQUEST_END }), 3000);
  });

  return (
    <View>
      <Text>{t('login.title')}</Text>

      <Button
        title={t('button.goToHome')}
        onPress={() => props.navigation.navigate(RouteName.HOME, { userId: 'abcdef123' })}
      />
    </View>
  );
};

export default Login;
