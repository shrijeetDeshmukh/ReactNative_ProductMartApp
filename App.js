
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import CartView from './src/screens/cartView';
import LoginScreen from './src/screens/login';
import ProductDetail from './src/screens/productDetail';
import ProductList from './src/screens/product_list';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false,contentStyle:{backgroundColor:"rgb(25, 158, 179)"}}}  />
      <Stack.Screen name="ProductList" component={ProductList} options={{title:'Products',contentStyle:{backgroundColor:'rgb(188, 238, 245)'},headerBackVisible: false,headerStyle:{backgroundColor:'rgb(13, 79, 89)'},headerTintColor:"#fff"}} />
      <Stack.Screen name="CartView" component={CartView} options={{title:'My cart',contentStyle:{backgroundColor:'rgb(188, 238, 245)'},headerStyle:{backgroundColor:'rgb(13, 79, 89)'},headerTintColor:"#fff"}} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{title:'Product details',contentStyle:{backgroundColor:'rgb(188, 238, 245)'},headerStyle:{backgroundColor:'rgb(13, 79, 89)'},headerTintColor:"#fff"}}/>
    </Stack.Navigator>
   </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle:{
    color:'black'
  }
});
