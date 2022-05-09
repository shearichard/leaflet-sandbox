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
import 'bootstrap/dist/css/bootstrap.min.css';
import EventsExample from './EventsExample'

const SampleRender = () => {
    
    return (<div className="mycontent">
                <h1>Sample Render</h1>
                <EventsExample />
            </div>                
    )
}
export default SampleRender
