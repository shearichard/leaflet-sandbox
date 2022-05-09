import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BasicMap from './components/BasicMap'
import NavBar from './components/NavBar'
import Home from './components/Home'
import StaticRender from './components/StaticRender'
import DynamicRender from './components/DynamicRender'
import UserControlledRender from './components/UserControlledRender'
import SampleRender from './components/SampleRender'

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
            <Route path="/usercontrolledrender" component={UserControlledRender} />
            <Route path="/samplerender" component={SampleRender} />
            <Route path="/" component={Home} />
        </Switch>
          </div>
    </Router>
      </>
  );
}
