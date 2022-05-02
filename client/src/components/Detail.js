import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteDetail, getCountry } from "../actions"
import { Link } from "react-router-dom"

const Detail = () => {
    const params = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountry(params.id))
        return () => {dispatch(deleteDetail())}
    },[dispatch, params.id])

    const country = useSelector(state => state.country)

    const c = country[0]
    
    return(
        <div>
            <img src={c?.flag} alt={c?.name}/>
            <h1>{c?.name} - {c?.code}</h1>
            <h3>Continent: {c?.continent} ({c?.subregion})</h3>
            <h3>Capital: {c?.capital}</h3>
            <p>Area: {c?.area} km<sup>2</sup></p>
            <p>Population: {c?.population}</p>
            {c?.activities ? c?.activities.map(a => <p>{a?.name} {a?.duration}</p>) : null}
            <button><a href={c?.googleMaps} target="_blank" rel="noreferrer"> Go to Maps </a></button>
            <Link to ="/home">
                <button> Back to home </button>
            </Link>
        </div>
    )
}

export default Detail;