import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { addtoCart, deleteCart } from "../redux/action";
import { DELETE_ITEM_FROM_CART,ADD_ITEM_TO_CART,ITEM_DETAIL,NO_PRODUCTS_CART,PRICE_TEXT } from "../util/constant";

/* Show list of products and added products to cartData.  */
const ListViewComponent = ({ products, productSelection, showCartButton }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            {products.length == 0 && !showCartButton ? (<View style={styles.noProductStyle}><Text style={styles.noProductText}>{NO_PRODUCTS_CART}</Text></View>) : null}
            {
                products.map((item) =>
                (<View key={item.id} style={styles.listViewContainer} >
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
                        <Image style={styles.imageStyle} source={require('../../assets/icon/thumb.png')} />
                        {console.log(item.productName)}
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.productName}>{item.productName}</Text>
                            <Text style={styles.productDecs}>{PRICE_TEXT} : {'\u20B9'} {item.price}</Text>
                            <Text style={styles.productDecs}>{item.storage}</Text>
                        </View>
                    </View>
                    {showCartButton ? (
                        <View style={styles.actionButtonsContainer}>
                            <TouchableOpacity onPress={() => productSelection(item)} style={styles.buttonView}>
                                <Text style={styles.buttonSize}>{ITEM_DETAIL}</Text>
                            </TouchableOpacity>
                            <View style={{ marginLeft: 15 }}></View>
                            <TouchableOpacity onPress={() => dispatch(addtoCart(item))} style={styles.buttonView}>
                                <Text style={styles.buttonSize}>{ADD_ITEM_TO_CART}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actionButtonsContainer}>
                            <TouchableOpacity onPress={() => dispatch(deleteCart(item))} style={styles.buttonView}>
                                <Text style={styles.buttonSize}>{DELETE_ITEM_FROM_CART}</Text>
                            </TouchableOpacity>
                            <View style={{ marginLeft: 15 }}></View>
                        </View>
                    )
                    }
                </View>))
            }
        </View >
    )
}
const styles = StyleSheet.create({
    listViewContainer: {
        margin: 5, minHeight: "17.5%", elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        backgroundColor: 'rgb(27, 160, 177)',
        borderRadius: 4,
    },
    imageStyle: {
        width: 80, height: 80,borderRadius:5
    },
    productName: {
        paddingLeft: 10, fontSize: 20, fontWeight: 'bold',color:'rgb(10, 60, 67)',
    },
    productDecs: {
        paddingLeft: 10, fontSize: 16, fontWeight: '600',color:'rgb(10, 60, 67)',
    },
    actionButtonsContainer: {
        flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, paddingLeft: 90
    },
    buttonView: {
        backgroundColor: 'rgb(13, 79, 89)', borderRadius: 3, minWidth: 110, minHeight: 25
    },
    buttonSize: {
        fontSize: 18, alignSelf: 'center', color: '#fff'
    },
    noProductStyle: {
        alignItems: 'center',
        marginVertical: 200
    },
    noProductText: {
        fontSize: 25,
        color: 'rgb(10, 60, 67)'
    }
});

export default ListViewComponent;