import { useState, useEffect } from "react"


function Vans(){
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans").then(response => response.json()).then(data => setVans(data.vans))
    },[])
    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
            {vans.map(van => (
                <div key={van.id} className="van-tile">
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            ))}
            </div>
        </div>
        
    )
}

export default Vans