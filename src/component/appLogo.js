import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { APP_NAME } from "../util/constant";
/* Display App logo and Name */
const AppLogo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image style={{ width: 60, height: 60 }} source={require('../../assets/image/logo.png')} />
            <View style={{ marginBottom: 20 }}></View>
            <Text style={styles.appName}>{APP_NAME}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    logoContainer: {
        alignContent: 'center', alignItems: 'center', marginTop: 20
    },
    appName: {
        fontSize: 30,
        fontStyle: 'italic',
        fontVariant: 'underline', fontWeight: 'bold', textDecorationLine: 'underline', color: 'rgb(10, 60, 67)',
    }

});
export default AppLogo;