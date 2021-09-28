import React from "react"
import { MapContainer, Polygon, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'

class App extends React.Component {
    render(){
        const position = [-36.8484, 174.7621]
        const latlngs = [[-36.8503325,174.7633283],[-36.84740269087975, 174.76575297151567],[-36.84596244369074, 174.76083916477606],[-36.849401767006874, 174.75931164657456]]
        
        const purpleOptions = { color: 'purple' }
        const popuptext = "The Auckland Sky Tower."
                
        return(
            <MapContainer id="mapid" style={{ height: "450px", width: "600px" }} center={position} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polygon pathOptions={purpleOptions} positions={latlngs}/>
                <Marker position={position}>
                    <Popup>
                        {popuptext}
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }
}

export default App
