import { ADD_TO_CART, REMOVE_CART } from "../util/constant";
/* Actions for cart add and delete */
export const addtoCart = (product) => {
    console.log('action code', product);
    return {
        type: ADD_TO_CART,
        data: product,
    }
}

export const deleteCart = (id) => {
    console.log('delete action called');
    return {
        type: REMOVE_CART,
        data: id
    }
}