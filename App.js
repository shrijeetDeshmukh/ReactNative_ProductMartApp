
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AppRoute from './src/navigation/approot';
import store from './src/redux/store';


export default function App() {


  return (
    <Provider store={store}>
      <AppRoute />
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
  headerStyle: {
    color: 'black'
  }
});
