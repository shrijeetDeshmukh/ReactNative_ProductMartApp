import React from "react";
import { View, Text ,StyleSheet} from "react-native";
import { WELCOME_MSG } from "../util/constant";
/*
Display username in all screens */
const UsernameComponent = ({ username }) => {
    return (
        <View style={styles.usernameContainer}>
            <Text style={styles.fontName}>{WELCOME_MSG} , {username}</Text><View style={{ height: 10 }}></View>
        </View>
    )
}
const styles=StyleSheet.create({
    usernameContainer:{
        margin:15,
        minHeight:50,
        elevation:3,
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        borderRadius: 4,
    },
    fontName:{
        fontSize:18,
        color:'rgb(10, 60, 67)',
        justifyContent:'center',flex:1,fontWeight:'900',
        textAlignVertical:'center',paddingStart:15,fontStyle:'italic'
    },
})
export default UsernameComponent;