import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(gifs => {
                setData(gifs)
                setLoading(false)
            })
    }, [category])

    return [data, loading]
}