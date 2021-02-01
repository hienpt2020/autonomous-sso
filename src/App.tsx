import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import 'reflect-metadata';
import { AppPopup, showPopup } from './components';
import { Spinner } from './components/spinner';
import './config';
import { Log } from './helpers/logger';
import store from './redux/store';
import { linkNavigation } from './routers/linkNavigation';
import { MainStackNavigator } from './routers/mainStack';
import { navigationRef } from './routers/rootNavigation';
import { NotificationMessage } from 'src/models/NotificationMessage';

const App = () => {
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
        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            parseNotificationData(remoteMessage);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        const unsubscribe = messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            parseNotificationData(remoteMessage);
        });

        return unsubscribe;
    }, []);

    const parseNotificationData = (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        const notificationMessage: NotificationMessage = new NotificationMessage();
        const data = remoteMessage.data;
        if (data) {
            notificationMessage.userId = data.user_id ? data.user_id : '';
            notificationMessage.type = data.type ? data.type : '';
            notificationMessage.bookingId = data.booking_id ? parseInt(data.booking_id) : 0;
            notificationMessage.message = data.message ? data.message : '';
            notificationMessage.from = data.from ? new Date(data.from) : new Date();
            notificationMessage.to = data.from ? new Date(data.to) : new Date();
        }

        Log.debug(notificationMessage);
        showPopup('You have a message!', notificationMessage.message, null, [
            {
                title: 'Ok',
            },
        ]);
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
