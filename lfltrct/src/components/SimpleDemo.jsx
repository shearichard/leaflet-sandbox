import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'

class App extends React.Component {
    render(){
        const position = [-36.8484, 174.7621]
        const popuptext = "The Auckland Sky Tower."
                
        return(
            <MapContainer id="mapid" style={{ height: "450px", width: "600px" }} center={position} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
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
