import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllActivities, getAllContinents, getAllSubregions, postCountry } from "../actions"

const CreatingCountry = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const state = useSelector(state => state)
    const { continents, subregions , activities} = state

    const [ formulario, setFormulario ] = useState({name: "", flag: "", continent: "", subregion: "", capital: "", area: 0, population: 0, googleMaps: "", code: "", activities: []})

    useEffect(() => {        
        dispatch(getAllContinents())
        dispatch(getAllSubregions())
        dispatch(getAllActivities())
    },[dispatch])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(postCountry(formulario))
        setFormulario({name: "", flag: "", continent: "", subregion: "", capital: "", area: 0, population: 0, googleMaps: "", code: "", activities: []})
        alert("Country successfully created!")
        navigate("/home")
    }

    const handleChange = e => {
        setFormulario({...formulario, [e.target.name]: e.target.value})
    }

    const handleChecked = e => {
        if(e.target.checked){
            setFormulario({...formulario, activities: [...formulario.activities, e.target.value]})
        }
    }

    return(
        <div>
            <Link to="/home"><button>Back to Home</button></Link>
            <h1>Create an Activity</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Name: </label>
                <input type="text" name="name" value={formulario.name} onChange={e => handleChange(e)}/>
                <br/><br/>
                <label>Flag (url): </label>
                <input type="url" name="flag" value={formulario.flag} onChange={e => handleChange(e)}/>
                <br/><br/>
                <label>Continent: </label>
                <select name="continent" onChange={e => handleChange(e)}>
                    {continents?.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <br/><br/>
                <label>Subregion: </label>
                <select name="subregion" onChange={e => handleChange(e)}>
                    {subregions?.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <br/><br/>
                <label>Capital: </label>
                <input type="text" name="capital" value={formulario.capital} onChange={e => handleChange(e)}/>
                <br/><br/>
                <label>Area: </label>
                <input type="text" name="area" value={formulario.area} onChange={e => handleChange(e)}/>
                <br/><br/>
                <label>Population: </label>
                <input type="text" name="population" value={formulario.population} onChange={e => handleChange(e)}/>
                <br/><br/>
                <label>Google map: </label>
                <input type="text" name="googleMaps" value={formulario.googleMaps} onChange={e => handleChange(e)}/>
                <br/><br/>
                <label>Code: </label>
                <input type="text" name="code" value={formulario.code} onChange={e => handleChange(e)}/>
                <br/><br/>
                <div>
                    <label>Activities: </label>
                    {activities?.map(a => <div><label><input type="checkbox" name={a.name} value={a.name} onChange={e => handleChecked(e)}/>{a.name}</label></div>)}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default CreatingCountry