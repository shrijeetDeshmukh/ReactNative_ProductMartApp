import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import ListViewComponent from "../component/list";
import UsernameComponent from "../component/username";
import LodingSpinner from '../component/activityLoader';
import { useProductList } from "../hooks/product_list";
import { useUserData } from "../hooks/userName";

const ProductList = ({ navigation }) => {
    const { products, loading } = useProductList();
    console.log('PRODUCTS---',products);
    const { email } = useUserData();
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigatetocart()}>
                    <Image style={{ width: 35, height: 35 }} source={require('../../assets/icon/cart.png')} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const navigatetocart = () => {
        navigation.navigate('CartView', {
        })
    }
    const productSelection = (index) => {
        console.log('clicked', index);
        navigation.navigate('ProductDetail', {
            productDetail: index
        })
    };
    const addtoCart = (index) => {
        useDispatch(addtoCart(index));
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <UsernameComponent username={email} navigation={navigation}></UsernameComponent>
                    <View>
                        <ListViewComponent showCartButton={true} productSelection={productSelection} products={products} />
                    </View>
                    {loading ?
                        <LodingSpinner /> : null
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

export default ProductList;