import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IcTabBooking from 'src/assets/images/ic_tab_booking.svg';
import IcTabBookingActive from 'src/assets/images/ic_tab_booking_active.svg';
import IcTabProfile from 'src/assets/images/ic_tab_profile.svg';
import IcTabProfileActive from 'src/assets/images/ic_tab_profile_active.svg';
import { AppText, AppView } from 'src/components';
import { RootState } from 'src/redux/types';
import { RouteName } from 'src/routers/routeName';
import { RouteProps } from 'src/routers/routeProps';
import { styles } from './styles';
import { Props } from './types';
import messaging from '@react-native-firebase/messaging';
import { Log } from 'src/helpers/logger';
import { FCM_TOPIC } from 'src/common/constant';

export const homeRoutes: RouteProps[] = [
    {
        name: RouteName.HOME_OFFICE,
        component: require('src/screens/homeoffice').default,
        options: {},
    },
    {
        name: RouteName.HOME_PROFILE,
        component: require('src/screens/homeprofile').default,
    },
];

function renderTabBarIcon(routeName: String, focused: boolean) {
    let icon;
    const iconSize = 20;
    if (routeName === RouteName.HOME_OFFICE) {
        icon = focused ? (
            <IcTabBookingActive width={iconSize} height={iconSize} />
        ) : (
            <IcTabBooking width={iconSize} height={iconSize} />
        );
    } else {
        icon = focused ? (
            <IcTabProfileActive width={iconSize} height={iconSize} />
        ) : (
            <IcTabProfile width={iconSize} height={iconSize} />
        );
    }

    return <AppView style={styles.button}>{icon}</AppView>;
}

function renderTabBarLabel(routeName: String, focused: boolean) {
    let label = '';
    if (routeName === RouteName.HOME_OFFICE) {
        label = 'Booking';
    } else {
        label = 'Profile';
    }

    return <AppText style={focused ? styles.labelActive : styles.label}>{label}</AppText>;
}

const Home = (props: Props) => {
    const userId = useSelector((state: RootState) => state.userReducer.userId);
    const [routes, setRoutes] = useState(homeRoutes);

    useEffect(() => {
        messaging()
            .subscribeToTopic(FCM_TOPIC + userId)
            .then(() => Log.debug('Subscribed to topic!'));
    }, []);

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName={routes[0].name}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return renderTabBarIcon(route.name, focused);
                },
                tabBarLabel: ({ focused }) => {
                    return renderTabBarLabel(route.name, focused);
                },
            })}
        >
            {routes.map((route) => (
                <Tab.Screen key={route.name} name={route.name} component={route.component} options={route.options} />
            ))}
        </Tab.Navigator>
    );
};

export default Home;
