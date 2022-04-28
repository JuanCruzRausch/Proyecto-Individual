import React from "react";

const Paginate = ({ countriesPerPage, allCountries, paginate }) => {
    const pageNum = []
    for( let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNum.push(i)
    }

    return(
        <nav>
            {pageNum?.map(p => <button onClick={() => paginate(p)}>{p}</button>)}
        </nav>
    )
}

export default Paginate