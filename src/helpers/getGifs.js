export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=8ZcABixTf2PTe3QuNvwSivVk9XmABNZE`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const fetchedGifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    ))

    return fetchedGifs
}