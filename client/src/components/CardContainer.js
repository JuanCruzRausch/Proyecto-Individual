import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card"
import Paginate from "./Paginate"
import { setCurrentPage } from "../actions";
import { CardCont } from "../styles/CardContainer";
import Loading from "./Loading";

const CardContainer = () => {
    const dispatch = useDispatch()

    const countries = useSelector(state => state.countries)
    const currentPage = useSelector(state => state.currentPage)
    
    const [ load, setLoad ] = useState(false)

    const indexOfLastCountry = currentPage * 10
    const indexOfFirstCountry = indexOfLastCountry - 10
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginate = (pageNum) => {
        dispatch(setCurrentPage(pageNum))
    }

    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 4000)
    }, [currentCountries.length > 0])

    return(
        <div>
            <div>
                <Paginate countriesPerPage={10} allCountries={countries.length} paginate={paginate}/>
            </div>
            <CardCont>
                {
                    currentCountries.length > 0 ? 
                        currentCountries.map(c => <Card key={c.id} code={c.code} id={c.id} name={c.name} flag={c.flag} continent={c.continent} />) 
                    : <Loading />
                }
            </CardCont>
        </div>
    )
}

export default CardContainer