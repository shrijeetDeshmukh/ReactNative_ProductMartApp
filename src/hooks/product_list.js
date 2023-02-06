import { useEffect, useState } from "react";
import { getProducts } from '../util/api';

export const useProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getProducts().then(data => {
            setProducts(data);
            setLoading(false);
        })
    }, []);
    return { products,loading }
}








