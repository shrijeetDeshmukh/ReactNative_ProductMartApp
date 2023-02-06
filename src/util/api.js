export const getProducts = async () => {
    const response = await fetch('https://mocki.io/v1/d46dc365-f752-46ee-b0cd-c136aec38e00');
    const json = await response.json();
    return json;
}

export const YouTubeGetID = async (url) => {
    console.log(url);
    url = await url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}