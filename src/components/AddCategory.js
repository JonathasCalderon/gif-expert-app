import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategory }) => {

    const [inputText, setInputText] = useState('')

    const handleChange = e => {
        const { value } = e.target
        setInputText(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.trim().length > 2) {
            setCategory(cat => [inputText, ...cat])
            setInputText('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory
