import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BasicMap from './components/BasicMap'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

export default function App() {
  return (
      <>
    <Router>
          <div>
            <nav>
            <NavBar />
            </nav>
        <Switch>
            <Route path="/staticrender" component={StaticRender} />
            <Route path="/dynamicrender" component={DynamicRender} />
            <Route path="/" component={Home} />
        </Switch>
          </div>
    </Router>
      </>
  );
}
class Home extends React.Component {
    render(){
        return (<div className="mycontent">
                    <>
                        <br />
                        <h1>Using Leaflet and React Together - A Demonstration</h1>
                        <p>Choose an option from the navigation bar to see a demo.</p>
                    </>
                </div>                
        )
    }
}
class StaticRender extends React.Component {
    render(){
        return (<div className="mycontent">
                    <>
                        <br />
                        <h1>react-leaflet Static Render</h1>
                        <p>This is a simple example using the React Leaflet project. The initial viewpoint of the map shows an area of central Auckland, New Zealand.</p>
                        <p>The purple rectangle shows a block of streets bounded by : Queen Street; Wyndham Street; Nelson Street; and Wellesley Street.</p>
                    </>
                    <BasicMap id="mapid"/>
                </div>                
        )
    }
}
class DynamicRender extends React.Component {
    render(){
        return (<div className="mycontent">
                    <>
                        <br />
                        <h1>react-leaflet Dynamic Render</h1>
                        <p>This is a simple example using the React Leaflet project. The initial viewpoint of the map shows an area of central Auckland, New Zealand.</p>
                        <p>The purple rectangle shows a block of streets bounded by : Queen Street; Wyndham Street; Nelson Street; and Wellesley Street.</p>
                    </>
                    <BasicMap id="mapid"/>
                </div>                
        )
    }
}
