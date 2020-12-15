import React, { Component } from 'react';
import AltitudeComponent from './Altitude/AltitudeComponent';
import HSIComponent from './HIS/HISComponent';
import ADIComponent from './ADIComponent/ADIComponent.js'

class VisualMonitor extends Component {

  constructor(props){
    super(props);
    console.log(props);

  }

  render() {

    return (
      <div className="visual">
            <h1 class="display-5">Visual Flight Monitor</h1>
            <div className="row">
              <div className="col">
            <AltitudeComponent altitude={this.props.FlightCords.altitude}/>
              </div>
              <div className="col">
                
            <HSIComponent HIS={this.props.FlightCords.his}/>
              </div>
              <div className="col">
            <ADIComponent ADI={this.props.FlightCords.adi}/>

                </div>
            </div>
      </div>
    );
  }
}


export default VisualMonitor;
