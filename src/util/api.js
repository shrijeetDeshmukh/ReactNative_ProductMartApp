import { PRODUCT_API_URL } from "./constant";


export const getProducts = async () => {
    const response = await fetch(PRODUCT_API_URL);
    const json = await response.json();
    return json;
}

export const YouTubeGetID = async (url) => {
    console.log(url);
    url = await url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}