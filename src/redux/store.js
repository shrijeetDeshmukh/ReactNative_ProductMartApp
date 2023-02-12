import {configureStore} from '@reduxjs/toolkit';
import { cartData } from './reducer';
import rootReducer from './rootReducer';

/* Redux store for cart data */
const store=configureStore({
    reducer:rootReducer
})
export default  store;

