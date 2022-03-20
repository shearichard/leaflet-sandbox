import React from 'react'
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
import 'bootstrap/dist/css/bootstrap.min.css';
import ControllableMap from './ControllableMap'

const UserControlledRender = () => {

    const [longitude, setLongitude] = React.useState(null);
    const [latitude, setLatitude] = React.useState(null);


    const refreshMap = () => {
        console.log("refreshMap firing")
        console.log(longitude)
        console.log(latitude)
    }
    return (<div className="mycontent">
                <>
                    <br />
                    <h1>User Controlled Render</h1>
                    <h2>A functional component</h2>
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
                        onChange={e => setLatitude(e.target.value)} 
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
                        onChange={e => setLongitude(e.target.value)} 
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
                  {'X'}
                  <Button onClick={refreshMap} >Submit</Button>
                </Form>
				</div>
                <ControllableMap id="mapid"  showcontrols={false} />
            </div>                
    )
}
export default UserControlledRender
