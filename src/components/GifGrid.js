import React from 'react'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    const [gifs, loading] = useFetchGifs(category)

    const renderedGifs = gifs.map(img => (
        <GifGridItem key={img.id} {...img} />
    ))

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-container animate__animated animate__backInUp">
                {renderedGifs}
            </div>
        </>
    )
}

export default GifGrid
