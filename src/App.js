import React, { Component } from 'react';
import VisualMonitor from './VisualFlightMonitor/visualFlightMonitor.js'
import TextualMonitor from './TextualMonitor/textualMonitor.js';
import socketIoClient from 'socket.io-client';
import './App.css';

let clientSocket;
class App extends Component {
  constructor(){
    super();
    this.state = {
      endpoint:'http://localhost:8080',
      data:null,
      socket:{
        autoConnect:true
      },
      flightCords:{
        his:0,
        adi:0,
        altitude:0
      },
      isTextView : false,
      isVisualView : true
    }
  }


  /** 
  *In the end of the render of component  , client socket creates a  TCP connection with server.
  *The client socket will recive a flight cords and set the state of the new cords.
  **/
  componentDidMount(){
    clientSocket = socketIoClient.connect(this.state.endpoint, {'timeout':Infinity});
    clientSocket.on('sendCordsToClient',data=>{
      this.setState({flightCords:data});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="buttons-wrapper" style={{left:"0px", width:"200px", padding:"10px"}}>
          <button onClick={()=>this.setState({isTextView:false,isVisualView:true})} className="btn btn-primary">Visual</button> 
          <button  onClick={()=>this.setState({isTextView:true,isVisualView:false})} className="btn btn-primary">Textual</button> 
          </div>

          {
            this.state.isTextView && !this.state.isVisualView ?
              <TextualMonitor FlightCords={this.state.flightCords} /> :
              <VisualMonitor FlightCords={this.state.flightCords} />
          }

        </div>
      </div>
    );
  }
}


export default App;
