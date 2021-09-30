import React from 'react'
import BasicMap from './BasicMap'

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
export default DynamicRender
