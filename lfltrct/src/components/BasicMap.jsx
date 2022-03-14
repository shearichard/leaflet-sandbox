import React from "react"
import { MapContainer, Polygon, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'

class BasicMap extends React.Component {

    static defaultProps = {
          showcontrols: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
    render(){
        const position = [-36.8484, 174.7621]
        const latlngs = [[-36.85088433890884, 174.76450574430237],[-36.84740269087975, 174.76575297151567],[-36.84596244369074, 174.76083916477606],[-36.849401767006874, 174.75931164657456]]
        
        const purpleOptions = { color: 'purple' }

        const popuptext = "The Auckland Sky Tower. " 
        this.props.name
            + this.props.name
                
        return(
            <MapContainer id="mapid" style={{ height: "450px", width: "600px" }} center={position} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
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

export default BasicMap
