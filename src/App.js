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


  componentDidMount(){
    socket = socketIoClient.connect(this.state.endpoint, {'timeout':Infinity});
    console.log(socket);
    socket.on('cords',data=>{
      console.log(`${socket} just got his cords`);
      console.log(data);
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
