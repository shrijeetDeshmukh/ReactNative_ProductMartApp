import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator  initialRouteName='LoginScreen'>
           <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false, contentStyle: { backgroundColor: "rgb(25, 158, 179)" } }} />
        </Stack.Navigator>
    )
}

export default AuthNavigator