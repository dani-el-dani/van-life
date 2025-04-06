import { useOutletContext } from "react-router-dom"

function HostVansPricing(){
    const {van} = useOutletContext()
    return (
        <h3 className="host-van-price">${van.price}<span>/day</span></h3>
    )
}

export default HostVansPricing