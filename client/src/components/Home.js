import React from "react"
import NavBar from "./NavBar"
import CardContainer from "./CardContainer"
import Filters from "./Filters"


const Home = () => {
    
    return(
        <div>
            <NavBar />
            <div>
                <Filters />
                <CardContainer />
            </div>
        </div>
    )
}

export default Home