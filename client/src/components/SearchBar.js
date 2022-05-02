import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getCountriesSearch } from "../actions"

const SearchBar = () => {
    
    const dispatch = useDispatch()

    const [ name, setName ] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(getCountriesSearch(name))
    }

    const handleChange = e => {
        e.preventDefault()
        setName(e.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="Search..." onChange={ e => handleChange(e) } />
            <button type="submit" onClick={ e => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar