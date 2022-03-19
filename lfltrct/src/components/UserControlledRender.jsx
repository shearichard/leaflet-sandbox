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
                    <Input id="degreeslatitude" name="degreeslatitude" placeholder="Degrees Latitude" type="text" />
                  </FormGroup>
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
                  {'X'}
                  <FormGroup>
                    <Label for="degreeslongitude" hidden >Longitude</Label>
                    <Input id="degreeslongitude" name="degreeslongitude" placeholder="Degrees Longitude" type="text" />
                  </FormGroup>
                  {' '}
                  {' '}
                <UncontrolledDropdown>
                    <DropdownToggle caret>
                        East/West
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>East</DropdownItem>
                      <DropdownItem>West</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                  {' '}
                  <Button>Submit</Button>
                </Form>
				</div>
                <ControllableMap id="mapid"  showcontrols={false} />
            </div>                
    )
}
export default UserControlledRender
