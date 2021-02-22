import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/types';
import { createRequestAppInitial } from 'src/redux/app/appSaga';
import Launcher from 'src/screens/launcher/launcher';
import { linkNavigation } from './linkNavigation';
import { authenticatedRoutes, publicRoutes } from './routes';

export const MainStackNavigator = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector((state: RootState) => state.userReducer);
    const appReducer = useSelector((state: RootState) => state.appReducer);
    const [authenticated, setAuthenticated] = useState(false);

    const Stack = createStackNavigator();
    const screenOptions = React.useMemo(
        () => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }),
        [],
    );

    linkNavigation.validateInitialLink(useEffect, appReducer);
    useEffect(() => {
        dispatch(createRequestAppInitial());
    }, [dispatch]);

    useEffect(() => {
        const isExistAccessToken: boolean = userReducer.accessToken !== undefined;
        const isValidToken: boolean = userReducer.isValidToken === true;
        setAuthenticated(isExistAccessToken && isValidToken);
    }, [userReducer.isValidToken, userReducer.accessToken]);
    if (!appReducer.initial) {
        return <Launcher />;
    }
    return (
        <Stack.Navigator screenOptions={screenOptions} headerMode="none">
            {authenticated ? (
                <>
                    {authenticatedRoutes.map((route) => (
                        <Stack.Screen
                            key={route.name}
                            name={route.name}
                            component={route.component}
                            options={route.options}
                        />
                    ))}
                </>
            ) : (
                <>
                    {publicRoutes.map((route) => (
                        <Stack.Screen
                            key={route.name}
                            name={route.name}
                            component={route.component}
                            options={route.options}
                        />
                    ))}
                </>
            )}
        </Stack.Navigator>
    );
};
