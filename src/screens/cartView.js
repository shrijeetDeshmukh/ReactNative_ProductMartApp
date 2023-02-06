import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ListViewComponent from "../component/list";
import UsernameComponent from "../component/username";
import { useUserData } from "../hooks/userName";
const CartView = () => {
    const cartDataView = useSelector((state) => state);
    console.log(cartDataView);
    const { email } = useUserData();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <UsernameComponent username={email}></UsernameComponent>
                    <ListViewComponent showCartButton={false} products={cartDataView}></ListViewComponent>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CartView;