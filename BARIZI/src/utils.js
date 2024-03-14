export const getiImageUrl = (path) =>{
    return new URL(`/assets/${path}`, import.meta.url).href;
};