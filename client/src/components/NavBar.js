import React, {useState, useEffect} from "react";

import { Nav, NavMenu, NavLink, NavLinkSlide, NavSearch, Label, Link } from "../styles/Nav"
import SearchBar from "./SearchBar"
import "../styles/NavBar.css"
import { useDispatch, useSelector } from "react-redux"
import { getAllContinents, getAllActivities, filter, setFilters, deleteFilters, resetPage} from "../actions/index"
import { FormFilSlide, ButtonFil, SelectFil, LabelFil, DivSel, P } from "../styles/Filters";

const NavBar = () => {
    const [ sidebar, setSidebar ] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const dispatch = useDispatch()
    
    const state = useSelector(state => state)
    const { continents, activities, filters } = state

    let [ filtersParam, setFiltersParam ] = useState({order: "", continent: "", activity: ""})

    useEffect(() => {
        dispatch(filter(filters))
        dispatch(getAllContinents())
        dispatch(getAllActivities())
        return () => {dispatch(deleteFilters())}
    },[dispatch, filters])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setFilters(filtersParam))
        dispatch(resetPage())
    }
    
    const handleChange = e => {
        setFiltersParam({...filtersParam, [e.target.name]: e.target.value})
    }

    return(
        <>
            <Nav>
                <Link to="/home">
                    <Label>CountryApp</Label>
                </Link>
                <ion-icon name="menu" onClick={showSidebar}></ion-icon>
                <NavSearch>
                    <SearchBar />
                </NavSearch>
                <NavMenu>
                    <NavLink to="/activity" activeStyle>
                        Create Activity
                    </NavLink>
                    <NavLink to="/country" activeStyle>
                        Create Country
                    </NavLink >
                </NavMenu>
            </Nav>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ion-icon name="arrow-back" onClick={showSidebar}></ion-icon>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle" onClick={showSidebar}>
                        <NavLinkSlide to="/activity" activeStyle>
                            Create Activity
                        </NavLinkSlide>
                    </li>
                    <li className="navbar-toggle" onClick={showSidebar}>
                        <NavLinkSlide to="/country" activeStyle>
                            Create Country
                        </NavLinkSlide>
                    </li>
                    <li>
                        <P>Filters</P>
                        <FormFilSlide onSubmit={e => handleSubmit(e)}>
                        <DivSel>
                            <LabelFil htmlFor="order">Order by alphabet</LabelFil>
                            <SelectFil name="order" id="order" onChange={e => handleChange(e)}>
                                <option value="">-- Select Order --</option>
                                <option value="asc-a">Ascending</option>
                                <option value="desc-a">Descending</option>
                            </SelectFil>
                        </DivSel>
                        <DivSel>
                            <LabelFil htmlFor="order2">Order by population</LabelFil>
                            <SelectFil name="order" id="order2" onChange={e => handleChange(e)}>
                                <option value="">-- Select Order --</option>
                                <option value="asc-p">Ascending</option>
                                <option value="desc-p">Descending</option>
                            </SelectFil>
                        </DivSel>
                        <DivSel>
                            <LabelFil htmlFor="continent">Continent</LabelFil>
                            <SelectFil name="continent" id="continent" onChange={e => handleChange(e)}>
                                <option value="">-- Select continent --</option>
                                {continents?.map(c => <option value={c}>{c}</option>)}
                            </SelectFil>
                        </DivSel>
                        <DivSel>
                            <LabelFil htmlFor="activity">Activity</LabelFil>
                            <SelectFil name="activity" id="activity" onChange={e => handleChange(e)}>
                                <option value="">-- Select Activity --</option>
                                {activities.length > 0 ? activities?.map(a => <option value={a.name}>{a.name}</option>) : <option>No activities found</option>}
                            </SelectFil>
                        </DivSel> 
                        <ButtonFil type="submit" onClick={showSidebar}>Apply</ButtonFil>
                        </FormFilSlide>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar