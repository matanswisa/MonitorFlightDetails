import React, { Component } from 'react';
import HSIComponent from './HIS/HISComponent';


class VisualMonitor extends Component {

  constructor(props){
    super(props);
    console.log(props);

  }

  render() {

    return (
      <div className="visual">
            <h1 class="display-5">Visual Monitor</h1>
              
             <HSIComponent HIS={this.props.FlightCords.his}/>

      </div>
    );
  }
}

// const jumbotronStyle = {
//   width:'70%',
//   height:'400px',
//   margin:'0 auto',
//   marginTop:'100px'
// }

export default VisualMonitor;
