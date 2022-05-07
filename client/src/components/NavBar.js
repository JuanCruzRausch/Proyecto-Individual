import { useState } from "react"
import { Nav, NavMenu, NavLink, NavLinkSlide, NavSearch, Label, Link } from "../styles/Nav"
import SearchBar from "./SearchBar"
import "../styles/NavBar.css"

const NavBar = () => {
    const [ sidebar, setSidebar ] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

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
                </ul>
            </nav>
        </>
    )
}

export default NavBar