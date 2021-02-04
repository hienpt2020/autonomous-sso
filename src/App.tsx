import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useDispatch } from 'react-redux';
import 'reflect-metadata';
import { AppPopup, showPopup } from './components';
import { Spinner } from './components/spinner';
import './config';
import { Log } from './helpers/logger';
import store from './redux/store';
import { linkNavigation } from './routers/linkNavigation';
import { MainStackNavigator } from './routers/mainStack';
import { navigationRef } from './routers/rootNavigation';
import useForceUpdate from './hooks/useForceUpdate';

import { NotificationMessage } from 'src/models/NotificationMessage';
import { Parser } from './helpers/parser';
import { NotificationType } from './common/constant';
import { setNotificationCheckinAction } from './redux/app/appAction';

const App = () => {
    const [] = useForceUpdate();

    useEffect(() => {
        requestUserPermission();
    }, []);

    useEffect(() => {
        // Get the device token
        messaging()
            .getToken()
            .then((token) => {
                Log.debug('FCM Token: ' + token);
            });

        // Listen to whether the token changes
        return messaging().onTokenRefresh((token) => {
            Log.debug('FCM Token: ' + token);
        });
    }, []);

    useEffect(() => {
        // Handle Forceground message
        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            handleNotificationMessage(remoteMessage);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        // Handle Background & Quit State message
        const unsubscribe = messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            handleNotificationMessage(remoteMessage);
        });

        return unsubscribe;
    }, []);

    const handleNotificationMessage = (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        const notificationMessage: NotificationMessage | undefined = Parser.parseNotificationData(remoteMessage);
        Log.debug(notificationMessage);

        if (notificationMessage) {
            if (notificationMessage.type == NotificationType.CHECK_IN) {
                store.dispatch(setNotificationCheckinAction(true));
                // TODO: hard code lang
                showPopup('Booking!', notificationMessage.message, null, [
                    {
                        title: 'Ok',
                    },
                ]);
            }
        }
    };

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        Log.debug('Authorization status:', authStatus);
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                {/*<Progressing />*/}
                <NavigationContainer linking={linkNavigation.linking} ref={navigationRef}>
                    {/* Navigations */}
                    <MainStackNavigator />
                    {/* Global components */}
                    <Spinner />
                    <AppPopup />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
