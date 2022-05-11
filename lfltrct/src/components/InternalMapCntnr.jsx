import React from "react"
import { TileLayer } from "react-leaflet";
import { useMap } from 'react-leaflet'

const InternalMapCntnr = ( props ) => {
    const map = useMap()
    map.setView(props.center, props.zoom);
    console.log('map center:', map.getCenter())
    return (
        <TileLayer
            attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    )
}
export default InternalMapCntnr
