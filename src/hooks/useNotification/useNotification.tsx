import { useEffect } from 'react';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Log } from 'src/helpers/logger';
import { NotificationMessage } from 'src/models/NotificationMessage';
import { Parser } from 'src/helpers/parser';
import { NotificationType } from 'src/common/constant';
import store from 'src/redux/store';
import { showPopup } from 'src/components';
import { setNotificationCheckinAction } from 'src/redux/app/appAction';

const useNotification = () => {
    useEffect(() => {
        requestUserPermission();
    }, []);

    useEffect(() => {
        getFCMToken();
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

    const getFCMToken = () => {
        messaging()
            .registerDeviceForRemoteMessages()
            .then(() => {
                // Get the device token
                messaging()
                    .getToken()
                    .then((token) => {
                        Log.debug('FCM Token: ' + token);
                    })
                    .catch((err) => Log.error(err.toString()));

                // Listen to whether the token changes
                messaging().onTokenRefresh((token) => {
                    Log.debug('FCM OnRefresh Token: ' + token);
                });
            })
            .catch((err) => Log.error(err.toString()));
    };

    const handleNotificationMessage = (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        const notificationMessage: NotificationMessage | undefined = Parser.parseNotificationData(remoteMessage);
        Log.debug(notificationMessage);

        if (notificationMessage) {
            if (notificationMessage.type == NotificationType.CHECK_IN) {
                store.dispatch(setNotificationCheckinAction(true));
                // TODO: hard code lang
                showPopup('Check In!', notificationMessage.message, null, [
                    {
                        title: 'Ok',
                    },
                ]);
            }

            if (notificationMessage.type == NotificationType.CHECK_OUT) {
                store.dispatch(setNotificationCheckinAction(true));
                // TODO: hard code lang
                showPopup('Check Out!', notificationMessage.message, null, [
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

        Log.debug('Authorization status:', enabled.toString());
    }
};

export default useNotification;
