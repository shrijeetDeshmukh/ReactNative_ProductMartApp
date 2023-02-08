import { useEffect, useState } from "react";

export const useProductValue = (cartDataView) => {
    const [totalvalue, setTotalValue] = useState(0);
    console.log('cartdata view', cartDataView);
    useEffect(() => {
        let finalPrice = 0
        cartDataView.reduce(function (acc, item) {
            let currentPrice = item.price.replace(/\,/g, '');
            currentPrice = parseInt(currentPrice, 10);
            currentPrice = currentPrice * item.count;
            finalPrice += currentPrice;
            setTotalValue(finalPrice);
        }, 0)
    }, [cartDataView])
    return { totalvalue };
}