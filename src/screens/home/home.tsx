import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import IcTabBooking from 'src/assets/images/ic_tab_booking.svg';
import IcTabBookingActive from 'src/assets/images/ic_tab_booking_active.svg';
import IcTabControl from 'src/assets/images/ic_tab_control.svg';
import IcTabControlActive from 'src/assets/images/ic_tab_control_active.svg';
import IcTabProfile from 'src/assets/images/ic_tab_profile.svg';
import IcTabProfileActive from 'src/assets/images/ic_tab_profile_active.svg';
import { AppText, AppView } from 'src/components';
import { Log } from 'src/helpers/logger';
import { RouteName } from 'src/routers/routeName';
import { RouteProps } from 'src/routers/routeProps';
import { styles } from './styles';
import { Props } from './types';

export const homeRoutes: RouteProps[] = [
    {
        name: RouteName.HOME_OFFICE,
        component: require('src/screens/homeoffice').default,
        options: {},
    },
    {
        name: RouteName.HOME_CONTROLL,
        component: require('src/screens/homecontroll').default,
    },
    {
        name: RouteName.HOME_PROFILE,
        component: require('src/screens/homeprofile').default,
    },
];

function renderTabBarIcon(routeName: String, focused: boolean) {
    let icon;
    const iconSize = 20;
    if (routeName === RouteName.HOME_CONTROLL) {
        icon = focused ? (
            <IcTabControlActive width={iconSize} height={iconSize} />
        ) : (
            <IcTabControl width={iconSize} height={iconSize} />
        );
    } else if (routeName === RouteName.HOME_OFFICE) {
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
    if (routeName === RouteName.HOME_CONTROLL) {
        label = 'Control';
    } else if (routeName === RouteName.HOME_OFFICE) {
        label = 'Booking';
    } else {
        label = 'Profile';
    }

    return <AppText style={focused ? styles.labelActive : styles.label}>{label}</AppText>;
}

const Home = (props: Props) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return renderTabBarIcon(route.name, focused);
                },
                tabBarLabel: ({ focused }) => {
                    return renderTabBarLabel(route.name, focused);
                },
            })}
        >
            {homeRoutes.map((route) => (
                <Tab.Screen key={route.name} name={route.name} component={route.component} options={route.options} />
            ))}
        </Tab.Navigator>
    );
};

export default Home;
