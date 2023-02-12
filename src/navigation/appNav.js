import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from '../screens/productDetail'
import ProductList from '../screens/product_list';
import CartView from '../screens/cartView';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='ProductList'>
            <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products', contentStyle: { backgroundColor: 'rgb(188, 238, 245)' }, headerBackVisible: false, headerStyle: { backgroundColor: 'rgb(13, 79, 89)' }, headerTintColor: "#fff" }} />
            <Stack.Screen name="CartView" component={CartView} options={{ title: 'My cart', contentStyle: { backgroundColor: 'rgb(188, 238, 245)' }, headerStyle: { backgroundColor: 'rgb(13, 79, 89)' }, headerTintColor: "#fff" }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product details', contentStyle: { backgroundColor: 'rgb(188, 238, 245)' }, headerStyle: { backgroundColor: 'rgb(13, 79, 89)' }, headerTintColor: "#fff" }} />
        </Stack.Navigator>
    )
}

export default AppNavigator