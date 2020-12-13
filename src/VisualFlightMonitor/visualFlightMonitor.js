import React, { Component } from 'react';
import HSIComponent from './HIS/HSIComponent';


class VisualMonitor extends Component {

  constructor(props){
    super(props);

  }

  render() {

    return (
      <div className="visual">
            <h1 class="display-5">Visual Monitor</h1>

             <HSIComponent hsi={this.props.FlightCords.hsi}/>

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
