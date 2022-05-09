import React from "react"
import { MapContainer, Polygon, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'

const ControllableMap = ( props ) => {

    //const position = [-41.8484, 174.7621]
    //const latlngs = [[-41.85088433890884, 174.76450574430237],[-41.84740269087975, 174.76575297151567],[-41.84596244369074, 174.76083916477606],[-41.849401767006874, 174.75931164657456]]
    
    const purpleOptions = { color: 'purple' }
    const popuptext = "Some sample popup text"
    console.log("ControllableMap")
    console.log("props follows ...")
    console.log(props)
    console.log("... props finished")
    //console.log("latlngs follows ...")
    //console.log(latlngs)
    //console.log("... latlngs finished")
    //console.log("position follows ...")
    //console.log(position)
    //console.log("... position finished")
            
    return(
        <MapContainer id="mapid" style={{ height: "450px", width: "600px" }} center={props.mapPosition} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polygon pathOptions={purpleOptions} positions={props.areaOfInterest}/>
            <Marker position={props.mapPosition}>
                <Popup>
                    {popuptext}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default ControllableMap
