import React from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ListViewComponent from "../component/list";
import UsernameComponent from "../component/username";
import { useUserData } from "../hooks/userName";
import { useProductValue } from "../hooks/productValue";
import { TOTAL_AMOUNT_TEXT } from "../util/constant";

const getUniqueProd = (count) => {
    // console.log('ALL DATA IN CART----', count);
    const unique = [];
    const visited = new Set();
    for (let i = 0; i < count.length; ++i) {
        if (!visited.has(count[i].id)) {
            unique.push(count[i]);
            visited.add(count[i].id);
        }
    }
    console.log('UNIQUE----', unique);
    return unique;
}
const CartView = ({navigation}) => {
    const cartDataView = useSelector((state) => state);
    const cartFinal = getUniqueProd(cartDataView);
    const { totalvalue } = useProductValue(cartFinal);
    const { email } = useUserData();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <UsernameComponent navigation={navigation} username={email}></UsernameComponent>
                    <ListViewComponent showCartButton={false} products={cartFinal}></ListViewComponent>
                    {cartFinal.length !== 0 ? (<View style={styles.totalCartView}>
                        <Text style={styles.totalFont}>{TOTAL_AMOUNT_TEXT}  {'\u20B9'} {totalvalue}</Text>
                    </View>) : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CartView;

const styles = StyleSheet.create({
    totalCartView: {
        margin: 10
    },

    totalFont: {
        fontSize: 22
    }
})