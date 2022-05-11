import React from "react"
import { MapContainer, Polygon, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import InternalMapCntnr from './InternalMapCntnr'
import 'leaflet/dist/leaflet.css'

const ControllableMap = ( props ) => {
	//
	//The props.mapPosition value is a string that looks like this
	//"12_34" which needs to be converted to a two element array like
	//this [12,34] which equates to a latitude of 12 and a longitude of
	//34
	//
    //
    //[41.881944, -87.627778]
    //
    //Chicago
    //Paris
    //Johnannesberg
    //Bangalore
    const cities = [
        [41.881944, -87.627778],
        [48, 2],
        [-26.2044, 28.0455],
        [12.978889, 77.591667]
    ] 
    const selected_city = cities[Math.floor(Math.random() * cities.length)]
    //
    console.log("ControllableMapAlternate, props follow ...")
    console.log(props)
    console.log("ControllableMapAlternate, selected_city follow ...")
    console.log(selected_city)
    return (
        <MapContainer id="mapid" style={{ height: "450px", width: "600px" }} scrollWheelZoom={false}>
            <InternalMapCntnr  center={props.mapPosition.split("_")} zoom={9} />
        </MapContainer>
    )
}
export default ControllableMap
