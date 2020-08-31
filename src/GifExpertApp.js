import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    const [category, setCategory] = useState(['Lord of The Rings'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            {
                category.map(cat => <GifGrid key={cat} category={cat} />)
            }
        </>
    )
}

export default GifExpertApp
