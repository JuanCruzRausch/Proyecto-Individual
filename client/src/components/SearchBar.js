import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getAllCountries, setFilters, getCountriesSearch, top5Asia } from "../actions"
import { Input, Button } from "../styles/SearchBar"

const SearchBar = () => {
    
    const dispatch = useDispatch()

    const [ name, setName ] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setFilters({order: "", continent: "", activity: ""}))
        dispatch(getAllCountries())
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(getCountriesSearch(name))
    }

    const handleChange = e => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleTop = e => {
        e.preventDefault()
        dispatch(top5Asia())
    }

    return(
        <div>
            <Input type="text" placeholder="Search..." onChange={ e => handleChange(e) } />
            <Button type="submit" onClick={ e => handleSubmit(e)}>Search</Button>
            <Button onClick={e => handleTop(e)}>Top 5 Asia</Button>
            <Button onClick={(e) => handleClick(e)}>Reload</Button>
        </div>
    )
}

export default SearchBar