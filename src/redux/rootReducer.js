import {combineReducers} from 'redux';
import authSlice from '../auth/authSlice';
import { cartData } from '../redux/reducer';

export default combineReducers({
    cartData:cartData,
    userAuth:authSlice
})