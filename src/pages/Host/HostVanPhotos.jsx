import { useOutletContext } from "react-router-dom"

function HostVansPhotos(){
    const {van} = useOutletContext()
    return (
        <img src={van.imageUrl} className="host-van-detail-image" />
    )
}

export default HostVansPhotos