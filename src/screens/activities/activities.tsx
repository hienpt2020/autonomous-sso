import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { color } from 'react-native-reanimated';
import { AppText } from 'src/components';
import { BackHeader } from 'src/components/header';
import { BookingHistory } from 'src/models/BookingHistory';
import { AppColor, AppFont, AppFontSize } from 'src/styles';
import BookingScreen from '../booking-history';
import { styles } from './styles';
import { Props } from './types';

const Tab = createMaterialTopTabNavigator();
const Activities = (props: Props) => {
    const { t } = useTranslation();

    function handleBack() {
        props.navigation.goBack();
    }

    function renderTabBarLabel(routeName: String, focused: boolean) {
        let label = '';
        if (routeName === t('activities.upcoming')) {
            label = t('activities.upcoming');
        } else {
            label = t('activities.title');
        }

        return <AppText style={focused ? styles.labelActive : styles.label}>{label}</AppText>;
    }

    return (
        <View style={styles.container}>
            <BackHeader title={t('activities.title')} onPress={() => handleBack()} />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: ({ focused }) => {
                        return renderTabBarLabel(route.name, focused);
                    },
                })}
                tabBarOptions={{
                    style: { height: 44 },
                }}
            >
                <Tab.Screen name={t('activities.upcoming')}>{() => <BookingScreen isUpComming />}</Tab.Screen>
                <Tab.Screen name={t('activities.title')}>{() => <BookingScreen />}</Tab.Screen>
            </Tab.Navigator>
        </View>
    );
};

export default Activities;
