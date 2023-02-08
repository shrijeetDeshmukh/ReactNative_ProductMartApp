import { ADD_TO_CART, REMOVE_CART,REMOVE_PRODUCT_COUNT } from "../util/constant";
/* Actions for cart add and delete */
export const addtoCart = (product) => {
    console.log('action code Product', product);
    return {
        type: ADD_TO_CART,
        data: product,
    }
}

export const deleteCart = (id) => {
    //console.log('delete action called');
    return {
        type: REMOVE_CART,
        data: id
    }
}

export const removeCount=(product)=>{
    console.log('remove count action',product);
    return{
        type:REMOVE_PRODUCT_COUNT,
        data:product
    }
}
