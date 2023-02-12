import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../navigation/appNav';
import AuthNavigator from '../navigation/authNav';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, setSignIn, setSignOut } from '../auth/authSlice';
import { getLoggedIn } from '../storage/asyncStore';

const AppRoute = () => {
    const dispatch = useDispatch();
    const getStatus = getLoggedIn().then(data => {
        if (data) {
            const user = {
                isLoggedIn: true,
            };
            dispatch(setSignIn(user));
        } else {
            dispatch(setSignOut());
        }
    });

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute;