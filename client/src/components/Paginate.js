import React from "react";
import { useSelector } from "react-redux";
import { Button, DivPag, DivPages, P } from "../styles/CardContainer";

const Paginate = ({ countriesPerPage, allCountries, paginate }) => {
    const pageNum = []
    for( let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNum.push(i)
    }

    const currentPage = useSelector(state => state.currentPage)

    let pages = []
    let op
    if(pageNum.length < 6){
        pages = pageNum
        op = 1
    }else if(currentPage < 6){
        pages = pageNum.slice(0,5)
        op = 2
    }else if(currentPage > pageNum.length - 5){
        pages = pageNum.slice(pageNum.length - 5, pageNum.length)
        op = 3
    }else{
        pages = pageNum.slice(currentPage-2, currentPage+3)
        op = 4
    }
    
    return(
        <DivPages>
        <DivPag>
            {op === 1 ? pages?.map(p => <Button key={p} onClick={() => paginate(p)}>{p}</Button>) : null}
            {op === 2 ? 
                <>
                    {pages?.map(p => <Button key={p} onClick={() => paginate(p)}>{p}</Button>)}
                    <Button onClick={() => paginate(currentPage+1)}><ion-icon name="caret-forward"></ion-icon></Button>
                    <Button onClick={() => paginate(currentPage+5)}><ion-icon name="play-forward"></ion-icon></Button>
                </> : null}
            {op === 3 ? 
                <>
                    <Button onClick={() => paginate(currentPage-5)}><ion-icon name="play-back"></ion-icon></Button>
                    <Button onClick={() => paginate(currentPage-1)}><ion-icon name="caret-back"></ion-icon></Button>
                    {pages?.map(p => <Button key={p} onClick={() => paginate(p)}>{p}</Button>)} 
                </> : null}
                
            {op === 4 ? 
                <>
                    <Button onClick={() => paginate(currentPage-5)}><ion-icon name="play-back"></ion-icon></Button>
                    <Button onClick={() => paginate(currentPage-1)}><ion-icon name="caret-back"></ion-icon></Button>
                    {pages?.map(p => <Button key={p} onClick={() => paginate(p)}>{p}</Button>) }
                    <Button onClick={() => paginate(currentPage+1)}><ion-icon name="caret-forward"></ion-icon></Button>
                    <Button onClick={() => paginate(currentPage+5)}><ion-icon name="play-forward"></ion-icon></Button>
                </> : null}
        </DivPag>
                <P>Current Page: <span>{currentPage}</span> / {pageNum.length}</P>
        </DivPages>
    )
}

export default Paginate