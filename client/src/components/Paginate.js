import React from "react";
import { Button, DivPag } from "../styles/CardContainer";

const Paginate = ({ countriesPerPage, allCountries, paginate }) => {
    const pageNum = []
    for( let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNum.push(i)
    }

    return(
        <DivPag>
            {pageNum?.map(p => <Button onClick={() => paginate(p)}>{p}</Button>)}
        </DivPag>
    )
}

export default Paginate