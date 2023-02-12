import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setSignOut } from "../auth/authSlice";
import { removeData } from "../storage/asyncStore";
import { WELCOME_MSG } from "../util/constant";

/*
Display username in all screens */
const UsernameComponent = ({ username }) => {
    const dispatch=useDispatch();
    return (
        <View style={styles.usernameContainer}>
            <Text style={styles.fontName}>{WELCOME_MSG} , {username}</Text><View style={{ height: 0 }}></View>
          <TouchableOpacity onPress={()=>dispatch(setSignOut())}>
            <View style={styles.logoutView}>
                <Text style={styles.logoutText}>Logout</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    usernameContainer: {
        margin: 10,
        minHeight: 20,
        elevation: 3,
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        borderRadius: 4,
    },
    fontName: {
        fontSize: 18,
        color: 'rgb(10, 60, 67)',
        justifyContent: 'center', flex: 1, fontWeight: '900',
        textAlignVertical: 'center', paddingStart: 15, fontStyle: 'italic'
    },
    logoutView: {
        alignItems: 'flex-end',
        marginRight:30,
        marginVertical:4
    },
    logoutText:{
        fontSize:20,
        color: 'rgb(10, 60, 67)',
    }
})
export default UsernameComponent;