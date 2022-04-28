import React, {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllContinents, getAllCountries, getAllActivities, filter} from "../actions/index"
import { Link } from "react-router-dom"
import Card from "./Card"
import Paginate from "./Paginate"

const Home = () => {
    const dispatch = useDispatch()
    
    const state = useSelector(state => state)
    const { continents, activities, countries } = state

    const [ formulario, setFormulario ] = useState({order: "", continent: "", activity: ""})
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ countriesPerPage, setCountriesPerPage ] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginate = (pageNum) => {
        setCurrentPage(pageNum)
    }

    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllContinents())
        dispatch(getAllActivities())
    },[dispatch])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getAllCountries())
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(formulario);
        dispatch(filter(formulario))
    }
    
    const handleChange = e => {
        setFormulario({...formulario, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/country">
                <button>Create Country</button>
            </Link>
            <button onClick={(e) => handleClick(e)}>Reload all countries</button>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <h2>Order</h2>
                    <select name="order" onChange={e => handleChange(e)}>
                        <option value="">-- Select Order --</option>
                        <option value="asc-p">Ascending by population</option>
                        <option value="desc-p">Descending by population</option>
                        <option value="asc-a">Ascending by alphabet</option>
                        <option value="desc-a">Descending by alphabet</option>
                    </select>
                    <h2>Continent</h2>
                    <select name="continent" onChange={e => handleChange(e)}>
                        <option value="">-- Select continent --</option>
                        {continents?.map(c => <option value={c}>{c}</option>)}
                    </select>
                    <h2>Activities</h2>
                    <select name="activity" onChange={e => handleChange(e)}>
                        <option value="">-- Select Activity --</option>
                        {activities.length > 0 ? activities?.map(a => <option value={a.name}>{a.name}</option>) : <option>No activities found</option>}
                    </select>
                    <button type="submit">Apply</button>
                </form>
                {countries.length}
                <Paginate countriesPerPage={countriesPerPage} allCountries={countries.length} paginate={paginate}/>
                {
                    currentCountries?.length > 0 ? 
                    currentCountries?.map(c => <Card key={c.id} id={c.id} name={c.name} flag={c.flag} continent={c.continent} />) 
                    : "no country found"
                }
            </div>
        </div>
    )
}

export default Home