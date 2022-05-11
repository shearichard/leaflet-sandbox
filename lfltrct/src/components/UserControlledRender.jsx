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
import { MapContainer, Polygon, Marker, Popup, TileLayer } from "react-leaflet";
import 'bootstrap/dist/css/bootstrap.min.css';
import ControllableMap from './ControllableMap'

const UserControlledRender = () => {
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
                <ControllableMap 
                  mapPosition={fake_mapPosition}
                />
              </div>
            </div>
          )
}
export default UserControlledRender
