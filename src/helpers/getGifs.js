
export const getGifs = async( category ) => {
    const limit = 8;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7ghQHnpvtGaxS2I0cB2MOq8Fi17qy1mu&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}