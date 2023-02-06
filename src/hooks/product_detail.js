import { useEffect, useState } from "react";
import { YouTubeGetID } from "../util/api";

export const useProductDetails = (route) => {
    const [productName, setProductName] = useState('');
    const [youtubeId, setYouTubeId] = useState('');
    const [screen, setScreen] = useState('');
    const [ram, setRam] = useState('');
    const [storage, setStorage] = useState('');
    const [price, setPrice] = useState('');
    const [productDecs, setProductDecs] = useState('');
    useEffect(() => {
        setProductName(route.params.productDetail.productName);
        setRam(route.params.productDetail.ram);
        setScreen(route.params.productDetail.screen);
        setStorage(route.params.productDetail.storage);
        setPrice(route.params.productDetail.price);
        setProductDecs(route.params.productDetail.description);
        YouTubeGetID(route.params.productDetail.video).then(data => {
            console.log('data', data);
            setYouTubeId(data);
        });
    }, [])
    let productDetObj = {
        'productName': productName,
        'youtubeId': youtubeId,
        'screen': screen,
        'ram': ram,
        'storage': storage,
        'price': price,
        'productDecs': productDecs
    }
    return { productDetObj }
}