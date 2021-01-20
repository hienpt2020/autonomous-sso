import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { authenticatedRoutes, publicRoutes } from './routes';

import { requestValidateAccessTokenAction } from 'src/redux/user';
import { RootState } from 'src/redux/types';

export const MainStackNavigator = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector((state: RootState) => state.userReducer);
    const [authenticated, setAuthenticated] = useState(false);

    const Stack = createStackNavigator();
    const screenOptions = React.useMemo(
        () => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }),
        [],
    );

    useEffect(() => {
        dispatch(requestValidateAccessTokenAction());
    }, []);

    useEffect(() => {
        const isExistAccessToken: boolean = userReducer.accessToken !== undefined;
        const isValidToken: boolean = userReducer.isValidToken === true;
        setAuthenticated(isExistAccessToken && isValidToken);
    }, [userReducer.isValidToken, userReducer.accessToken]);

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
