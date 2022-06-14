export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WZ38IXWzcxgaCAgnatwDohDbyf5ZR2Jh&limit=10&offset=0&rating=g&lang=en&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
};