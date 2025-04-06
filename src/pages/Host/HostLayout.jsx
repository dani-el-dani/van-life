import { Outlet, NavLink } from "react-router-dom";

function HostLayout(){
    return(
        <>
            <nav className="host-nav">
                <NavLink 
                    to="."
                    style={({isActive}) => isActive
                        ?{
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        :
                        {}
                    }
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="income"
                    style={({isActive}) => isActive
                        ?{
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        :
                        {}
                    }
                >
                        Income
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive
                        ?{
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        :
                        {}
                    }
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="reviews"
                    style={({isActive}) => isActive
                        ?{
                            fontWeight: "bold",
                            textDecoration: "underline",
                            color: "#161616"
                        }
                        :
                        {}
                    }
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout