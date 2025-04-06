import { useState, useEffect } from 'react'
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'


function HostVansDetailLayout(){
    const params = useParams()
    const [van,setVan] = useState(null)
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans[0]))
    },[params.id])
    return(
        <div>
            {van?
                <section>
                    <Link
                        to=".."
                        relative="path"
                        className="back-button"
                    >&larr; <span>Back to all vans</span></Link>
                    <div className="host-van-detail-layout-container">
                        <div className="host-van-detail">
                            <img src={van.imageUrl} />
                            <div className="host-van-detail-info-text">
                                <i
                                    className={`van-type van-type-${van.type}`}
                                >
                                    {van.type}
                                </i>
                                <h3>{van.name}</h3>
                                <h4>${van.price}/day</h4>
                            </div>
                        </div>
                        <nav className="host-van-detail-nav">
                            <NavLink to="." style={({ isActive }) => isActive ? activeStyles : null} end>Detail</NavLink>
                            <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyles : null}>Pricing</NavLink>
                            <NavLink to="photos" style={({ isActive }) => isActive ? activeStyles : null}>Photos</NavLink>
                        </nav>
                        <Outlet context={{van}}/>
                    </div>
                    
                </section>
            :(<h1>Loading...</h1>)}
        </div>
        
    )
}

export default HostVansDetailLayout