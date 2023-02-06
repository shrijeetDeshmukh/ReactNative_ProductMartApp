import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

/* common activity loader */
const LodingSpinner = () => {
    return (
        <View style={[styles.containerLoading, styles.horizontal]}>
            <ActivityIndicator color='rgb(7, 40, 44)' size="large" />
        </View>
    )
}
const styles = StyleSheet.create({
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})

export default LodingSpinner;