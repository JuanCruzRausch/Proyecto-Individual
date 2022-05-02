import React, {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllContinents, getAllCountries, getAllActivities, filter, setFilters} from "../actions/index"
import { Link } from "react-router-dom"
import Card from "./Card"
import Paginate from "./Paginate"
import SearchBar from "./SearchBar"

const Home = () => {
    const dispatch = useDispatch()
    
    const state = useSelector(state => state)
    const { continents, activities, countries, filters } = state

    let [ filtersParam, setFiltersParam ] = useState({order: "", continent: "", activity: ""})

    const [ currentPage, setCurrentPage ] = useState(1)
    const indexOfLastCountry = currentPage * 10
    const indexOfFirstCountry = indexOfLastCountry - 10
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginate = (pageNum) => {
        setCurrentPage(pageNum)
    }

    useEffect(() => {
        dispatch(filter(filters))
        dispatch(getAllContinents())
        dispatch(getAllActivities())
    },[dispatch, filters])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getAllCountries())
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setFilters(filtersParam))
        console.log(filtersParam);
    }
    
    const handleChange = e => {
        setFiltersParam({...filtersParam, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/activity">
                <button>Create Activity</button>
            </Link>
            <Link to="/country">
                <button>Create Country</button>
            </Link>
            <button onClick={(e) => handleClick(e)}>Reload all countries</button>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <select name="order" onChange={e => handleChange(e)}>
                        <option value="">-- Select Order --</option>
                        <option value="asc-a">Ascending by alphabet</option>
                        <option value="desc-a">Descending by alphabet</option>
                    </select>
                    <select name="order" onChange={e => handleChange(e)}>
                        <option value="">-- Select Order --</option>
                        <option value="asc-p">Ascending by population</option>
                        <option value="desc-p">Descending by population</option>
                    </select>
                    <select name="continent" onChange={e => handleChange(e)}>
                        <option value="">-- Select continent --</option>
                        {continents?.map(c => <option value={c}>{c}</option>)}
                    </select>
                    <select name="activity" onChange={e => handleChange(e)}>
                        <option value="">-- Select Activity --</option>
                        {activities.length > 0 ? activities?.map(a => <option value={a.name}>{a.name}</option>) : <option>No activities found</option>}
                    </select>
                    <br />
                    <button type="submit">Apply</button>
                </form>
                {countries.length}
                <Paginate countriesPerPage={10} allCountries={countries.length} paginate={paginate}/>
                <SearchBar />
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