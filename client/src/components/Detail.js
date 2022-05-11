import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteCountry, deleteDetail, getCountry } from "../actions"
import { Link } from "react-router-dom"
import ActivityCard from "./ActivityCard"
import { DivDetail, ImgFlag, DivFlag, DivInfo, ActContainer, Info, Button, A, DivCRUD } from "../styles/Detail"

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
        <DivDetail>
            <DivFlag>
                <ImgFlag src={c?.flag} alt={c?.name}/>
                <h1>{c?.name} - {c?.code}</h1>
                {params.id > 250 ?
                    <DivCRUD>
                    <Link to={`/edit/${params.id}`}>
                        <Button className="edit">Edit country</Button>
                    </Link>
                    <Link to="/home">
                        <Button className="delete" onClick={deleteCountry(params.id)}>Delete country</Button>
                    </Link>
                    </DivCRUD>
                : <DivCRUD>
                    <Link to={`/addact/${params.id}`}>
                        <Button>Add/Delete Activities</Button>
                    </Link>
                </DivCRUD>}
            </DivFlag>
            <DivInfo>
                <Info>
                    <h3>Continent<br/><span>{c?.continent} ({c?.subregion})</span></h3>
                    <h3>Capital<br/><span>{c?.capital}</span></h3>
                    <p>Area<br/><span><ion-icon name="business-outline"></ion-icon> {c?.area} km<sup>2</sup></span></p>
                    <p>Population<br/><span><ion-icon name="people-outline"></ion-icon> {c?.population}</span></p>
                </Info>
                {c?.activities.length > 0? 
                    <>
                    <h3>Activities</h3>
                    <ActContainer>
                        {c?.activities.map(a => <ActivityCard url={a.image} name={a.name} difficulty={a.difficulty} duration={a.duration} season={a.season}/>) }
                    </ActContainer>
                    </>
                : null}
                <div>
                <Button><A href={c?.googleMaps} target="_blank" rel="noreferrer"><ion-icon name="map-outline"></ion-icon> Go to Maps </A></Button>
                <Link to ="/home">
                    <Button><ion-icon name="home-outline"></ion-icon> Home </Button>
                </Link>
                </div>
            </DivInfo>
        </DivDetail>
    )
}

export default Detail;