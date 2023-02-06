import {configureStore} from '@reduxjs/toolkit';
import { cartData } from './reducer';
/* Redux store for cart data */
const store=configureStore({
    reducer:cartData
})
export default  store;

