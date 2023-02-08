
import * as actions from "../util/constant";
/* Reducer for cart  */
export const cartData = (data = [], action) => {
    console.log('ACTION', action);
    switch (action.type) {
        case actions.ADD_TO_CART:
            const additions = { count: data.filter(item => item.id === action.data.id).length + 1 };
            console.log(additions);
            console.log({ ...additions, ...action.data })
            let copy = Object.assign({}, action.data);
            if (copy.count != undefined) {
                delete copy.count;
                console.log('COPY OBJ-----', copy);
                const updData = { ...additions, ...copy };
                return [updData, ...data];
            } else {
                console.log('no tpresent ');
                const updData = { ...additions, ...copy };
                return [updData, ...data];
            }
        case actions.REMOVE_PRODUCT_COUNT:
            let remove = Object.assign({}, action.data);
            console.log(action.data.count);
            const updatedCount = action.data.count - 1;
            if (updatedCount > 0) {
                delete remove.count;
                const minus = { count: updatedCount };
                const updData = { ...minus, ...remove };
                return [updData, ...data];
            } else {
                let remaininItem = data.filter((item) => item.id !== action.data.id);
                return [...remaininItem];
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

