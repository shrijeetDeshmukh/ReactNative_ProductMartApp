import React, {useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import UsernameComponent from "../component/username";
import {useUserData} from '../hooks/userName';
import {useProductDetails} from '../hooks/product_detail';
import { PRICE_TEXT } from "../util/constant";

const ProductDetail = ({ route,navigation }) => {
    const {email}=useUserData(route);
    const [playing, setPlaying] = useState(false);
    const {productDetObj}=useProductDetails(route);
    return (
        <ScrollView>
        <View>
            <View>
                <UsernameComponent navigation={navigation} username={email}></UsernameComponent>
            </View>
            <View style={styles.productDescContainer}>
                <View style={styles.productInfoContainer}>
                    <Text style={styles.productInfoOne}>{productDetObj.productName}</Text>
                    <View style={styles.productInfoTwoContainer}>
                    <Text style={styles.productInfoTwo}>{PRICE_TEXT} : {'\u20B9'} {productDetObj.price}</Text>
                    <Text style={styles.productInfoTwo}>{productDetObj.screen}</Text>
                    <Text style={styles.productInfoTwo}>{productDetObj.storage}</Text>
                    <Text style={styles.productInfoTwo}>{productDetObj.ram}</Text>
                    </View>
                </View>
                <View style={{height:220,}}>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={productDetObj.youtubeId}
                />
                </View>
                <View>
                <Text style={styles.productInfoTwo}>{productDetObj.productDecs}</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    productDescContainer: {
        margin: 8
    },
    productInfoOne: {
        fontSize: 32, color: 'rgb(10, 60, 67)',fontStyle:'italic',fontWeight:'800',   marginStart:20
    },
    productInfoTwo: {
        fontSize: 20, color: 'rgb(10, 60, 67)',
    },
    productInfoContainer:{
        marginBottom:20,
    },
    productInfoTwoContainer:{
        marginStart:20
    }
})

export default ProductDetail;
