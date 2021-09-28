import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SimpleDemo from './components/SimpleDemo'

class App extends React.Component {

    render(){
        return (<div className="mycontent">

                    <>
                    <h1>react-leaflet Sandbox Simple Demo</h1>
                    <p>This is a simple example using the React Leaflet project.</p>
                    </>
                    <SimpleDemo id="mapid"/>
                </div>                
        )
    }
}

export default App
