
import { Alert } from "react-native";
import * as actions from "../util/constant";
/* Reducer for cart  */
export const cartData = (data = [], action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            console.log(...data);
            let checkIfAlreadyAdded = data.findIndex(item => item.id === action.data.id);
            if (checkIfAlreadyAdded === -1) {
                Alert.alert(actions.PRODUCT_ADDED_STRING);
                return [action.data, ...data];
            }
            else {
                Alert.alert(actions.PRODUCT_ADDED_ALREADY_STRING);
                return data;
            }
        case actions.REMOVE_CART:
            if (data.length > 0) {
                console.log(action);
                let remaininItem = data.filter((item) => item.id !== action.data.id);
                return [...remaininItem];
            } else {
                return data;
            }
        default:
            return data;
    }
}