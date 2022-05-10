import React from 'react'
import { useState, useEffect } from 'react'
import {
  Dropdown,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  Button,
} from 'reactstrap';
import {get_cities, get_countries} from './utils';

//_________________________________________
import { useMap } from 'react-leaflet'
import { MapContainer, Polygon, Marker, Popup, TileLayer } from "react-leaflet";
//_________________________________________
//import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

import 'bootstrap/dist/css/bootstrap.min.css';
import ControllableMap from './ControllableMap'

const UserControlledRender = () => {

    //
    console.log("UserControlledRender")
    //
    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Runs ONCE after initial rendering
        //let arr_cities = get_cities();
        setCities(get_cities()); 
    }, []);
    const initialLatLngs = [
            [-41.29244, 174.77890],
            [-41.29551, 174.77715],
            [-41.29707, 174.78200],
            [-41.29407, 174.78391]]
    //
    const initialMapPosition = [-41.8484, 174.7621]
    //
    const makeAreaDefinition = (lat, lng) => {
        console.log(`makeAreaDefinition starts lat = ${lat}, lng = ${lng} . `)
        return [
            [lat + 0.2, lng - 0.2],
            [lat + 0.2, lng + 0.2],
            [lat - 0.2, lng + 0.2],
            [lat - 0.2, lng - 0.2]]
    } 
    //
    const makeMapPosition = (lng, lat) => {
        console.log(`makeMapPosition starts lat = ${lat}, lng = ${lng} . `)
        return [lat, lng]
    }
    //
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [areaOfInterest, setAreaOfInterest] = useState(initialLatLngs)
    const [mapPosition, setMapPosition] = useState(initialMapPosition)
    const [fake_mapPosition, fake_setMapPosition] = useState(initialMapPosition.join("_"))
    //This useEffect is only here while the changing of
    //the areaOfInterest stabilises
    useEffect(() => console.log(areaOfInterest), [areaOfInterest]);
    //
    const foo = () => {
        alert("This is foo")
    }
    const refreshMap = () => {
        console.log(`refreshMap starts latitude = ${latitude}, longitude = ${longitude} . `)
        //let aod = makeAreaDefinition(longitude, latitude)                 
        let aod = [
            [latitude + 0.2, longitude - 0.2],
            [latitude + 0.2, longitude + 0.2],
            [latitude - 0.2, longitude + 0.2],
            [latitude - 0.2, longitude - 0.2]]
        console.log(aod)
        setAreaOfInterest(aod)                 
        console.log(`About to call makeMapPosition ... latitude = ${latitude}, longitude = ${longitude} . `)
        let mp = makeMapPosition(longitude, latitude)
        console.log(`Finished call makeMapPosition ... latitude = ${latitude}, longitude = ${longitude}, mp = ${mp} . `)
        console.log(mp)
        setMapPosition(mp)
    }
    //
    return (<div className="mycontent">
              <>
                <br/>
                <h1>Use Controlled Render</h1>
              </>
              <div className="d-flex justify-content-left p-5">
                <Form>
                  <FormGroup>
                    <Label for="city_select">
                      City 
                    </Label>
                    <Input
                        required
                        value={fake_mapPosition}
                        onChange={(e) => {fake_setMapPosition(e.target.value)} }
                        id="city_select"
                        name="select"
                        type="select"
                    >
                        {cities.map(city => (
                            <option value={city.lat_lng_as_string}>
                                {city.country} | {city.city}
                            </option>
                        ))}
                    </Input>
                  </FormGroup>
                </Form>
              </div>                
              <div className="d-flex justify-content-left p-5">
                <ControllableMapAlternate 
                  mapPosition={fake_mapPosition}
                />
              </div>
            </div>
          )
}

/*
function InternalMapCntnr(props) {
    const map = useMap();
    map.setView(props.center, props.zoom);
    return null;
}
*/
const ControllableMapAlternate = ( props ) => {
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
    //
    //<MapContainer id="mapid" style={{ height: "450px", width: "600px" }} center={selected_city} zoom={9} scrollWheelZoom={false}>
		//<InternalMapCntnr  center={selected_city} zoom={9} />
    //
    return (
        <MapContainer id="mapid" style={{ height: "450px", width: "600px" }} scrollWheelZoom={false}>
            <InternalMapCntnr  center={props.mapPosition.split("_")} zoom={9} />
        </MapContainer>
    )
}
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

export default UserControlledRender
