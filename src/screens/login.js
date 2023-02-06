import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useValidation } from 'react-native-form-validator';
import { storeData } from '../storeage/asyncStore';
import { Keyboard } from 'react-native'
import LodingSpinner from '../component/activityLoader';
import AppLogo from '../component/appLogo';
import { USER_EMAIL, USER_PASSWORD, LOGIN_BUTTON } from '../util/constant';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { validate, getErrorMessages, isFormValid } =
        useValidation({
            state: { email, password },
        });
    const login = () => {
        console.log('login clicked');
        validate({
            password: { minlength: 4, required: true, },
            email: { email: true, required: true, },
        });
        console.log(isFormValid());
        if (isFormValid()) {
            Keyboard.dismiss();
            let formData = {
                "email": email,
                "password": password
            }
            storeData(formData).then((status) => {
                if (status) {
                    setLoading(true);
                    setTimeout(() => {
                        setLoading(false);
                        navigation.navigate('ProductList', {
                        })
                    }, 1500);
                }
            });
        }
    }
    return (
        <View style={{}}>
            <AppLogo />
            <View style={styles.container}>
                <TextInput placeholderTextColor='rgb(10, 60, 67)' style={styles.inputContainer} placeholder={USER_EMAIL} onChangeText={(email) => {
                    setEmail(email)
                }}></TextInput>
                <TextInput placeholderTextColor='rgb(10, 60, 67)' onChangeText={(password) => setPassword(password)} style={styles.inputContainer} secureTextEntry placeholder={USER_PASSWORD}></TextInput>
            </View>
            <TouchableOpacity onPress={login}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.buttonView}>{LOGIN_BUTTON}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.errorMessage}>
                <Text style={styles.errorText}>{getErrorMessages()}</Text>
            </View>
            {loading &&
                <LodingSpinner />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 10,
        justifyContent: 'center'
    },
    inputContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        paddingStart: 15,
        fontSize: 18,
        color: 'rgb(10, 60, 67)',
    },
    buttonView: {
        fontSize: 25,
        color: "white",
    },
    buttonStyle: {
        alignItems: "center",
        elevation: 4,
        marginHorizontal: 20,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center', elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: 'rgb(13, 79, 89)',
        borderRadius: 8,
    },
    errorMessage: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    errorText: {
        fontSize: 16,
        color: 'rgb(10, 60, 67)'
    },


});

export default LoginScreen;


