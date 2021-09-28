import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SimpleDemo from './components/SimpleDemo'

class App extends React.Component {

    render(){
        return (<div className="mycontent">
                    <SimpleDemo id="mapid"/>
                </div>                
        )
    }
}

export default App
