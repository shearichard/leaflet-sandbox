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
//_________________________________________
import { useMap } from 'react-leaflet'
import { MapContainer, Polygon, Marker, Popup, TileLayer } from "react-leaflet";
//_________________________________________
//import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

import 'bootstrap/dist/css/bootstrap.min.css';
import ControllableMap from './ControllableMap'

const UserControlledRender = () => {
    console.log("UserControlledRender")
    
    const initialLatLngs = [
            [-41.29244, 174.77890],
            [-41.29551, 174.77715],
            [-41.29707, 174.78200],
            [-41.29407, 174.78391]]
    //
    const initialMapPosition = [-41.8484, 174.7621]
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
                    <br />
                    <h1>User Controlled Render</h1>
                </>
				<div className="d-flex justify-content-left p-5">
                <Form inline>
                  <FormGroup>
                    <Label for="degreeslatitude" hidden >Latitude</Label>
                    <Input 
                        value={latitude}   
                        name="degreeslatitude" 
                        id="degreeslatitude" 
                        placeholder="Degrees Latitudex" 
                        type="text"
                        onChange={e => setLatitude(Number(e.target.value))} 
                    />
                  </FormGroup>
                  {/*
                  {'X'}
                <UncontrolledDropdown>
                    <DropdownToggle caret>
                        North/South
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>North</DropdownItem>
                      <DropdownItem>South</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                */}
                  {'X'}
                  <FormGroup>
                    <Label for="degreeslongitude" hidden >Longitude</Label>
                    <Input 
                        value={longitude}   
                        name="degreeslongitude" 
                        id="degreeslongitude" 
                        placeholder="Degrees Longitudex" 
                        type="text"
                        onChange={e => setLongitude(Number(e.target.value))} 
                    />
                  </FormGroup>
                  {/*
                  {'X'}
                <UncontrolledDropdown>
                    <DropdownToggle caret>
                        East/West
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>East</DropdownItem>
                      <DropdownItem>West</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                */}
                  {'Z'}
                  <Button onClick={refreshMap} >Submit</Button>
                  <Button onClick={foo}>Call foo</Button> 
                </Form>
				</div>
                {/*
                <ControllableMap 
                    id="mapid"  
                    showcontrols={false} 
                    mapPosition={mapPosition}
                    areaOfInterest={areaOfInterest}
                />
                */}
                <h2>My Component v3</h2>            
                <MyMapComponent 
                    mapPosition={mapPosition}
                />
            </div>                
    )
}

/*
function MyComponent(props) {
    const map = useMap();
    map.setView(props.center, props.zoom);
    return null;
}
*/
function MyMapComponent( props ) {
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
    console.log("MyMapComponent, props follow ...")
    console.log(props)
    console.log("MyMapComponent, selected_city follow ...")
    console.log(selected_city)
    //
    //<MapContainer id="mapid" style={{ height: "450px", width: "600px" }} center={selected_city} zoom={9} scrollWheelZoom={false}>
    return (
        <MapContainer id="mapid" style={{ height: "450px", width: "600px" }} scrollWheelZoom={false}>
            <MyComponent  center={selected_city} zoom={9} />
        </MapContainer>
    )
}
function MyComponent( props ) {
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
function MyComponent_HIDE_1() {
    const map = useMap()
    console.log('map center:', map.getCenter())
    return null
}

export default UserControlledRender
