import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function HostVans(){
    const [hostVans, setHostVans] = useState([])
    useEffect(()=>{
        fetch('/api/host/vans')
            .then(response => response.json())
            .then(data => setHostVans(data.vans))
    },[])
    return(
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    hostVans.length > 0 ? (
                        <section>
                    {hostVans.map(van => (
                            <Link
                                to={`/host/vans/${van.id}`}
                                key={van.id}
                                className="host-van-link-wrapper"
                            >
                                <div className="host-van-single" key={van.id}>
                                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                                    <div className="host-van-info">
                                        <h3>{van.name}</h3>
                                        <p>${van.price}/day</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    )}
                    </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
                            
    )
}

export default HostVans