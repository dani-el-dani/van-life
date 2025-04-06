import {Link, NavLink} from "react-router-dom"


function Header(){
    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <NavLink 
                to="/host"
                className={({isActive}) => isActive? "active" : undefined}
                >
                Host
            </NavLink>
            <NavLink 
                to="/about"
                className={({isActive}) => isActive? "active" : undefined}
                >
                About
            </NavLink>
            <NavLink 
                to="/vans"
                className={({isActive}) => isActive? "active" : undefined}

            >
                Vans
            </NavLink>
        </nav>
      </header>
    )
}

export default Header