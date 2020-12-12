import React, { Component } from 'react';
import VisualMonitor from './VisualFlightMonitor/visualFlightMonitor.js'
import TextualMonitor from './TextualMonitor/textualMonitor.js';
import socketIoClient from 'socket.io-client';
import './App.css';

let socket;
class App extends Component {


  constructor(){
    super();
    this.state = {
      endpoint:'http://localhost:8080',
      data:null,
      socket:null
    }
    socket = socketIoClient.connect(this.state.endpoint);
  }

  componentWillMount(){
  }

  componentDidMount(){
    console.log('Component Did Mount');
    socket.emit('requestingCords');
    socket.on('cords',data=>{
      console.log(`${socket} just got his cords`);
      this.setState({flightCords:data});
      socket.emit('requestingCords');
    });
  }

  render() {

    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="buttons-wrapper" style={{left:"0px", width:"200px", padding:"10px"}}>
          <button className="btn btn-primary">Visual</button> 
          <button className="btn btn-primary">Textual</button> 
          </div>
          <TextualMonitor FlightCords={this.state.flightCords} />
        </div>
      </div>
    );
  }
}


export default App;
